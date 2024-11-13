import React from 'react';
import { Phone, Mail, Calendar, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { IconButton } from '../ui/IconButton';
import { Chip } from '../ui/Chip';
import type { Patient } from '../../types/patient';

interface PatientHeaderProps {
  patient: Patient;
}

export default function PatientHeader({ patient }: PatientHeaderProps) {
  return (
    <div className="bg-surface rounded-xl shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="h-16 w-16 rounded-full bg-primary-container flex items-center justify-center">
            <User className="h-8 w-8 text-on-primary-container" />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-on-surface">{patient.name}</h1>
            <div className="flex items-center text-sm text-on-surface-variant mt-1">
              <span>{patient.diagnosis}</span>
              <span className="mx-2">•</span>
              <span>{patient.stage}</span>
              <span className="mx-2">•</span>
              <span>Age: {patient.age}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <IconButton
            variant="outlined"
            icon={<Phone className="h-5 w-5" />}
            aria-label="Call patient"
          />
          <IconButton
            variant="outlined"
            icon={<Mail className="h-5 w-5" />}
            aria-label="Email patient"
          />
          <Button variant="filled">
            Schedule Appointment
          </Button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center text-sm">
          <Phone className="h-4 w-4 text-on-surface-variant mr-2" />
          <span>{patient.phone}</span>
        </div>
        <div className="flex items-center text-sm">
          <Mail className="h-4 w-4 text-on-surface-variant mr-2" />
          <span>{patient.email}</span>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-on-surface-variant mr-2" />
            <span className="text-sm">Next Appointment: {patient.nextAppointment}</span>
            <Chip
              label={patient.status}
              variant="assist"
              className="ml-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}