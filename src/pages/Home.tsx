import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  FileText, 
  Activity,
  Users,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import PatientStats from '../components/patients/PatientStats';
import { mockPatients } from '../data/database';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      icon: FileText,
      title: "Managementul Tratamentului",
      description: "Urmărire completă a planului de tratament și a progresului"
    },
    {
      icon: Calendar,
      title: "Programări și Reminder-uri",
      description: "Gestionarea programărilor și notificări importante"
    },
    {
      icon: Activity,
      title: "Monitorizare Simptome",
      description: "Înregistrarea și urmărirea simptomelor în timp real"
    },
    {
      icon: Users,
      title: "Suport Pacienți",
      description: "Acces la resurse și grupuri de suport"
    }
  ];

  const recentUpdates = [
    {
      title: "Noi tratamente disponibile",
      description: "Actualizări privind opțiunile de tratament pentru cancer mamar",
      date: "20 Mar 2024"
    },
    {
      title: "Grup de suport nou",
      description: "S-a format un nou grup de suport pentru pacienții cu cancer pulmonar",
      date: "19 Mar 2024"
    },
    {
      title: "Webinar educațional",
      description: "Sesiune online despre gestionarea efectelor secundare",
      date: "18 Mar 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Îngrijire oncologică personalizată și suport continuu
            </h1>
            <p className="text-xl mb-8">
              OncoLink oferă o platformă completă pentru managementul tratamentului oncologic și suport pentru pacienți.
            </p>
            <div className="flex gap-4">
              <Link
                to="/patients/new"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-gray-50"
              >
                Înregistrare Pacient
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-rose-700"
              >
                Află mai multe
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Caută pacienți, tratamente sau resurse..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Overview */}
        <PatientStats patients={mockPatients} />

        {/* Features Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Funcționalități principale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Updates */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Actualizări recente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentUpdates.map((update, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-5 w-5 text-rose-600 mr-2" />
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {update.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {update.description}
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center text-sm text-rose-600 hover:text-rose-700"
                >
                  Citește mai mult
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}