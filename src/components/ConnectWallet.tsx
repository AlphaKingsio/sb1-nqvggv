import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { ConnectWalletModal } from './modals/ConnectWalletModal';

export function ConnectWallet() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
      >
        <Wallet size={20} />
        <span>Connect Wallet</span>
      </button>

      <ConnectWalletModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}