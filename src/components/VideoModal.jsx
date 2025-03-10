import React from 'react';
import { IoClose } from 'react-icons/io5';

function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <IoClose className="w-8 h-8" />
        </button>
        
        <video
          src="https://video.wixstatic.com/video/c73eb8_6dc659a9c58a4f62b06563ab8651887e/1080p/mp4/file.mp4"
          className="absolute inset-0 w-full h-full"
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}

export default VideoModal;