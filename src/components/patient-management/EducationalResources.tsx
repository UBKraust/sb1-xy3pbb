import React from 'react';
import { Card } from '../ui/Card';
import { BookOpen, Video, FileText, ExternalLink } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'pdf';
  description: string;
  category: string;
  duration?: string;
  url: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Your Treatment Plan',
    type: 'article',
    description: 'A comprehensive guide to breast cancer treatment options and what to expect.',
    category: 'Treatment',
    duration: '10 min read',
    url: '#'
  },
  {
    id: '2',
    title: 'Managing Treatment Side Effects',
    type: 'video',
    description: 'Expert advice on dealing with common chemotherapy side effects.',
    category: 'Side Effects',
    duration: '15 min',
    url: '#'
  },
  {
    id: '3',
    title: 'Nutrition During Cancer Treatment',
    type: 'pdf',
    description: 'Dietary guidelines and meal planning tips for cancer patients.',
    category: 'Nutrition',
    url: '#'
  }
];

export default function EducationalResources() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <BookOpen className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'pdf':
        return <FileText className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Educational Resources</h2>
        <select className="border border-gray-300 rounded-md text-sm p-2">
          <option value="all">All Categories</option>
          <option value="treatment">Treatment</option>
          <option value="side-effects">Side Effects</option>
          <option value="nutrition">Nutrition</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                    {getIcon(resource.type)}
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {resource.category}
                  </span>
                </div>
                {resource.duration && (
                  <span className="text-sm text-gray-500">{resource.duration}</span>
                )}
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {resource.description}
              </p>

              <a
                href={resource.url}
                className="inline-flex items-center text-rose-600 hover:text-rose-700"
              >
                View Resource
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </Card>
        ))}
      </div>

      {/* Recommended Resources Section */}
      <Card>
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recommended for You
          </h3>
          <div className="space-y-4">
            {resources.slice(0, 2).map((resource) => (
              <div
                key={resource.id}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                  {getIcon(resource.type)}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {resource.description}
                  </p>
                  <a
                    href={resource.url}
                    className="inline-flex items-center text-sm text-rose-600 hover:text-rose-700 mt-2"
                  >
                    Learn more
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}