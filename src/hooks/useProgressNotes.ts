import { useState, useEffect } from 'react';
import { useStore } from './useStore';
import type { ProgressNote } from '../types/patient';

export function useProgressNotes(patientId: string) {
  const [loading, setLoading] = useState(true);
  const notes = useStore((state) => state.notes);
  const addNote = useStore((state) => state.addNote);
  const updateNote = useStore((state) => state.updateNote);

  const getNotesByType = (type: string) => {
    return notes.filter(note => note.type === type);
  };

  const getRecentNotes = (limit = 5) => {
    return [...notes]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // Mock data - replace with actual API call
        const mockNotes: ProgressNote[] = [
          {
            id: '1',
            date: '2024-03-15',
            author: 'Dr. Maria Ionescu',
            type: 'Clinical',
            content: 'Patient showing good response to treatment.',
            tags: ['Treatment Progress']
          }
        ];
        mockNotes.forEach(addNote);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [patientId]);

  return {
    notes,
    loading,
    addNote,
    updateNote,
    getNotesByType,
    getRecentNotes
  };
}