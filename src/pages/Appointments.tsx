import React from 'react';
import { Card } from '../components/ui/Card';
import { Calendar, Clock, User } from 'lucide-react';

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      patientName: "Sarah Johnson",
      time: "09:00 AM",
      date: "2024-03-20",
      type: "Follow-up"
    },
    {
      id: 2,
      patientName: "Michael Chen",
      time: "10:30 AM",
      date: "2024-03-20",
      type: "Initial Consultation"
    },
    {
      id: 3,
      patientName: "Emily Davis",
      time: "02:00 PM",
      date: "2024-03-20",
      type: "Treatment Review"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your upcoming appointments and schedule
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Today's Schedule</h3>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="p-3 rounded-full bg-indigo-100">
                      <User className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-medium text-gray-900">
                        {appointment.patientName}
                      </h4>
                      <p className="text-sm text-gray-500">{appointment.type}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {appointment.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Schedule New Appointment
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                View Calendar
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}