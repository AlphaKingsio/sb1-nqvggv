import React from 'react';
import { Filter, SortAsc, History } from 'lucide-react';
import { FilterOptions } from '../types';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onShowPastSignals: () => void;
}

export function FilterBar({ filters, onFilterChange, onShowPastSignals }: FilterBarProps) {
  return (
    <div className="bg-[#1a1b1e] p-4 rounded-lg flex flex-wrap gap-4 items-center">
      <div className="flex items-center space-x-2">
        <Filter size={18} className="text-gray-400" />
        <select
          value={filters.type}
          onChange={(e) => onFilterChange({ ...filters, type: e.target.value as FilterOptions['type'] })}
          className="bg-gray-800 text-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="ALL">All Assets</option>
          <option value="CRYPTO">Crypto</option>
          <option value="NFT">NFT</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-green-400"></span>
        <select
          value={filters.status}
          onChange={(e) => onFilterChange({ ...filters, status: e.target.value as FilterOptions['status'] })}
          className="bg-gray-800 text-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="ALL">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <SortAsc size={18} className="text-gray-400" />
        <select
          value={filters.sortBy}
          onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value as FilterOptions['sortBy'] })}
          className="bg-gray-800 text-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="score">Score</option>
          <option value="name">Name</option>
          <option value="timestamp">Date</option>
        </select>
      </div>

      <button
        onClick={onShowPastSignals}
        className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-1.5 rounded-lg transition-colors ml-auto"
      >
        <History size={18} />
        <span>Past Signals</span>
      </button>
    </div>
  );
}