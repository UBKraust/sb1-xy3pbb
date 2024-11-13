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

export interface Treatment {
  id: string;
  type: string;
  protocol: string;
  startDate: string;
  endDate?: string;
  totalSessions: number;
  completedSessions: number;
  status: 'in progress' | 'scheduled' | 'completed';
  nextSession?: string;
  lastSession?: string;
  sideEffects?: string[];
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  type: string;
  provider: string;
  location: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  requiredDocuments?: Array<{
    name: string;
    type: 'test' | 'document';
    status: 'completed' | 'pending' | 'missing';
    dueDate?: string;
  }>;
  notes?: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  date: string;
  size: string;
  author: string;
  status: 'new' | 'reviewed' | 'archived';
  category: string;
  url: string;
}

export interface ProgressNote {
  id: string;
  date: string;
  author: string;
  type: string;
  content: string;
  tags: string[];
}