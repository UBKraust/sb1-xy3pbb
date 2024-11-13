import { useState } from 'react';

export interface Document {
  id: string;
  name: string;
  type: 'lab_result' | 'imaging' | 'report' | 'prescription';
  date: string;
  provider: string;
  category: string;
  status: 'new' | 'reviewed';
  url: string;
  notes?: string;
}

export function usePatientDocuments(patientId: string) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  const addDocument = (document: Omit<Document, 'id'>) => {
    const newDocument = {
      ...document,
      id: Date.now().toString()
    };
    setDocuments(prev => [...prev, newDocument]);
  };

  const updateDocument = (id: string, updates: Partial<Document>) => {
    setDocuments(prev =>
      prev.map(doc => doc.id === id ? { ...doc, ...updates } : doc)
    );
  };

  const deleteDocument = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  return {
    documents,
    loading,
    addDocument,
    updateDocument,
    deleteDocument
  };
}