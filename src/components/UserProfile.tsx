import React from 'react';
import { Twitter, MessageCircle, Send } from 'lucide-react';

interface UserProfileProps {
  username: string;
  avatarUrl: string;
  isFollowing?: boolean;
  onFollow?: () => void;
}

export function UserProfile({ 
  username, 
  avatarUrl, 
  isFollowing = false, 
  onFollow 
}: UserProfileProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <img
            src={avatarUrl}
            alt={username}
            className="w-12 h-12 rounded-full border-2 border-blue-500"
          />
          <div>
            <h2 className="text-xl font-bold text-white">{username}</h2>
            <div className="flex items-center space-x-3 mt-1">
              <a
                href="https://twitter.com/alphakings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://discord.gg/alphakings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://t.me/alphakings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Send size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={onFollow}
        className={`px-6 py-2 rounded-lg transition-colors ${
          isFollowing
            ? 'bg-gray-700 hover:bg-red-500 hover:text-white text-gray-300'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}