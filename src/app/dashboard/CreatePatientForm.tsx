'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CreatePatientFormProps {
  professionalId: number;
  onSuccess: () => void;
}

export default function CreatePatientForm({ professionalId, onSuccess }: CreatePatientFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    dni: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, professionalId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar el paciente');
      }

      router.refresh();
      onSuccess();

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
          <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="dni" className="block text-sm font-medium text-gray-700">DNI</label>
          <input type="text" name="dni" id="dni" required value={formData.dni} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
          <input type="date" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" lang="es" />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
          <input type="text" name="address" id="address" value={formData.address} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        </div>
      </div>
      
      {error && <p className="text-sm text-red-600">{error}</p>}
      
      <button type="submit" disabled={loading} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 disabled:bg-indigo-400">
        {loading ? 'Registrando...' : 'Registrar Paciente'}
      </button>
    </form>
  );
}
