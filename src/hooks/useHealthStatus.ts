import { useState, useEffect } from 'react';

export interface HealthStatus {
  painLevel: number;
  energyLevel: number;
  mood: 'Very Poor' | 'Poor' | 'Fair' | 'Good' | 'Excellent';
  sideEffects: string[];
  vitalSigns: {
    bloodPressure: string;
    heartRate: number;
    temperature: number;
    weight: number;
  };
  lastUpdated: string;
}

export function useHealthStatus(patientId: string) {
  const [status, setStatus] = useState<HealthStatus>({
    painLevel: 2,
    energyLevel: 7,
    mood: 'Good',
    sideEffects: ['Mild nausea'],
    vitalSigns: {
      bloodPressure: '120/80',
      heartRate: 72,
      temperature: 36.6,
      weight: 68
    },
    lastUpdated: new Date().toISOString()
  });

  const updateHealthStatus = (newStatus: Partial<HealthStatus>) => {
    setStatus(prev => ({
      ...prev,
      ...newStatus,
      lastUpdated: new Date().toISOString()
    }));
  };

  return {
    status,
    updateHealthStatus
  };
}