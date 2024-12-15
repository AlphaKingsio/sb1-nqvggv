import React, { useState } from 'react';
import { Gift, Users, Clock, Trophy } from 'lucide-react';
import { Pagination } from '../components/Pagination';

interface Giveaway {
  id: number;
  title: string;
  description: string;
  prize: string;
  endDate: string;
  participants: number;
  requirements: string[];
  image: string;
}

const giveaways: Giveaway[] = [
  {
    id: 1,
    title: "CryptoKings NFT Collection",
    description: "Win exclusive NFTs from the upcoming CryptoKings collection",
    prize: "5 Legendary NFTs",
    endDate: "2024-03-25",
    participants: 1234,
    requirements: ["Follow on Twitter", "Join Discord", "Share announcement"],
    image: "https://images.unsplash.com/photo-1635360840011-1f609f12d6d1?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    title: "DeFi Protocol Launch",
    description: "Participate in our token launch giveaway",
    prize: "10,000 DEFI Tokens",
    endDate: "2024-03-30",
    participants: 2567,
    requirements: ["Hold platform NFT", "Join Telegram", "Complete tasks"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    title: "GameFi Tournament",
    description: "Join our play-to-earn tournament and win big",
    prize: "5 ETH Prize Pool",
    endDate: "2024-04-05",
    participants: 892,
    requirements: ["Own game character", "Reach level 10", "Enter tournament"],
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=300&q=80"
  }
];

export function Giveaways() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(giveaways.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGiveaways = giveaways.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Gift size={24} className="text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Active Giveaways</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentGiveaways.map((giveaway) => (
          <div key={giveaway.id} className="bg-[#1a1b1e] border border-gray-800 rounded-xl overflow-hidden">
            <img
              src={giveaway.image}
              alt={giveaway.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{giveaway.title}</h3>
              <p className="text-gray-400 mb-4">{giveaway.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Trophy size={16} className="text-yellow-400" />
                    <span>Prize:</span>
                  </div>
                  <span className="text-white font-medium">{giveaway.prize}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Users size={16} />
                    <span>Participants:</span>
                  </div>
                  <span className="text-white">{giveaway.participants.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock size={16} />
                    <span>Ends:</span>
                  </div>
                  <span className="text-white">{new Date(giveaway.endDate).toLocaleDateString()}</span>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
                  Enter Giveaway
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