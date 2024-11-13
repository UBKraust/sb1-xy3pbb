export interface Patient {
  id: string;
  name: string;
  diagnosis: string;
  stage: string;
  status: 'Active' | 'Inactive' | 'New';
  nextAppointment?: string;
  lastContact: string;
  nextAction: string;
  priority: 'high' | 'medium' | 'low';
}

export const mockPatients: Record<string, Patient> = {
  '1': {
    id: '1',
    name: 'Maria Popescu',
    diagnosis: 'Cancer mamar',
    stage: 'Stadiul II',
    status: 'Active',
    nextAppointment: '2024-03-25',
    lastContact: '2024-03-18',
    nextAction: 'Ședință chimioterapie',
    priority: 'medium'
  },
  '2': {
    id: '2',
    name: 'Ion Ionescu',
    diagnosis: 'Cancer pulmonar',
    stage: 'Stadiul III',
    status: 'Active',
    nextAppointment: '2024-03-22',
    lastContact: '2024-03-15',
    nextAction: 'Evaluare CT',
    priority: 'high'
  },
  '3': {
    id: '3',
    name: 'Elena Dumitrescu',
    diagnosis: 'Cancer colorectal',
    stage: 'Stadiul I',
    status: 'New',
    nextAppointment: '2024-03-21',
    lastContact: '2024-03-19',
    nextAction: 'Consultație inițială',
    priority: 'medium'
  }
};

export function getPatientById(id: string): Patient | null {
  return mockPatients[id] || null;
}

export function getAllPatients(): Patient[] {
  return Object.values(mockPatients);
}