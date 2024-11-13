import React from 'react';
import { ArrowLeft, Calendar, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PatientHeader() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/patients"
              className="mr-4 p-2 text-gray-400 hover:text-gray-500"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Patient Management</h1>
              <p className="mt-1 text-sm text-gray-500">
                View and manage patient information
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}