import React, { useState } from 'react';
import { Ticket, Users, Clock, Star } from 'lucide-react';
import { Pagination } from '../components/Pagination';

interface Whitelist {
  id: number;
  projectName: string;
  description: string;
  totalSpots: number;
  remainingSpots: number;
  endDate: string;
  requirements: string[];
  benefits: string[];
  image: string;
  status: 'Open' | 'Closing Soon' | 'Filled';
}

const whitelists: Whitelist[] = [
  {
    id: 1,
    projectName: "MetaVerse Pioneers",
    description: "Get early access to the most anticipated metaverse project",
    totalSpots: 1000,
    remainingSpots: 245,
    endDate: "2024-03-28",
    requirements: ["Hold community NFT", "Active Discord member", "Complete tasks"],
    benefits: ["Guaranteed mint", "50% discount", "Exclusive role"],
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=300&q=80",
    status: 'Open'
  },
  {
    id: 2,
    projectName: "DeFi Yield Protocol",
    description: "Join the whitelist for our revolutionary DeFi platform",
    totalSpots: 500,
    remainingSpots: 50,
    endDate: "2024-03-25",
    requirements: ["Stake 1000 tokens", "Complete KYC", "Join community"],
    benefits: ["Early access", "Bonus rewards", "Lower fees"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=300&q=80",
    status: 'Closing Soon'
  },
  {
    id: 3,
    projectName: "GameFi Revolution",
    description: "Be among the first to access our P2E gaming platform",
    totalSpots: 2000,
    remainingSpots: 0,
    endDate: "2024-03-20",
    requirements: ["Gaming experience", "Hold platform token", "Community contribution"],
    benefits: ["Beta access", "Free NFT", "Tournament entry"],
    image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&w=300&q=80",
    status: 'Filled'
  }
];

export function Whitelists() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(whitelists.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentWhitelists = whitelists.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Ticket size={24} className="text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Whitelist Opportunities</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentWhitelists.map((whitelist) => (
          <div key={whitelist.id} className="bg-[#1a1b1e] border border-gray-800 rounded-xl overflow-hidden">
            <div className="relative">
              <img
                src={whitelist.image}
                alt={whitelist.projectName}
                className="w-full h-48 object-cover"
              />
              <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${
                whitelist.status === 'Open' ? 'bg-green-400/20 text-green-400' :
                whitelist.status === 'Closing Soon' ? 'bg-yellow-400/20 text-yellow-400' :
                'bg-red-400/20 text-red-400'
              }`}>
                {whitelist.status}
              </span>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{whitelist.projectName}</h3>
              <p className="text-gray-400 mb-4">{whitelist.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Users size={16} />
                    <span>Remaining Spots:</span>
                  </div>
                  <span className="text-white">{whitelist.remainingSpots}/{whitelist.totalSpots}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock size={16} />
                    <span>Ends:</span>
                  </div>
                  <span className="text-white">{new Date(whitelist.endDate).toLocaleDateString()}</span>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-blue-400 mb-2">
                    <Star size={16} />
                    <span className="font-medium">Benefits</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {whitelist.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-2 rounded-lg transition-colors ${
                    whitelist.status === 'Filled'
                      ? 'bg-gray-700 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                  disabled={whitelist.status === 'Filled'}
                >
                  {whitelist.status === 'Filled' ? 'Whitelist Full' : 'Join Whitelist'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}