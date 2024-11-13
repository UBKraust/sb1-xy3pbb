import React from 'react';
import { Search, Filter, Calendar } from 'lucide-react';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: any) => void;
  onDateRangeChange: (range: { start: string; end: string }) => void;
}

export default function SearchAndFilter({
  onSearch,
  onFilter,
  onDateRangeChange
}: SearchAndFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search medical records..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              onChange={(e) => onFilter({ type: e.target.value })}
            >
              <option value="">All Types</option>
              <option value="symptoms">Symptoms</option>
              <option value="treatments">Treatments</option>
              <option value="medications">Medications</option>
              <option value="lab-results">Lab Results</option>
            </select>
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              onChange={(e) => {
                const today = new Date();
                const start = new Date();
                start.setDate(today.getDate() - parseInt(e.target.value));
                onDateRangeChange({
                  start: start.toISOString().split('T')[0],
                  end: today.toISOString().split('T')[0],
                });
              }}
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 3 months</option>
              <option value="180">Last 6 months</option>
              <option value="365">Last year</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}