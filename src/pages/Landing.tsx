import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Calendar, 
  FileText, 
  Shield, 
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Activity,
  BookOpen,
  MessageSquare
} from 'lucide-react';

export default function Landing() {
  const features = [
    {
      icon: Heart,
      title: "Îngrijire Personalizată",
      description: "Planuri de tratament oncologic adaptate nevoilor specifice ale fiecărui pacient"
    },
    {
      icon: Users,
      title: "Echipă Multidisciplinară",
      description: "Colaborare între oncologi, radiologi și alți specialiști pentru tratament integrat"
    },
    {
      icon: Activity,
      title: "Monitorizare Continuă",
      description: "Urmărirea în timp real a progresului și ajustarea tratamentului"
    },
    {
      icon: MessageSquare,
      title: "Suport Continuu",
      description: "Asistență și comunicare permanentă cu echipa medicală"
    }
  ];

  const resources = [
    {
      title: "Ghid de Tratament",
      description: "Informații complete despre opțiunile de tratament oncologic",
      icon: BookOpen
    },
    {
      title: "Programări și Monitorizare",
      description: "Sistem integrat de programări și urmărire a progresului",
      icon: Calendar
    },
    {
      title: "Resurse Educaționale",
      description: "Materiale informative și suport pentru pacienți și familii",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 lg:py-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Îngrijire oncologică personalizată
                </h1>
                <p className="mt-6 text-xl lg:text-2xl">
                  OncoLink oferă o platformă completă pentru managementul tratamentului oncologic și suport continuu pentru pacienți.
                </p>
                <div className="mt-10 flex gap-4">
                  <Link
                    to="/register"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-gray-50"
                  >
                    Începe Acum
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-rose-700"
                  >
                    Află mai multe
                  </Link>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Medical team discussion"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Soluții Complete pentru Îngrijirea Oncologică
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Oferim instrumente și suport pentru întregul parcurs al tratamentului oncologic
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-rose-500 text-white flex items-center justify-center">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Resurse și Suport
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Acces la informații și asistență în fiecare etapă a tratamentului
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                  <resource.icon className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-rose-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Pregătit să începi?</span>
            <span className="block text-rose-200">
              Alătură-te platformei OncoLink astăzi.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-rose-50"
              >
                Creează Cont
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-700 hover:bg-rose-800"
              >
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Platformă
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/features" className="text-base text-gray-300 hover:text-white">
                    Funcționalități
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-base text-gray-300 hover:text-white">
                    Resurse
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Suport
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/help" className="text-base text-gray-300 hover:text-white">
                    Ajutor
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/privacy" className="text-base text-gray-300 hover:text-white">
                    Confidențialitate
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-base text-gray-300 hover:text-white">
                    Termeni
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Social
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white inline-flex items-center">
                    LinkedIn
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white inline-flex items-center">
                    Twitter
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 OncoLink. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}