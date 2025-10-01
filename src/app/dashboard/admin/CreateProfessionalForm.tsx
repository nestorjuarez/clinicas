'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Specialty } from '@/types/professional';

interface CreateProfessionalFormProps {
  specialties: Specialty[];
  onSuccess: () => void;
}

export default function CreateProfessionalForm({ specialties, onSuccess }: CreateProfessionalFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    officeAddress: '',
    city: '',
    specialtyIds: [] as number[],
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const specialtyId = parseInt(e.target.value, 10);
    setFormData((prev) => {
      const newSpecialtyIds = prev.specialtyIds.includes(specialtyId)
        ? prev.specialtyIds.filter((id) => id !== specialtyId)
        : [...prev.specialtyIds, specialtyId];
      return { ...prev, specialtyIds: newSpecialtyIds };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/admin/professionals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          specialties: formData.specialtyIds,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar el profesional');
      }

      setSuccess('¡Profesional registrado exitosamente!');
      
      router.refresh(); // Actualiza los datos del servidor
      onSuccess();      // Cierra el modal

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Campos del formulario (Nombre, Email, Contraseña, Dirección, Ciudad) */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
             <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input type="password" name="password" id="password" required value={formData.password} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
                <label htmlFor="officeAddress" className="block text-sm font-medium text-gray-700">Dirección del Consultorio</label>
                <input type="text" name="officeAddress" id="officeAddress" value={formData.officeAddress} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
                <input type="text" name="city" id="city" value={formData.city} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
        </div>

        <div>
            <h4 className="text-sm font-medium text-gray-700">Especialidades</h4>
            <div className="grid grid-cols-2 mt-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                {specialties.map((specialty) => (
                <div key={specialty.id} className="flex items-center">
                    <input
                    id={`specialty-${specialty.id}`}
                    name="specialties"
                    type="checkbox"
                    value={specialty.id}
                    checked={formData.specialtyIds.includes(specialty.id)}
                    onChange={handleSpecialtyChange}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor={`specialty-${specialty.id}`} className="ml-2 block text-sm text-gray-900">{specialty.name}</label>
                </div>
                ))}
            </div>
        </div>
      
        {error && <p className="text-sm text-red-600">{error}</p>}
        {success && <p className="text-sm text-green-600">{success}</p>}

        <button type="submit" disabled={loading} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400">
            {loading ? 'Registrando...' : 'Registrar Profesional'}
        </button>
    </form>
  );
}
