import { useState, useEffect } from 'react';
import { Document } from '../types/patient';

export function useDocuments(patientId?: string) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const uploadDocument = async (document: Omit<Document, 'id' | 'date'>) => {
    try {
      // In production, this would be an API call
      const newDocument = {
        ...document,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0]
      };
      setDocuments(prev => [...prev, newDocument]);
      return newDocument;
    } catch (err) {
      throw new Error('Failed to upload document');
    }
  };

  const deleteDocument = async (documentId: string) => {
    try {
      // In production, this would be an API call
      setDocuments(prev => prev.filter(doc => doc.id !== documentId));
    } catch (err) {
      throw new Error('Failed to delete document');
    }
  };

  useEffect(() => {
    if (!patientId) {
      setLoading(false);
      return;
    }

    // Simulate API call
    const fetchDocuments = async () => {
      try {
        // Mock data - replace with API call
        const mockDocuments: Document[] = [
          {
            id: '1',
            name: 'Blood Test Results - March 2024.pdf',
            type: 'Lab Results',
            date: '2024-03-15',
            size: '2.4 MB',
            author: 'Dr. Sarah Johnson',
            status: 'new'
          }
        ];
        setDocuments(mockDocuments);
      } catch (err) {
        setError('Failed to fetch documents');
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [patientId]);

  return {
    documents,
    loading,
    error,
    uploadDocument,
    deleteDocument
  };
}