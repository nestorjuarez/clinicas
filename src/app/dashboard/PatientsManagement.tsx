'use client';

import { useState } from 'react';
import Link from 'next/link';
import CreatePatientForm from './CreatePatientForm';

type Patient = {
  id: number;
  name: string;
  email: string;
};

interface PatientsManagementProps {
  initialPatients: Patient[];
  professionalId: number;
}

export default function PatientsManagement({ initialPatients, professionalId }: PatientsManagementProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSuccess = () => {
    setIsModalOpen(false);
    // El router.refresh() en el formulario se encargará de actualizar la lista
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-6 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Tus Pacientes</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Registrar Paciente
        </button>
      </div>

      <div className="mt-6">
        {initialPatients.length > 0 ? (
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <ul className="divide-y divide-gray-200">
              {initialPatients.map((patient) => (
                <li key={patient.id}>
                  <Link href={`/dashboard/patients/${patient.id}`} className="block px-4 py-4 hover:bg-gray-50">
                    <p className="font-bold text-indigo-600">{patient.name}</p>
                    <p className="text-sm text-gray-600">{patient.email}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-500">Aún no tienes pacientes registrados.</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-0 right-0 p-2 m-4 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 className="mb-4 text-xl font-semibold">Registrar Nuevo Paciente</h3>
            <CreatePatientForm professionalId={professionalId} onSuccess={handleSuccess} />
          </div>
        </div>
      )}
    </div>
  );
}
