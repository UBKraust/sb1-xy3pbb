import React from 'react';
import { X, BookOpen, Video, FileText, ExternalLink } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'document';
  description: string;
  url: string;
}

interface ResourcesOverlayProps {
  onClose: () => void;
}

export default function ResourcesOverlay({ onClose }: ResourcesOverlayProps) {
  const resources: Resource[] = [
    {
      id: '1',
      title: 'Înțelegerea Planului de Tratament',
      type: 'article',
      description: 'Un ghid complet despre opțiunile de tratament pentru cancerul mamar.',
      url: '#'
    },
    {
      id: '2',
      title: 'Gestionarea Efectelor Secundare',
      type: 'video',
      description: 'Sfaturi de la experți pentru gestionarea efectelor secundare ale chimioterapiei.',
      url: '#'
    },
    {
      id: '3',
      title: 'Nutriție în Timpul Tratamentului',
      type: 'document',
      description: 'Ghid nutrițional și sfaturi pentru planificarea meselor în timpul tratamentului.',
      url: '#'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <BookOpen className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'document':
        return <FileText className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Resurse Educaționale</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="p-2 bg-rose-100 rounded-lg">
                    {getIcon(resource.type)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {resource.description}
                    </p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-rose-600 hover:text-rose-700 mt-2"
                    >
                      Vezi Resursa
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Închide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}