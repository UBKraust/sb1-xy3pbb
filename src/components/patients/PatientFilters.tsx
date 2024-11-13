import React from 'react';
import { Search, Filter } from 'lucide-react';

interface PatientFiltersProps {
  selectedFilters: {
    status: string;
    diagnosis: string;
    stage: string;
  };
  onFilterChange: (filters: any) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function PatientFilters({
  selectedFilters,
  onFilterChange,
  searchQuery,
  onSearchChange
}: PatientFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search patients..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <select
          value={selectedFilters.status}
          onChange={(e) => onFilterChange({ ...selectedFilters, status: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2 focus:ring-rose-500 focus:border-rose-500"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="new">New</option>
        </select>
        <select
          value={selectedFilters.diagnosis}
          onChange={(e) => onFilterChange({ ...selectedFilters, diagnosis: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2 focus:ring-rose-500 focus:border-rose-500"
        >
          <option value="all">All Diagnoses</option>
          <option value="Breast Cancer">Breast Cancer</option>
          <option value="Lung Cancer">Lung Cancer</option>
          <option value="Colorectal Cancer">Colorectal Cancer</option>
        </select>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Filter className="h-4 w-4 mr-2" />
          More Filters
        </button>
      </div>
    </div>
  );
}