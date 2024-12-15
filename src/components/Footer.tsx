import React, { useState } from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';
import { AboutModal } from './modals/AboutModal';
import { ContactModal } from './modals/ContactModal';
import { PricingModal } from './modals/PricingModal';
import { FAQModal } from './modals/FAQModal';
import { TermsModal } from './modals/TermsModal';

export function Footer() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="bg-[#1a1b1e] border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-400">
                We provide real-time crypto and NFT signals powered by advanced analytics and market insights.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setShowAbout(true)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowPricing(true)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowContact(true)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setShowFAQ(true)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowTerms(true)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <MessageCircle size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CryptoSignals. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
      <PricingModal isOpen={showPricing} onClose={() => setShowPricing(false)} />
      <FAQModal isOpen={showFAQ} onClose={() => setShowFAQ(false)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </>
  );
}