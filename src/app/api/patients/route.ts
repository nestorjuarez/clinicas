import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

interface UserPayload {
  userId: number;
}

async function getProfessionalUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    return user && user.role === 'PROFESIONAL' ? user : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const professional = await getProfessionalUser();
  if (!professional) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 403 });
  }

  try {
    const { name, email, phone, dateOfBirth, address, dni } = await request.json();

    if (!name || !email || !dni) {
      return NextResponse.json({ message: 'Nombre, email y DNI son obligatorios' }, { status: 400 });
    }

    const existingPatientByEmail = await prisma.patient.findUnique({ where: { email } });
    if (existingPatientByEmail) {
      return NextResponse.json({ message: 'Ya existe un paciente con este correo electrónico' }, { status: 409 });
    }

    const existingPatientByDNI = await prisma.patient.findUnique({ where: { dni } });
    if (existingPatientByDNI) {
      return NextResponse.json({ message: 'Ya existe un paciente con este DNI' }, { status: 409 });
    }

    const newPatient = await prisma.patient.create({
      data: {
        name,
        email,
        dni,
        phone,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        address,
        professional: {
          connect: { id: professional.id },
        },
        // Al crear un paciente, también creamos su historia clínica
        clinicalHistory: {
          create: {},
        },
      },
    });

    return NextResponse.json(newPatient, { status: 201 });
  } catch (error) {
    console.error('Error al crear paciente:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}
