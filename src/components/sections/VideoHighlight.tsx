import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoHighlight: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger the video to play
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/10">
          {!isPlaying ? (
            <>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
                <button 
                  onClick={handlePlayClick}
                  className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none"
                  aria-label="Play video"
                >
                  <Play size={36} fill="white" className="ml-1" />
                </button>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center">
              <p className="text-white text-xl">Video would play here</p>
              {/* In a real implementation, this would be a video player */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;