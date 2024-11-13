import { useState, useEffect } from 'react';
import { useStore } from './useStore';

export interface HealthMetric {
  id: string;
  type: 'pain' | 'energy' | 'mood' | 'sideEffect';
  value: number | string;
  timestamp: string;
  notes?: string;
}

export function useHealthMonitoring(patientId: string) {
  const [metrics, setMetrics] = useState<HealthMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const updateHealthStatus = useStore((state) => state.updateHealthStatus);

  const addMetric = (metric: Omit<HealthMetric, 'id'>) => {
    const newMetric = {
      ...metric,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    setMetrics(prev => [...prev, newMetric]);

    // Update global health status
    if (metric.type === 'pain') {
      updateHealthStatus({ painLevel: Number(metric.value) });
    } else if (metric.type === 'energy') {
      updateHealthStatus({ energyLevel: Number(metric.value) });
    } else if (metric.type === 'mood') {
      updateHealthStatus({ mood: String(metric.value) });
    }
  };

  const getMetricsByType = (type: HealthMetric['type']) => {
    return metrics.filter(m => m.type === type);
  };

  const getLatestMetric = (type: HealthMetric['type']) => {
    const typeMetrics = getMetricsByType(type);
    return typeMetrics[typeMetrics.length - 1];
  };

  useEffect(() => {
    // Simulate API call to fetch initial metrics
    const fetchMetrics = async () => {
      try {
        // Mock data - replace with actual API call
        const mockMetrics: HealthMetric[] = [
          {
            id: '1',
            type: 'pain',
            value: 2,
            timestamp: new Date().toISOString(),
            notes: 'Mild discomfort'
          }
        ];
        setMetrics(mockMetrics);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [patientId]);

  return {
    metrics,
    loading,
    addMetric,
    getMetricsByType,
    getLatestMetric
  };
}