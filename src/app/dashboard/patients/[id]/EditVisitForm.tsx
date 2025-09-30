'use client';

import { useState } from 'react';

interface Visit {
  id: number;
  visitDate: Date;
  reason: string;
  diagnosis: string;
  epicrisis: string;
  treatment: string;
}

interface EditVisitFormProps {
  visit: Visit;
  professionalId: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function EditVisitForm({ visit, professionalId, onSuccess, onCancel }: EditVisitFormProps) {
  const [formData, setFormData] = useState({
    reason: visit.reason,
    diagnosis: visit.diagnosis,
    epicrisis: visit.epicrisis,
    treatment: visit.treatment,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/visits', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          visitId: visit.id,
          professionalId,
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al actualizar la visita');
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
          Motivo de la Consulta
        </label>
        <input
          type="text"
          name="reason"
          id="reason"
          required
          value={formData.reason}
          onChange={handleInputChange}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700">
          Diagnóstico
        </label>
        <input
          type="text"
          name="diagnosis"
          id="diagnosis"
          required
          value={formData.diagnosis}
          onChange={handleInputChange}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="epicrisis" className="block text-sm font-medium text-gray-700">
          Epicrisis
        </label>
        <textarea
          name="epicrisis"
          id="epicrisis"
          required
          rows={4}
          value={formData.epicrisis}
          onChange={handleInputChange}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Descripción detallada de la consulta..."
        />
      </div>

      <div>
        <label htmlFor="treatment" className="block text-sm font-medium text-gray-700">
          Tratamiento
        </label>
        <textarea
          name="treatment"
          id="treatment"
          required
          rows={4}
          value={formData.treatment}
          onChange={handleInputChange}
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Tratamiento prescrito..."
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex space-x-3">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 disabled:bg-indigo-400"
        >
          {loading ? 'Actualizando...' : 'Actualizar Visita'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
