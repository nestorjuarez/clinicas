import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import PatientDetailsClient from './PatientDetailsClient';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

interface UserPayload {
  userId: number;
}

export default async function PatientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // 1. Get Professional ID from cookies
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) {
    redirect('/login');
  }

  let professionalId: number;
  let user: any;
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as UserPayload;
    professionalId = decoded.userId;
    
    // Obtener información del usuario para el navbar
    user = await prisma.user.findUnique({
      where: { id: professionalId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  } catch {
    redirect('/login');
  }

  // 2. Get Patient Data
  const resolvedParams = await params;
  const patientId = parseInt(resolvedParams.id, 10);
    const patient = await prisma.patient.findFirst({
      where: {
        id: patientId,
        professionalId: professionalId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        dni: true,
        phone: true,
        dateOfBirth: true,
        address: true,
        clinicalHistory: {
          include: {
            visits: {
              orderBy: {
                visitDate: 'desc',
              },
            },
          },
        },
      },
    });

  if (!patient) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar user={user} />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <p className="text-xl text-red-500">Paciente no encontrado o no tienes permiso para verlo.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar user={user} />
      <div className="max-w-4xl p-8 mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-800">
            &larr; Volver al panel
          </Link>
        </div>

        <PatientDetailsClient patient={patient} professionalId={professionalId} />
      </div>
    </div>
  );
}
