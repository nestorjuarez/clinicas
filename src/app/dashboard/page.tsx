import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../generated-prisma-client';
import { redirect } from 'next/navigation';
import LogoutButton from './LogoutButton';

const prisma = new PrismaClient();

interface UserPayload {
  userId: number;
  email: string;
  iat: number;
  exp: number;
}

async function getUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as UserPayload;
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { name: true, email: true },
    });

    return user;
  } catch (error) {
    console.error('Failed to verify token or fetch user', error);
    return null;
  }
}

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 text-center bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-900">
          ¡Bienvenido al Dashboard, {user.name}!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Has iniciado sesión como {user.email}.
        </p>
        <div className="mt-8">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
