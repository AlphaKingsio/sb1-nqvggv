import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SignalsPage } from '../pages/SignalsPage';
import { AlphaCallers } from '../pages/AlphaCallers';
import { Portfolio } from '../pages/Portfolio';
import { ProfilePage } from '../pages/ProfilePage';
import { LoginPage } from '../pages/LoginPage';
import { useAuth } from '../contexts/AuthContext';

export function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-[#13141b] flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/signals" /> : <LoginPage />} 
          />
          <Route 
            path="/signals" 
            element={isAuthenticated ? <SignalsPage /> : <Navigate to="/" />} 
          />
          <Route 
            path="/alpha-callers" 
            element={isAuthenticated ? <AlphaCallers /> : <Navigate to="/" />} 
          />
          <Route 
            path="/portfolio" 
            element={isAuthenticated ? <Portfolio /> : <Navigate to="/" />} 
          />
          <Route 
            path="/profile" 
            element={isAuthenticated ? <ProfilePage /> : <Navigate to="/" />} 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}