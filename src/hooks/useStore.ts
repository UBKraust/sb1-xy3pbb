import create from 'zustand';
import { Patient, Treatment, Appointment, Document, ProgressNote } from '../types/patient';

interface Store {
  // Patient State
  currentPatient: Patient | null;
  setCurrentPatient: (patient: Patient | null) => void;

  // Health Status
  healthStatus: {
    painLevel: number;
    energyLevel: number;
    mood: string;
    sideEffects: string[];
    lastUpdated: string;
  };
  updateHealthStatus: (status: Partial<Store['healthStatus']>) => void;

  // Treatment Progress
  treatments: Treatment[];
  addTreatment: (treatment: Treatment) => void;
  updateTreatment: (id: string, updates: Partial<Treatment>) => void;

  // Appointments
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  updateAppointment: (id: string, updates: Partial<Appointment>) => void;
  cancelAppointment: (id: string) => void;

  // Documents
  documents: Document[];
  addDocument: (document: Document) => void;
  updateDocument: (id: string, updates: Partial<Document>) => void;
  deleteDocument: (id: string) => void;

  // Progress Notes
  notes: ProgressNote[];
  addNote: (note: ProgressNote) => void;
  updateNote: (id: string, updates: Partial<ProgressNote>) => void;
}

export const useStore = create<Store>((set) => ({
  // Patient State
  currentPatient: null,
  setCurrentPatient: (patient) => set({ currentPatient: patient }),

  // Health Status
  healthStatus: {
    painLevel: 2,
    energyLevel: 7,
    mood: 'Good',
    sideEffects: ['Mild nausea'],
    lastUpdated: new Date().toISOString()
  },
  updateHealthStatus: (updates) => 
    set((state) => ({
      healthStatus: {
        ...state.healthStatus,
        ...updates,
        lastUpdated: new Date().toISOString()
      }
    })),

  // Treatment Progress
  treatments: [{
    id: '1',
    type: 'Chemotherapy',
    protocol: 'AC-T',
    startDate: '2024-01-15',
    totalSessions: 6,
    completedSessions: 3,
    status: 'in progress',
    nextSession: '2024-03-25'
  }],
  addTreatment: (treatment) =>
    set((state) => ({ treatments: [...state.treatments, treatment] })),
  updateTreatment: (id, updates) =>
    set((state) => ({
      treatments: state.treatments.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      )
    })),

  // Appointments
  appointments: [{
    id: '1',
    date: '2024-03-25',
    time: '10:00',
    type: 'Chemotherapy Session',
    provider: 'Dr. Maria Ionescu',
    location: 'Oncology Center',
    status: 'scheduled'
  }],
  addAppointment: (appointment) =>
    set((state) => ({ appointments: [...state.appointments, appointment] })),
  updateAppointment: (id, updates) =>
    set((state) => ({
      appointments: state.appointments.map((a) =>
        a.id === id ? { ...a, ...updates } : a
      )
    })),
  cancelAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.map((a) =>
        a.id === id ? { ...a, status: 'cancelled' } : a
      )
    })),

  // Documents
  documents: [{
    id: '1',
    name: 'Blood Test Results - March 2024',
    type: 'Lab Results',
    date: '2024-03-15',
    category: 'Laboratory',
    status: 'new',
    url: '#',
    author: 'Dr. Sarah Johnson',
    size: '2.4 MB'
  }],
  addDocument: (document) =>
    set((state) => ({ documents: [...state.documents, document] })),
  updateDocument: (id, updates) =>
    set((state) => ({
      documents: state.documents.map((d) =>
        d.id === id ? { ...d, ...updates } : d
      )
    })),
  deleteDocument: (id) =>
    set((state) => ({
      documents: state.documents.filter((d) => d.id !== id)
    })),

  // Progress Notes
  notes: [],
  addNote: (note) =>
    set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (id, updates) =>
    set((state) => ({
      notes: state.notes.map((n) =>
        n.id === id ? { ...n, ...updates } : n
      )
    }))
}));