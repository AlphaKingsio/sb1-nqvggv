import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { AlphaCallerCard } from '../components/alpha-callers/AlphaCallerCard';
import { AlphaCallerModal } from '../components/alpha-callers/AlphaCallerModal';
import { Pagination } from '../components/Pagination';
import { alphaCallers } from '../data/alphaCallers';
import { AlphaCaller } from '../types';

export function AlphaCallers() {
  const [selectedCaller, setSelectedCaller] = useState<AlphaCaller | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const totalPages = Math.ceil(alphaCallers.length / itemsPerPage);
  const currentCallers = alphaCallers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Users size={24} className="text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Alpha Callers</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCallers.map((caller) => (
          <AlphaCallerCard
            key={caller.id}
            caller={caller}
            onClick={() => setSelectedCaller(caller)}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <AlphaCallerModal
        caller={selectedCaller}
        isOpen={!!selectedCaller}
        onClose={() => setSelectedCaller(null)}
      />
    </div>
  );
}