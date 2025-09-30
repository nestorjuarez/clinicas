import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

interface UserPayload {
  userId: number;
}

async function getAdminUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
    const admin = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    return admin && admin.role === 'ADMIN' ? admin : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 403 });
  }

  try {
    const { name } = await request.json();

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json({ message: 'El nombre es obligatorio' }, { status: 400 });
    }

    const existingSpecialty = await prisma.specialty.findUnique({ where: { name } });
    if (existingSpecialty) {
      return NextResponse.json({ message: 'La especialidad ya existe' }, { status: 409 });
    }

    const newSpecialty = await prisma.specialty.create({
      data: {
        name,
      },
    });

    return NextResponse.json(newSpecialty, { status: 201 });
  } catch (error) {
    console.error('Error al crear especialidad:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}
