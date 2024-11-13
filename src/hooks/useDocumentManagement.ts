import { useState, useEffect } from 'react';
import { useStore } from './useStore';
import type { Document } from '../types/patient';

export function useDocumentManagement(patientId: string) {
  const [loading, setLoading] = useState(true);
  const documents = useStore((state) => state.documents);
  const addDocument = useStore((state) => state.addDocument);
  const updateDocument = useStore((state) => state.updateDocument);
  const deleteDocument = useStore((state) => state.deleteDocument);

  const getDocumentsByCategory = (category: string) => {
    return documents.filter(doc => doc.category === category);
  };

  const getRecentDocuments = (limit = 5) => {
    return [...documents]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  };

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        // Mock data - replace with actual API call
        const mockDocuments: Document[] = [
          {
            id: '1',
            name: 'Blood Test Results',
            type: 'Lab Results',
            date: '2024-03-15',
            category: 'Laboratory',
            status: 'new',
            url: '#'
          }
        ];
        mockDocuments.forEach(addDocument);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [patientId]);

  return {
    documents,
    loading,
    addDocument,
    updateDocument,
    deleteDocument,
    getDocumentsByCategory,
    getRecentDocuments
  };
}