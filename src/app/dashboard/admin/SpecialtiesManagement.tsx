'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Specialty = {
  id: number;
  name: string;
};

interface SpecialtiesManagementProps {
  initialSpecialties: Specialty[];
}

export default function SpecialtiesManagement({ initialSpecialties }: SpecialtiesManagementProps) {
  // No necesitamos un estado para la lista, la renderizaremos directamente de las props.
  // const [specialties, setSpecialties] = useState<Specialty[]>(initialSpecialties);
  const [newSpecialty, setNewSpecialty] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newSpecialty.trim()) {
      setError('El nombre de la especialidad no puede estar vacío.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/specialties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newSpecialty }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al crear la especialidad');
      }
      
      setNewSpecialty('');
      router.refresh(); 

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear la especialidad.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700">Gestión de Especialidades</h3>

      {/* Formulario para añadir nueva especialidad */}
      <form onSubmit={handleSubmit} className="flex items-center mt-4 space-x-2">
        <input
          type="text"
          value={newSpecialty}
          onChange={(e) => setNewSpecialty(e.target.value)}
          placeholder="Nombre de la nueva especialidad"
          className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
        >
          {loading ? 'Agregando...' : 'Agregar'}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      {/* Lista de especialidades existentes */}
      <div className="mt-6">
        <h4 className="text-lg font-medium text-gray-600">Especialidades Existentes</h4>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          {initialSpecialties.map(spec => (
            <li key={spec.id} className="text-gray-700">{spec.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
