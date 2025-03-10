import React, { useState } from 'react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoMail, IoClose, IoCheckmark, IoLink } from 'react-icons/io5';

function ShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Check out Three Sisters Market Co-op!')}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent('Three Sisters Market Co-op')}&body=${encodeURIComponent(`Check out Three Sisters Market Co-op: ${shareUrl}`)}`
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-lg p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <IoClose className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold mb-6">Share Three Sisters Market</h3>

        {/* Copy Link Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 p-3 bg-background-secondary/20 rounded-lg">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 bg-transparent border-none focus:outline-none text-sm"
            />
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-3 py-1 bg-background-alternative text-white rounded hover:bg-accent-3 transition-colors"
            >
              {copied ? (
                <>
                  <IoCheckmark className="w-5 h-5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <IoLink className="w-5 h-5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <IoLogoFacebook className="w-6 h-6" />
            <span>Facebook</span>
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <IoLogoTwitter className="w-6 h-6" />
            <span>Twitter</span>
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <IoLogoLinkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a
            href={shareLinks.email}
            className="flex items-center gap-3 p-3 bg-accent-3 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <IoMail className="w-6 h-6" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;