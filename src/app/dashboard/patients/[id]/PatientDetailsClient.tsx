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
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{patient.name}</h1>
                <p className="text-indigo-100 text-sm">Información del Paciente</p>
              </div>
            </div>
            <button
              onClick={() => setEditingPatient(true)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-200 shadow-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Editar
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-gray-900">{patient.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">DNI</p>
                  <p className="text-gray-900">{patient.dni}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {patient.phone && (
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Teléfono</p>
                    <p className="text-gray-900">{patient.phone}</p>
                  </div>
                </div>
              )}
              
              {patient.dateOfBirth && (
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Fecha de Nacimiento</p>
                    <p className="text-gray-900">{new Date(patient.dateOfBirth).toLocaleDateString('es-ES')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Historial de Visitas</h2>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg shadow-sm hover:from-indigo-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nueva Visita
          </button>
        </div>
        <div className="space-y-4">
          {patient.clinicalHistory?.visits && patient.clinicalHistory.visits.length > 0 ? (
            patient.clinicalHistory.visits.map((visit) => (
              <div key={visit.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition duration-200">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="h-10 w-10 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-lg flex items-center justify-center">
                          <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {new Date(visit.visitDate).toLocaleDateString('es-ES')}
                          </h3>
                          <p className="text-sm text-gray-500">Fecha de la visita</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Motivo</p>
                            <p className="text-gray-900">{visit.reason}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Diagnóstico</p>
                            <p className="text-gray-900">{visit.diagnosis}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <button
                        onClick={() => setViewingVisit(visit)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Ver
                      </button>
                      <button
                        onClick={() => setEditingVisit(visit)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg hover:from-indigo-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No hay visitas registradas</h3>
              <p className="text-gray-500">Este paciente aún no tiene visitas registradas en el sistema.</p>
            </div>
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
