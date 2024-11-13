import { useState, useEffect } from 'react';
import { useHealthMonitoring } from './useHealthMonitoring';
import { useTreatmentTracking } from './useTreatmentTracking';
import { format, subDays } from 'date-fns';

export function useAnalytics(patientId: string) {
  const { metrics } = useHealthMonitoring(patientId);
  const { treatments } = useTreatmentTracking(patientId);
  const [loading, setLoading] = useState(true);

  const getHealthTrends = (days = 30) => {
    const startDate = subDays(new Date(), days);
    return metrics
      .filter(m => new Date(m.timestamp) >= startDate)
      .reduce((acc, metric) => {
        const date = format(new Date(metric.timestamp), 'yyyy-MM-dd');
        if (!acc[date]) {
          acc[date] = {};
        }
        acc[date][metric.type] = metric.value;
        return acc;
      }, {} as Record<string, Record<string, number | string>>);
  };

  const getTreatmentEffectiveness = () => {
    return treatments.map(treatment => ({
      id: treatment.id,
      type: treatment.type,
      progress: (treatment.completedSessions / treatment.totalSessions) * 100,
      sideEffects: treatment.sideEffects?.length || 0
    }));
  };

  useEffect(() => {
    // Initialize analytics data
    setLoading(false);
  }, [patientId]);

  return {
    loading,
    getHealthTrends,
    getTreatmentEffectiveness
  };
}