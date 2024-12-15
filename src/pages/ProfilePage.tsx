import React, { useState } from 'react';
import { UserCircle, Twitter, MessageCircle, Send, Settings, DollarSign, ListChecks } from 'lucide-react';
import { FormInput } from '../components/common/FormInput';
import { SocialConnectModal } from '../components/modals/SocialConnectModal';

export function ProfilePage() {
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'subscription' | 'requirements'>('profile');

  const tabs = [
    { key: 'profile', label: 'Profile', icon: UserCircle },
    { key: 'subscription', label: 'Subscription', icon: DollarSign },
    { key: 'requirements', label: 'Requirements', icon: ListChecks }
  ] as const;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Profile Settings</h1>

        <div className="bg-[#1a1b1e] border border-gray-800 rounded-xl overflow-hidden">
          <div className="flex border-b border-gray-800">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 px-4 py-3 flex items-center justify-center space-x-2 ${
                  activeTab === key
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:bg-gray-800'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96&q=80"
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-2 border-blue-500"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Change Photo
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    type="text"
                    label="Display Name"
                    value="Crypto Trader"
                    onChange={() => {}}
                    placeholder="Enter your display name"
                  />

                  <FormInput
                    type="text"
                    label="Username"
                    value="cryptotrader"
                    onChange={() => {}}
                    placeholder="Choose a username"
                  />

                  <FormInput
                    type="email"
                    label="Email"
                    value="trader@example.com"
                    onChange={() => {}}
                    placeholder="Enter your email"
                  />

                  <FormInput
                    type="text"
                    label="Location"
                    value="New York, USA"
                    onChange={() => {}}
                    placeholder="Enter your location"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Bio</label>
                  <textarea
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                    placeholder="Tell others about yourself..."
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Connected Accounts</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      onClick={() => setShowSocialModal(true)}
                      className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-400 px-4 py-3 rounded-lg transition-colors"
                    >
                      <Twitter size={20} />
                      <span>Connect Twitter</span>
                    </button>
                    <button
                      onClick={() => setShowSocialModal(true)}
                      className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-400 px-4 py-3 rounded-lg transition-colors"
                    >
                      <MessageCircle size={20} />
                      <span>Connect Discord</span>
                    </button>
                    <button
                      onClick={() => setShowSocialModal(true)}
                      className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-400 px-4 py-3 rounded-lg transition-colors"
                    >
                      <Send size={20} />
                      <span>Connect Telegram</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'subscription' && (
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Subscription Settings</h3>
                  
                  <div className="space-y-4">
                    <FormInput
                      type="text"
                      label="Monthly Subscription Price"
                      value="99"
                      onChange={() => {}}
                      placeholder="Enter price in USD"
                    />

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Subscription Benefits</label>
                      <textarea
                        className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                        placeholder="List the benefits subscribers will receive..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Access Requirements</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="twitter-follow"
                        className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor="twitter-follow" className="text-gray-300">
                        Must follow on Twitter
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="discord-join"
                        className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor="discord-join" className="text-gray-300">
                        Must join Discord server
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="telegram-join"
                        className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor="telegram-join" className="text-gray-300">
                        Must join Telegram channel
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-800 flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <SocialConnectModal
        isOpen={showSocialModal}
        onClose={() => setShowSocialModal(false)}
      />
    </div>
  );
}