'use client';

import { useState } from 'react';
import AddVisitForm from './AddVisitForm';
import EditVisitForm from './EditVisitForm';
import EditPatientForm from './EditPatientForm';

// Definimos los tipos para que el código sea más seguro y claro
type Visit = {
  id: number;
  visitDate: Date;
  reason: string;
  diagnosis: string;
  epicrisis: string; // Added epicrisis
  treatment: string; // Added treatment
};

type ClinicalHistory = {
  id: number;
  visits: Visit[];
};

type Patient = {
  id: number;
  name: string;
  email: string;
  dni: string;
  phone: string | null;
  dateOfBirth: Date | null;
  address: string | null;
  clinicalHistory: ClinicalHistory | null;
};

interface PatientDetailsClientProps {
  patient: Patient;
  professionalId: number;
}

export default function PatientDetailsClient({ patient, professionalId }: PatientDetailsClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewingVisit, setViewingVisit] = useState<Visit | null>(null); // State for the details modal
  const [editingVisit, setEditingVisit] = useState<Visit | null>(null); // State for editing modal
  const [editingPatient, setEditingPatient] = useState(false); // State for editing patient
  const clinicalHistoryId = patient.clinicalHistory?.id;

  const handleSuccess = () => {
    setIsModalOpen(false);
  };

  const handleEditSuccess = () => {
    setEditingVisit(null);
    // Recargar la página para mostrar los cambios
    window.location.reload();
  };

  const handlePatientEditSuccess = () => {
    setEditingPatient(false);
    // Recargar la página para mostrar los cambios
    window.location.reload();
  };

  return (
    <>
      {/* Patient Info Card */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">{patient.name}</h1>
          <button
            onClick={() => setEditingPatient(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Editar Paciente
          </button>
        </div>
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

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">Historial de Visitas</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
          >
            Registrar Nueva Visita
          </button>
        </div>
        <div className="mt-4 space-y-4">
          {patient.clinicalHistory?.visits && patient.clinicalHistory.visits.length > 0 ? (
            patient.clinicalHistory.visits.map((visit) => (
              <div key={visit.id} className="p-4 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Fecha: {new Date(visit.visitDate).toLocaleDateString('es-ES')}</p>
                    <p><span className="font-semibold">Motivo:</span> {visit.reason}</p>
                    <p><span className="font-semibold">Diagnóstico:</span> {visit.diagnosis}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setViewingVisit(visit)}
                      className="px-3 py-1 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
                    >
                      Ver Detalles
                    </button>
                    <button 
                      onClick={() => setEditingVisit(visit)}
                      className="px-3 py-1 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No hay visitas registradas.</p>
          )}
        </div>
      </div>

      {/* Visit Details Modal */}
      {viewingVisit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
            <h3 className="mb-4 text-xl font-semibold">Detalles de la Visita</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Evolución</h4>
                <p className="p-2 mt-1 bg-gray-100 border border-gray-200 rounded-md whitespace-pre-wrap">{viewingVisit.epicrisis}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Tratamiento</h4>
                <p className="p-2 mt-1 bg-gray-100 border border-gray-200 rounded-md whitespace-pre-wrap">{viewingVisit.treatment}</p>
              </div>
            </div>
            <button
              onClick={() => setViewingVisit(null)}
              className="px-4 py-2 mt-6 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Edit Visit Modal */}
      {editingVisit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl">
            <button
              onClick={() => setEditingVisit(null)}
              className="absolute top-0 right-0 p-2 m-4 text-gray-500 rounded-full hover:bg-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 className="mb-4 text-xl font-semibold">Editar Visita</h3>
            <EditVisitForm 
              visit={editingVisit} 
              professionalId={professionalId} 
              onSuccess={handleEditSuccess}
              onCancel={() => setEditingVisit(null)}
            />
          </div>
        </div>
      )}

      {/* Edit Patient Modal */}
      {editingPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl">
            <button
              onClick={() => setEditingPatient(false)}
              className="absolute top-0 right-0 p-2 m-4 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 className="mb-4 text-xl font-semibold">Editar Paciente</h3>
            <EditPatientForm 
              patient={patient} 
              onSuccess={handlePatientEditSuccess}
              onCancel={() => setEditingPatient(false)}
            />
          </div>
        </div>
      )}

      {/* Add Visit Modal (remains the same) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-0 right-0 p-2 m-4 text-gray-500 rounded-full hover:bg-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 className="mb-4 text-xl font-semibold">Registrar Nueva Visita</h3>
            {clinicalHistoryId ? (
              <AddVisitForm clinicalHistoryId={clinicalHistoryId} professionalId={professionalId} onSuccess={handleSuccess} />
            ) : (
              <p className="text-red-600">Error: No se encontró una historia clínica para este paciente.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
