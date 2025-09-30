'use client';

import { useState } from 'react';

type Specialty = {
  id: number;
  name: string;
};

type Professional = {
  id: number;
  name: string;
  email: string;
  officeAddress: string | null;
  city: string | null;
  specialties: Specialty[];
};

interface EditProfessionalFormProps {
  professional: Professional;
  specialties: Specialty[];
  onSuccess: () => void;
  onCancel: () => void;
}

export default function EditProfessionalForm({ professional, specialties, onSuccess, onCancel }: EditProfessionalFormProps) {
  const [formData, setFormData] = useState({
    name: professional.name,
    email: professional.email,
    password: '',
    officeAddress: professional.officeAddress || '',
    city: professional.city || '',
    specialtyIds: professional.specialties.map(s => s.id),
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

    try {
      const response = await fetch('/api/admin/professionals', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: professional.id,
          ...formData,
          specialties: formData.specialtyIds,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al actualizar el profesional');
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre Completo
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Nueva Contraseña (dejar vacío para mantener la actual)
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Dejar vacío para mantener la contraseña actual"
          />
        </div>
        <div>
          <label htmlFor="officeAddress" className="block text-sm font-medium text-gray-700">
            Dirección del Consultorio
          </label>
          <input
            type="text"
            name="officeAddress"
            id="officeAddress"
            value={formData.officeAddress}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Ciudad
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
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
              <label htmlFor={`specialty-${specialty.id}`} className="ml-2 block text-sm text-gray-900">
                {specialty.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex space-x-3">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 disabled:bg-indigo-400"
        >
          {loading ? 'Actualizando...' : 'Actualizar Profesional'}
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
