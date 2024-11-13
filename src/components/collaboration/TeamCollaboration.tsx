import React, { useState } from 'react';
import { UserPlus, MessageSquare, Lock, Shield, Users, ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  accessLevel: 'full' | 'limited' | 'view-only';
  accessUntil?: string;
}

interface Comment {
  id: string;
  author: TeamMember;
  content: string;
  timestamp: string;
  isPrivate: boolean;
  attachments?: string[];
}

export default function TeamCollaboration() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'Dr. Maria Ionescu',
      role: 'Primary Oncologist',
      specialty: 'Medical Oncology',
      accessLevel: 'full'
    },
    {
      id: '2',
      name: 'Dr. Alexandru Popa',
      role: 'Radiologist',
      specialty: 'Radiation Oncology',
      accessLevel: 'limited',
      accessUntil: '2024-04-15'
    }
  ]);

  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: teamMembers[0],
      content: 'Patient showing good response to current treatment protocol.',
      timestamp: '2024-03-19 14:30',
      isPrivate: false
    }
  ]);

  const [showInviteForm, setShowInviteForm] = useState(false);

  return (
    <div className="space-y-6">
      {/* Team Members Section */}
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-rose-600 mr-2" />
              <h2 className="text-lg font-semibold">Care Team</h2>
            </div>
            <button
              onClick={() => setShowInviteForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Add Specialist
            </button>
          </div>

          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                    <span className="text-rose-600 font-medium">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.specialty}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Lock className="h-4 w-4 text-gray-400 mr-1" />
                    <span className={`text-sm ${
                      member.accessLevel === 'full' 
                        ? 'text-green-600' 
                        : member.accessLevel === 'limited'
                        ? 'text-yellow-600'
                        : 'text-gray-600'
                    }`}>
                      {member.accessLevel} access
                    </span>
                  </div>
                  {member.accessUntil && (
                    <span className="text-sm text-gray-500">
                      Until {member.accessUntil}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Comments Section */}
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 text-rose-600 mr-2" />
              <h2 className="text-lg font-semibold">Team Discussion</h2>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-sm text-gray-500 hover:text-gray-700">
                Filter
              </button>
              <button className="text-sm text-rose-600 hover:text-rose-700">
                New Comment
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="relative">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                      <span className="text-rose-600 font-medium">
                        {comment.author.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-900">
                          {comment.author.name}
                        </span>
                        <span className="text-sm text-gray-500 ml-2">
                          {comment.timestamp}
                        </span>
                      </div>
                      {comment.isPrivate && (
                        <div className="flex items-center text-gray-500">
                          <Shield className="h-4 w-4 mr-1" />
                          <span className="text-sm">Private</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      {comment.content}
                    </div>
                    {comment.attachments && comment.attachments.length > 0 && (
                      <div className="mt-2 flex items-center space-x-2">
                        {comment.attachments.map((attachment, index) => (
                          <a
                            key={index}
                            href={attachment}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Attachment {index + 1}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* New Comment Form */}
          <div className="mt-6">
            <textarea
              placeholder="Add a comment..."
              className="w-full rounded-lg border-gray-300 focus:border-rose-500 focus:ring-rose-500"
              rows={3}
            />
            <div className="mt-2 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-gray-700">
                  <ExternalLink className="h-5 w-5" />
                </button>
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300 text-rose-600 focus:ring-rose-500" />
                  <span>Mark as private</span>
                </label>
              </div>
              <button className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* External Systems Integration */}
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">External Systems</h2>
            <button className="text-sm text-rose-600 hover:text-rose-700">
              Manage Connections
            </button>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Laboratory System', status: 'Connected', lastSync: '5 minutes ago' },
              { name: 'Imaging System', status: 'Connected', lastSync: '1 hour ago' },
              { name: 'EMR System', status: 'Pending', lastSync: 'Never' }
            ].map((system, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{system.name}</h3>
                  <p className="text-sm text-gray-500">Last sync: {system.lastSync}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  system.status === 'Connected'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {system.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}