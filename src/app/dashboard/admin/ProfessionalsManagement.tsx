'use client';

import { useState } from 'react';
import CreateProfessionalForm from './CreateProfessionalForm';

type Professional = {
  id: number;
  name: string | null;
  email: string;
  city: string | null;
  specialties: Specialty[];
};

type Specialty = {
  id: number;
  name: string;
};

interface ProfessionalsManagementProps {
  professionals: Professional[];
  specialties: Specialty[];
}

export default function ProfessionalsManagement({ professionals, specialties }: ProfessionalsManagementProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccess = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-700">Gestión de Profesionales</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Registrar Profesional
        </button>
      </div>

      {/* Tabla de Profesionales */}
      <div className="mt-4 overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Nombre</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Email</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Especialidades</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Ciudad</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {professionals.map((prof) => (
                  <tr key={prof.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{prof.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{prof.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {prof.specialties.map(s => s.name).join(', ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{prof.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      {/* Modal para el Formulario */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-0 right-0 p-2 m-4 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 className="mb-4 text-xl font-semibold">Registrar Nuevo Profesional</h3>
            <CreateProfessionalForm specialties={specialties} onSuccess={handleSuccess} />
          </div>
        </div>
      )}
    </div>
  );
}
