import React from 'react';
import { Sparkles } from 'lucide-react';

export function Airdrops() {
  const airdrops = [
    {
      id: 1,
      name: "NewDeFi Protocol",
      description: "Participate in the airdrop of the next-gen DeFi protocol",
      value: "$500-$5000",
      endDate: "2024-03-20",
      requirements: ["Hold min. 0.1 ETH", "Complete social tasks", "Join Discord"],
    },
    // Add more airdrops here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Sparkles size={24} className="text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Active Airdrops</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {airdrops.map((airdrop) => (
          <div key={airdrop.id} className="bg-[#1a1b1e] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">{airdrop.name}</h3>
            <p className="text-gray-400 mb-4">{airdrop.description}</p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-blue-400 font-medium">Estimated Value</div>
                <div className="text-white text-lg">{airdrop.value}</div>
              </div>
              <div>
                <div className="text-gray-400 mb-2">Requirements:</div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {airdrop.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
                Participate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}