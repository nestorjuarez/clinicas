import { NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated-prisma-client';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

interface UserPayload {
  userId: number;
}

async function getProfessionalUser(professionalId: number) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
    if (decoded.userId !== professionalId) return null; // Security check

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    return user && user.role === 'PROFESIONAL' ? user : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const { 
      reason, 
      epicrisis, 
      diagnosis, 
      treatment, 
      clinicalHistoryId, 
      professionalId 
    } = await request.json();
    
    const professional = await getProfessionalUser(professionalId);
    if (!professional) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 403 });
    }
    
    if (!reason || !epicrisis || !diagnosis || !treatment || !clinicalHistoryId) {
      return NextResponse.json({ message: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    const newVisit = await prisma.visit.create({
      data: {
        reason,
        epicrisis,
        diagnosis,
        treatment,
        clinicalHistory: {
          connect: { id: clinicalHistoryId },
        },
        professional: {
          connect: { id: professional.id },
        },
      },
    });

    return NextResponse.json(newVisit, { status: 201 });
  } catch (error) {
    console.error('Error al crear la visita:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}

