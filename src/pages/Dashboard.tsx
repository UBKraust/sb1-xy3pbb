import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import PatientStats from '../components/patients/PatientStats';
import PatientList from '../components/patients/PatientList';
import PatientFilters from '../components/patients/PatientFilters';
import { mockPatients } from '../data/database';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    diagnosis: 'all',
    stage: 'all'
  });

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <PatientStats patients={Object.values(mockPatients)} />

      {/* Filters */}
      <PatientFilters
        selectedFilters={filters}
        onFilterChange={setFilters}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Patient List */}
      <PatientList
        patients={Object.values(mockPatients)}
        searchQuery={searchQuery}
        filters={filters}
      />
    </div>
  );
}