import React from 'react';
import { Dashboard } from '../components/dashboard/Dashboard';

export function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Welcome Message */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Alpha Kings
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get access to premium crypto and NFT signals, real-time market analysis, 
            and join a community of successful traders.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Dashboard Preview
          </h2>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}