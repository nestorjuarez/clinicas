'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AddVisitFormProps {
  clinicalHistoryId: number;
  professionalId: number;
  onSuccess: () => void;
}

export default function AddVisitForm({ clinicalHistoryId, professionalId, onSuccess }: AddVisitFormProps) {
  const [formData, setFormData] = useState({
    reason: '',
    epicrisis: '',
    diagnosis: '',
    treatment: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          clinicalHistoryId,
          professionalId,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar la visita');
      }

      router.refresh();
      onSuccess();
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error al registrar la visita.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Motivo de la Visita</label>
        <input type="text" name="reason" id="reason" required value={formData.reason} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
      </div>
      <div>
        <label htmlFor="epicrisis" className="block text-sm font-medium text-gray-700">Epicrisis</label>
        <textarea name="epicrisis" id="epicrisis" required value={formData.epicrisis} onChange={handleInputChange} rows={4} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"></textarea>
      </div>
      <div>
        <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700">Diagnóstico</label>
        <input type="text" name="diagnosis" id="diagnosis" required value={formData.diagnosis} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
      </div>
      <div>
        <label htmlFor="treatment" className="block text-sm font-medium text-gray-700">Tratamiento</label>
        <input type="text" name="treatment" id="treatment" required value={formData.treatment} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
      </div>
      
      {error && <p className="text-sm text-red-600">{error}</p>}
      
      <button type="submit" disabled={loading} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 disabled:bg-indigo-400">
        {loading ? 'Registrando...' : 'Registrar Visita'}
      </button>
    </form>
  );
}
