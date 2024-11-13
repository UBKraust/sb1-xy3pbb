import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SymptomGraphProps {
  data: Array<{
    date: string;
    painLevel: number;
    energyLevel: number;
    mood: number;
  }>;
}

export default function SymptomGraph({ data }: SymptomGraphProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
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
            dataKey="mood"
            stroke="#10b981"
            name="Mood"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}