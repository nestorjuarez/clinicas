import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import Navbar from './components/Navbar';
import ProfessionalsManagement from './admin/ProfessionalsManagement';
import SpecialtiesManagement from './admin/SpecialtiesManagement';
import PatientsManagement from './PatientsManagement';


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
      include: {
        patients: {
          select: {
            id: true,
            name: true,
            email: true,
            dni: true,
            phone: true,
            dateOfBirth: true,
          },
        },
      },
    });

    return user;
  } catch (error) {
    console.error('Failed to verify token or fetch user', error);
    return null;
  }
}

async function getSpecialties() {
  return await prisma.specialty.findMany();
}

async function getProfessionals() {
  return await prisma.user.findMany({
    where: {
      role: 'PROFESIONAL',
    },
    include: {
      specialties: true,
    },
    orderBy: {
      name: 'asc',
    },
  });
}

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }
  
  const specialties = user.role === 'ADMIN' ? await getSpecialties() : [];
  const professionals = user.role === 'ADMIN' ? await getProfessionals() : [];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar user={user} />
      <div className="max-w-4xl p-8 mx-auto">

        {user.role === 'PROFESIONAL' && (
          <PatientsManagement initialPatients={user.patients} professionalId={user.id} />
        )}

        {user.role === 'ADMIN' && (
          <div className="space-y-8">
            <div className="p-8 bg-white border-gray-200 rounded-lg shadow-md">
              <h2 className="pb-6 text-2xl font-semibold text-gray-800 border-b border-gray-200">Panel de Administración</h2>
              <div className="mt-6">
                <ProfessionalsManagement professionals={professionals} specialties={specialties} />
              </div>
            </div>
            <div className="p-8 bg-white border-gray-200 rounded-lg shadow-md">
                <SpecialtiesManagement initialSpecialties={specialties} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
