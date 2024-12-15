import React, { useState } from 'react';
import { UserProfile } from '../components/UserProfile';
import { FilterBar } from '../components/FilterBar';
import { SignalCard } from '../components/SignalCard';
import { SignalModal } from '../components/SignalModal';
import { signals } from '../data/signals';
import { Pagination } from '../components/Pagination';
import { FilterOptions, Signal } from '../types';

export function SignalsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedSignal, setSelectedSignal] = useState<Signal | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    type: 'ALL',
    status: 'ALL',
    sortBy: 'score'
  });

  const itemsPerPage = 9;
  const filteredSignals = signals.filter(signal => {
    if (filters.type !== 'ALL' && signal.type !== filters.type) return false;
    if (filters.status !== 'ALL' && signal.status !== filters.status) return false;
    return true;
  }).sort((a, b) => {
    if (filters.sortBy === 'score') return b.score - a.score;
    if (filters.sortBy === 'name') return a.name.localeCompare(b.name);
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  const totalPages = Math.ceil(filteredSignals.length / itemsPerPage);
  const currentSignals = filteredSignals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <UserProfile
        username="Alpha Kings"
        avatarUrl="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=128&q=80"
        isFollowing={isFollowing}
        onFollow={() => setIsFollowing(!isFollowing)}
      />
      
      <FilterBar 
        filters={filters} 
        onFilterChange={setFilters} 
        onShowPastSignals={() => {}}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {currentSignals.map((signal, index) => (
          <SignalCard
            key={signal.id}
            signal={signal}
            onClick={() => setSelectedSignal(signal)}
            index={index}
            isAuthenticated={true}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <SignalModal
        signal={selectedSignal}
        isOpen={!!selectedSignal}
        onClose={() => setSelectedSignal(null)}
      />
    </div>
  );
}