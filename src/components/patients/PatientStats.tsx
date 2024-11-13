import React from 'react';
import { Users, UserPlus, Calendar, Clock } from 'lucide-react';
import { Patient } from '../../data/database';

interface PatientStatsProps {
  patients: Patient[];
}

export default function PatientStats({ patients }: PatientStatsProps) {
  const activePatients = patients.filter(p => p.status === 'Active').length;
  const newPatients = patients.filter(p => p.status === 'New').length;
  const upcomingAppointments = patients.filter(p => p.nextAppointment).length;

  const stats = [
    {
      name: 'Total Patients',
      value: patients.length,
      change: `+${newPatients} new`,
      icon: Users,
      changeType: 'increase'
    },
    {
      name: 'Active Patients',
      value: activePatients,
      change: `${((activePatients / patients.length) * 100).toFixed(0)}%`,
      icon: UserPlus,
      changeType: 'increase'
    },
    {
      name: 'Upcoming Appointments',
      value: upcomingAppointments,
      change: 'Next 7 days',
      icon: Calendar,
      changeType: 'neutral'
    },
    {
      name: 'Avg. Treatment Duration',
      value: '4.2 mo',
      change: '-2 weeks',
      icon: Clock,
      changeType: 'decrease'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between">
            <stat.icon className="h-6 w-6 text-rose-600" />
            <span className={`text-sm font-medium ${
              stat.changeType === 'increase'
                ? 'text-green-600'
                : stat.changeType === 'decrease'
                ? 'text-red-600'
                : 'text-gray-500'
            }`}>
              {stat.change}
            </span>
          </div>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-gray-500">{stat.name}</p>
        </div>
      ))}
    </div>
  );
}