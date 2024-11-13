import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/Card';
import { Activity, TrendingUp, AlertCircle } from 'lucide-react';

interface AnalyticsData {
  date: string;
  painLevel: number;
  energyLevel: number;
  bloodPressure: number;
  weight: number;
}

const mockData: AnalyticsData[] = [
  { date: '2024-01', painLevel: 7, energyLevel: 4, bloodPressure: 120, weight: 65 },
  { date: '2024-02', painLevel: 5, energyLevel: 6, bloodPressure: 118, weight: 64 },
  { date: '2024-03', painLevel: 3, energyLevel: 8, bloodPressure: 115, weight: 63.5 },
];

export default function PatientAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Patient Analytics</h2>
        <select className="border border-gray-300 rounded-md text-sm p-2">
          <option value="3m">Last 3 months</option>
          <option value="6m">Last 6 months</option>
          <option value="1y">Last year</option>
        </select>
      </div>

      {/* Main Chart */}
      <Card>
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Health Indicators Over Time</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="painLevel" 
                  stroke="#ef4444" 
                  name="Pain Level"
                />
                <Line 
                  type="monotone" 
                  dataKey="energyLevel" 
                  stroke="#3b82f6" 
                  name="Energy Level"
                />
                <Line 
                  type="monotone" 
                  dataKey="bloodPressure" 
                  stroke="#10b981" 
                  name="Blood Pressure"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-rose-600 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Treatment Response</h3>
              </div>
              <span className="text-green-600 text-sm font-medium">Improving</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900">+28%</p>
            <p className="text-sm text-gray-500 mt-1">vs. previous month</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-rose-600 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Recovery Progress</h3>
              </div>
              <span className="text-green-600 text-sm font-medium">On Track</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900">65%</p>
            <p className="text-sm text-gray-500 mt-1">of treatment goals met</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-rose-600 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Side Effects</h3>
              </div>
              <span className="text-yellow-600 text-sm font-medium">Moderate</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900">3</p>
            <p className="text-sm text-gray-500 mt-1">reported this week</p>
          </div>
        </Card>
      </div>

      {/* Treatment Timeline */}
      <Card>
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Treatment Timeline</h3>
          <div className="relative">
            <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-6">
              {[
                {
                  date: 'March 15, 2024',
                  title: 'Chemotherapy Session Completed',
                  description: 'Third session completed successfully. Patient showing good response.',
                  status: 'completed'
                },
                {
                  date: 'March 1, 2024',
                  title: 'Blood Work Results',
                  description: 'All values within normal range.',
                  status: 'completed'
                },
                {
                  date: 'February 15, 2024',
                  title: 'Treatment Plan Updated',
                  description: 'Adjusted medication dosage based on response.',
                  status: 'completed'
                }
              ].map((event, index) => (
                <div key={index} className="relative flex items-start ml-6">
                  <div className="absolute -left-10 mt-1">
                    <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                      <Activity className="h-4 w-4 text-rose-600" />
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{event.title}</p>
                        <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                      </div>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}