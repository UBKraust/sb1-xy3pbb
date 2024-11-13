import React, { useState } from 'react';
import { Save, Plus, Thermometer, Battery, Heart, Pill } from 'lucide-react';
import { Button } from '../ui/Button';
import { TextField } from '../ui/TextField';
import { Chip } from '../ui/Chip';

interface HealthEntry {
  id: string;
  date: string;
  painLevel: number;
  energyLevel: number;
  mood: 'Very Poor' | 'Poor' | 'Fair' | 'Good' | 'Excellent';
  sideEffects: string[];
  notes: string;
}

interface HealthStatusNotepadProps {
  patientId: string;
  onSave?: (entry: HealthEntry) => void;
}

const moodOptions = ['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent'] as const;
const commonSideEffects = [
  'Nausea',
  'Fatigue',
  'Headache',
  'Loss of Appetite',
  'Muscle Pain',
  'Fever',
  'Dizziness',
  'Other'
];

export default function HealthStatusNotepad({ patientId, onSave }: HealthStatusNotepadProps) {
  const [entries, setEntries] = useState<HealthEntry[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentEntry, setCurrentEntry] = useState<Omit<HealthEntry, 'id'>>({
    date: new Date().toISOString().split('T')[0],
    painLevel: 0,
    energyLevel: 5,
    mood: 'Fair',
    sideEffects: [],
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: HealthEntry = {
      id: Date.now().toString(),
      ...currentEntry
    };
    setEntries(prev => [newEntry, ...prev]);
    onSave?.(newEntry);
    setShowForm(false);
    setCurrentEntry({
      date: new Date().toISOString().split('T')[0],
      painLevel: 0,
      energyLevel: 5,
      mood: 'Fair',
      sideEffects: [],
      notes: ''
    });
  };

  const handleSideEffectToggle = (effect: string) => {
    setCurrentEntry(prev => ({
      ...prev,
      sideEffects: prev.sideEffects.includes(effect)
        ? prev.sideEffects.filter(e => e !== effect)
        : [...prev.sideEffects, effect]
    }));
  };

  return (
    <div className="bg-surface rounded-xl shadow-md">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Health Status Tracker</h3>
          <Button
            variant="filled"
            onClick={() => setShowForm(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            New Entry
          </Button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="mb-8 bg-surface-variant rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField
                type="date"
                label="Date"
                value={currentEntry.date}
                onChange={e => setCurrentEntry(prev => ({ ...prev, date: e.target.value }))}
              />

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center">
                    <Thermometer className="h-4 w-4 mr-2" />
                    Pain Level (0-10)
                  </div>
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={currentEntry.painLevel}
                  onChange={e => setCurrentEntry(prev => ({ ...prev, painLevel: Number(e.target.value) }))}
                  className="w-full"
                />
                <div className="text-center text-sm">
                  {currentEntry.painLevel}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center">
                    <Battery className="h-4 w-4 mr-2" />
                    Energy Level (0-10)
                  </div>
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={currentEntry.energyLevel}
                  onChange={e => setCurrentEntry(prev => ({ ...prev, energyLevel: Number(e.target.value) }))}
                  className="w-full"
                />
                <div className="text-center text-sm">
                  {currentEntry.energyLevel}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-2" />
                    Mood
                  </div>
                </label>
                <select
                  value={currentEntry.mood}
                  onChange={e => setCurrentEntry(prev => ({ ...prev, mood: e.target.value as typeof moodOptions[number] }))}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  {moodOptions.map(mood => (
                    <option key={mood} value={mood}>{mood}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                <div className="flex items-center">
                  <Pill className="h-4 w-4 mr-2" />
                  Side Effects
                </div>
              </label>
              <div className="flex flex-wrap gap-2">
                {commonSideEffects.map(effect => (
                  <Chip
                    key={effect}
                    label={effect}
                    variant="filter"
                    selected={currentEntry.sideEffects.includes(effect)}
                    onClick={() => handleSideEffectToggle(effect)}
                  />
                ))}
              </div>
            </div>

            <TextField
              variant="outlined"
              label="Additional Notes"
              value={currentEntry.notes}
              onChange={e => setCurrentEntry(prev => ({ ...prev, notes: e.target.value }))}
              className="mt-6"
              multiline
              rows={3}
            />

            <div className="mt-6 flex justify-end space-x-3">
              <Button
                variant="outlined"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
              <Button
                variant="filled"
                type="submit"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Entry
              </Button>
            </div>
          </form>
        )}

        <div className="space-y-6">
          {entries.map(entry => (
            <div
              key={entry.id}
              className="border-l-4 border-primary pl-4 py-4 bg-surface-variant rounded-r-lg"
            >
              <div className="flex justify-between items-start">
                <div className="text-sm">{entry.date}</div>
                <div className="flex space-x-2">
                  <Chip
                    label={`Pain: ${entry.painLevel}/10`}
                    variant="assist"
                  />
                  <Chip
                    label={`Energy: ${entry.energyLevel}/10`}
                    variant="assist"
                  />
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm">Mood: {entry.mood}</p>
                {entry.sideEffects.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm">Side Effects:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {entry.sideEffects.map(effect => (
                        <Chip
                          key={effect}
                          label={effect}
                          variant="assist"
                        />
                      ))}
                    </div>
                  </div>
                )}
                {entry.notes && (
                  <p className="mt-2 text-sm">{entry.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}