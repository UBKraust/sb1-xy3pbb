import React from 'react';
import { FileText, Download, Share2, Clock } from 'lucide-react';
import type { Patient } from '../../data/patients';

interface PatientDocumentsProps {
  patient: Patient;
}

export default function PatientDocuments({ patient }: PatientDocumentsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-900">Patient Documents</h3>
        <button className="px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-md hover:bg-rose-700">
          Upload Document
        </button>
      </div>

      <div className="space-y-4">
        {patient.documents.map((document) => (
          <div
            key={document.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-rose-100">
                <FileText className="h-6 w-6 text-rose-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">
                  {document.name}
                </h4>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <span className="mr-4">{document.type}</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {document.date}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}