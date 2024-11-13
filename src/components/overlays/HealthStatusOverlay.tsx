import React from 'react';
import { X } from 'lucide-react';
import { HealthStatus } from '../../hooks/useHealthStatus';

interface HealthStatusOverlayProps {
  status: HealthStatus;
  onClose: () => void;
  onUpdate: (status: Partial<HealthStatus>) => void;
}

export default function HealthStatusOverlay({ status, onClose, onUpdate }: HealthStatusOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Actualizare Stare de Sănătate</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nivel Durere (0-10)
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={status.painLevel}
                onChange={(e) => onUpdate({ painLevel: Number(e.target.value) })}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>Fără durere</span>
                <span>Durere severă</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nivel Energie (0-10)
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={status.energyLevel}
                onChange={(e) => onUpdate({ energyLevel: Number(e.target.value) })}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>Energie scăzută</span>
                <span>Energie ridicată</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dispoziție
              </label>
              <select
                value={status.mood}
                onChange={(e) => onUpdate({ mood: e.target.value as HealthStatus['mood'] })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              >
                <option value="Very Poor">Foarte proastă</option>
                <option value="Poor">Proastă</option>
                <option value="Fair">Acceptabilă</option>
                <option value="Good">Bună</option>
                <option value="Excellent">Excelentă</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Efecte Secundare
              </label>
              <div className="space-y-2">
                {['Greață', 'Oboseală', 'Durere', 'Lipsa poftei de mâncare', 'Altele'].map((effect) => (
                  <label key={effect} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={status.sideEffects.includes(effect)}
                      onChange={(e) => {
                        const newSideEffects = e.target.checked
                          ? [...status.sideEffects, effect]
                          : status.sideEffects.filter(se => se !== effect);
                        onUpdate({ sideEffects: newSideEffects });
                      }}
                      className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{effect}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Anulare
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700"
            >
              Salvează
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}