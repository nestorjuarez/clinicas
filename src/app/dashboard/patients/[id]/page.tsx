import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import PatientDetailsClient from './PatientDetailsClient';
import Link from 'next/link';

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
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as UserPayload;
    professionalId = decoded.userId;
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
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-500">Paciente no encontrado o no tienes permiso para verlo.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl p-8 mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-800">
            &larr; Volver al panel
          </Link>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800">{patient.name}</h1>
          <div className="mt-2 space-y-1">
            <p className="text-gray-600">{patient.email}</p>
            <p className="text-gray-600">DNI: {patient.dni}</p>
            {patient.phone && <p className="text-gray-600">Teléfono: {patient.phone}</p>}
            {patient.dateOfBirth && (
              <p className="text-gray-600">
                Fecha de Nacimiento: {new Date(patient.dateOfBirth).toLocaleDateString('es-ES')}
              </p>
            )}
          </div>
        </div>
        
        <PatientDetailsClient patient={patient} professionalId={professionalId} />
      </div>
    </div>
  );
}
