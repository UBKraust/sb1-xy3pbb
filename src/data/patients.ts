import { format, subDays } from 'date-fns';

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  diagnosis: string;
  stage: string;
  assignedDoctor: string;
  status: 'Active' | 'Inactive' | 'New';
  nextAppointment?: string;
  lastContact: string;
  nextAction: string;
  priority: 'high' | 'medium' | 'low';
  treatmentPlan: {
    currentPhase: string;
    startDate: string;
    endDate?: string;
    protocol: string;
    progress: number;
    nextSession?: string;
  };
  vitalSigns: {
    bloodPressure: string;
    heartRate: number;
    temperature: number;
    weight: number;
    height: number;
    lastUpdated: string;
  };
  healthMetrics: {
    painLevel: number;
    energyLevel: number;
    mood: 'Very Poor' | 'Poor' | 'Fair' | 'Good' | 'Excellent';
    sideEffects: string[];
    lastUpdated: string;
  };
  timeline: Array<{
    date: string;
    type: string;
    description: string;
    details?: string;
  }>;
  documents: Array<{
    id: string;
    name: string;
    type: string;
    date: string;
    category: string;
    status: 'new' | 'reviewed';
    url: string;
  }>;
  notes: Array<{
    id: string;
    date: string;
    author: string;
    content: string;
    type: 'Clinical' | 'Administrative' | 'Follow-up';
  }>;
}

