import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';

// Pages
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import PatientDashboard from '../pages/PatientDashboard';
import PatientProfile from '../pages/PatientProfile';
import PatientManagement from '../pages/PatientManagement';
import Analytics from '../pages/Analytics';
import Settings from '../pages/Settings';
import Help from '../pages/Help';
import Login from '../pages/Login';
import Appointments from '../pages/Appointments';
import Documents from '../pages/Documents';
import Unauthorized from '../pages/Unauthorized';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/help" element={<Help />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient-dashboard"
        element={
          <ProtectedRoute>
            <PatientDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient/:id"
        element={
          <ProtectedRoute allowedRoles={['doctor', 'navigator']}>
            <PatientProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patients"
        element={
          <ProtectedRoute allowedRoles={['doctor', 'navigator']}>
            <PatientManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute allowedRoles={['doctor', 'navigator']}>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/appointments"
        element={
          <ProtectedRoute>
            <Appointments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/documents"
        element={
          <ProtectedRoute>
            <Documents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}