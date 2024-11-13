import React from 'react';
import { Card } from '../components/ui/Card';
import { FileText, Download, Share2, Clock } from 'lucide-react';

export default function Documents() {
  const documents = [
    {
      id: 1,
      name: "Patient Treatment Plan.pdf",
      type: "PDF",
      size: "2.4 MB",
      lastModified: "2024-03-19"
    },
    {
      id: 2,
      name: "Lab Results - March 2024.docx",
      type: "DOCX",
      size: "1.8 MB",
      lastModified: "2024-03-18"
    },
    {
      id: 3,
      name: "Medical History Report.pdf",
      type: "PDF",
      size: "3.2 MB",
      lastModified: "2024-03-17"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and access all your medical documents
        </p>
      </div>

      <Card>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-900">Recent Documents</h3>
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Upload New
            </button>
          </div>

          <div className="space-y-4">
            {documents.map((document) => (
              <div
                key={document.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-indigo-100">
                    <FileText className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900">
                      {document.name}
                    </h4>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span className="mr-4">{document.type}</span>
                      <span className="mr-4">{document.size}</span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {document.lastModified}
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
      </Card>
    </div>
  );
}