export const mockPatients: Record<string, Patient> = {
  '1': {
    id: '1',
    name: 'Maria Popescu',
    dateOfBirth: '1975-05-15',
    gender: 'Female',
    phone: '+40 721 234 567',
    email: 'maria.p@example.com',
    address: 'Strada Primăverii 23, București',
    diagnosis: 'Cancer mamar',
    stage: 'Stadiul II',
    assignedDoctor: 'Dr. Elena Ionescu',
    status: 'Active',
    nextAppointment: '2024-03-25',
    lastContact: '2024-03-18',
    nextAction: 'Ședință chimioterapie',
    priority: 'medium',
    treatmentPlan: {
      currentPhase: 'Chimioterapie',
      startDate: '2024-01-15',
      protocol: 'AC-T Protocol',
      progress: 60,
      nextSession: '2024-03-25'
    },
    vitalSigns: {
      bloodPressure: '120/80',
      heartRate: 72,
      temperature: 36.6,
      weight: 65,
      height: 165,
      lastUpdated: format(subDays(new Date(), 1), 'yyyy-MM-dd')
    },
    healthMetrics: {
      painLevel: 2,
      energyLevel: 7,
      mood: 'Good',
      sideEffects: ['Greață ușoară', 'Oboseală'],
      lastUpdated: format(new Date(), 'yyyy-MM-dd')
    },
    timeline: [
      {
        date: '2024-03-18',
        type: 'Consultație',
        description: 'Evaluare progres tratament',
        details: 'Pacientă răspunde bine la tratament. Se continuă protocolul actual.'
      },
      {
        date: '2024-03-10',
        type: 'Tratament',
        description: 'Ședință chimioterapie',
        details: 'A treia ședință completată cu succes.'
      },
      {
        date: '2024-02-25',
        type: 'Analize',
        description: 'Hemoleucogramă completă',
        details: 'Rezultate în parametri normali.'
      }
    ],
    documents: [
      {
        id: 'd1',
        name: 'Rezultate analize sânge - Martie 2024',
        type: 'Analize',
        date: '2024-03-15',
        category: 'Laboratory',
        status: 'reviewed',
        url: '#'
      },
      {
        id: 'd2',
        name: 'Raport Imagistică',
        type: 'Imagistică',
        date: '2024-02-20',
        category: 'Radiology',
        status: 'reviewed',
        url: '#'
      }
    ],
    notes: [
      {
        id: 'n1',
        date: '2024-03-18',
        author: 'Dr. Elena Ionescu',
        content: 'Pacientă răspunde bine la tratament. Efecte secundare minime.',
        type: 'Clinical'
      },
      {
        id: 'n2',
        date: '2024-03-10',
        author: 'Dr. Maria Popa',
        content: 'Ședință chimioterapie completată. Stare generală bună post-procedură.',
        type: 'Clinical'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'Ion Ionescu',
    dateOfBirth: '1968-08-22',
    gender: 'Male',
    phone: '+40 722 345 678',
    email: 'ion.i@example.com',
    address: 'Bulevardul Unirii 45, București',
    diagnosis: 'Cancer pulmonar',
    stage: 'Stadiul III',
    assignedDoctor: 'Dr. Alexandru Popa',
    status: 'Active',
    nextAppointment: '2024-03-22',
    lastContact: '2024-03-15',
    nextAction: 'Evaluare CT',
    priority: 'high',
    treatmentPlan: {
      currentPhase: 'Chimioradioterapie',
      startDate: '2024-02-01',
      protocol: 'Cisplatin + Radioterapie',
      progress: 40,
      nextSession: '2024-03-22'
    },
    vitalSigns: {
      bloodPressure: '130/85',
      heartRate: 75,
      temperature: 36.8,
      weight: 78,
      height: 178,
      lastUpdated: format(subDays(new Date(), 2), 'yyyy-MM-dd')
    },
    healthMetrics: {
      painLevel: 4,
      energyLevel: 5,
      mood: 'Fair',
      sideEffects: ['Tuse', 'Oboseală pronunțată'],
      lastUpdated: format(new Date(), 'yyyy-MM-dd')
    },
    timeline: [
      {
        date: '2024-03-15',
        type: 'Tratament',
        description: 'Ședință radioterapie',
        details: 'A patra ședință completată.'
      },
      {
        date: '2024-03-08',
        type: 'Consultație',
        description: 'Evaluare efecte secundare',
        details: 'Se ajustează medicația pentru controlul tusei.'
      }
    ],
    documents: [
      {
        id: 'd3',
        name: 'CT Torace - Martie 2024',
        type: 'Imagistică',
        date: '2024-03-10',
        category: 'Radiology',
        status: 'new',
        url: '#'
      }
    ],
    notes: [
      {
        id: 'n3',
        date: '2024-03-15',
        author: 'Dr. Alexandru Popa',
        content: 'Pacient necesită monitorizare atentă a funcției respiratorii.',
        type: 'Clinical'
      }
    ]
  },
  '3': {
    id: '3',
    name: 'Elena Dumitrescu',
    dateOfBirth: '1982-11-30',
    gender: 'Female',
    phone: '+40 723 456 789',
    email: 'elena.d@example.com',
    address: 'Strada Victoriei 78, București',
    diagnosis: 'Cancer colorectal',
    stage: 'Stadiul I',
    assignedDoctor: 'Dr. Mihai Stancu',
    status: 'New',
    nextAppointment: '2024-03-21',
    lastContact: '2024-03-19',
    nextAction: 'Consultație inițială',
    priority: 'medium',
    treatmentPlan: {
      currentPhase: 'Pre-tratament',
      startDate: '2024-03-19',
      protocol: 'În evaluare',
      progress: 0,
      nextSession: '2024-03-21'
    },
    vitalSigns: {
      bloodPressure: '118/75',
      heartRate: 68,
      temperature: 36.5,
      weight: 62,
      height: 170,
      lastUpdated: format(new Date(), 'yyyy-MM-dd')
    },
    healthMetrics: {
      painLevel: 1,
      energyLevel: 8,
      mood: 'Good',
      sideEffects: [],
      lastUpdated: format(new Date(), 'yyyy-MM-dd')
    },
    timeline: [
      {
        date: '2024-03-19',
        type: 'Consultație',
        description: 'Evaluare inițială',
        details: 'Se stabilește planul de investigații.'
      }
    ],
    documents: [
      {
        id: 'd4',
        name: 'Colonoscopie - Martie 2024',
        type: 'Procedură',
        date: '2024-03-15',
        category: 'Procedures',
        status: 'new',
        url: '#'
      }
    ],
    notes: [
      {
        id: 'n4',
        date: '2024-03-19',
        author: 'Dr. Mihai Stancu',
        content: 'Pacientă nou diagnosticată. Se programează investigații complete.',
        type: 'Clinical'
      }
    ]
  }
};

export function getPatientById(id: string): Patient | null {
  return mockPatients[id] || null;
}

export function getAllPatients(): Patient[] {
  return Object.values(mockPatients);
}