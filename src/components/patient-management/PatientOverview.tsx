import React from 'react';
import { Card } from '../ui/Card';
import { User, Calendar, Activity, FileText } from 'lucide-react';

export default function PatientOverview() {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Patient Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Personal Information</h3>
            <div className="mt-2 space-y-4">
              <div className="flex items-start">
                <User className="h-5 w-5 text-gray-400 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">45 years old</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Next Appointment</p>
                  <p className="text-sm text-gray-500">March 25, 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Medical Information</h3>
            <div className="mt-2 space-y-4">
              <div className="flex items-start">
                <Activity className="h-5 w-5 text-gray-400 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Current Treatment</p>
                  <p className="text-sm text-gray-500">Chemotherapy - Cycle 2</p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-gray-400 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Latest Update</p>
                  <p className="text-sm text-gray-500">Blood work completed on March 20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}