import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Patient } from '../../data/patients';

interface PatientNotesProps {
  patient: Patient;
}

export default function PatientNotes({ patient }: PatientNotesProps) {
  const [showAddNote, setShowAddNote] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Progress Notes</h3>
          <button
            onClick={() => setShowAddNote(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Note
          </button>
        </div>

        <div className="space-y-6">
          {patient.notes.map((note) => (
            <div
              key={note.id}
              className="border-l-4 border-rose-500 pl-4 py-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">
                    {note.date} - {note.author}
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-1">
                    {note.type}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-gray-700 whitespace-pre-wrap">
                {note.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showAddNote && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Note</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Note Type
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500">
                  <option>Clinical</option>
                  <option>Administrative</option>
                  <option>Follow-up</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Content
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddNote(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-md hover:bg-rose-700"
                >
                  Save Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}