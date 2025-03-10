import React from 'react';

const illustrations = {
  carrot: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M50,20 C50,20 45,25 45,40 C45,55 50,80 50,80" />
      <path d="M40,25 C40,25 45,35 45,50 C45,65 40,75 40,75" />
      <path d="M60,25 C60,25 55,35 55,50 C55,65 60,75 60,75" />
      <path d="M50,20 C50,20 40,15 30,25 C20,35 30,15 50,20" />
      <path d="M50,20 C50,20 60,15 70,25 C80,35 70,15 50,20" />
    </svg>
  ),
  tomato: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="50" cy="55" r="25" />
      <path d="M50,30 C50,30 45,20 50,10 C55,0 45,20 50,30" />
      <path d="M40,35 C40,35 30,25 35,20" />
      <path d="M60,35 C60,35 70,25 65,20" />
    </svg>
  ),
  leaf: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20,80 C20,80 30,20 80,20 C80,20 80,70 20,80 Z" />
      <path d="M30,70 C30,70 40,30 70,30" />
      <path d="M40,60 C40,60 50,40 60,40" />
    </svg>
  ),
  corn: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M50,20 L50,80" />
      <path d="M45,30 C45,30 35,40 45,50 C55,60 45,70 45,70" />
      <path d="M55,30 C55,30 65,40 55,50 C45,60 55,70 55,70" />
      <path d="M50,20 C50,20 40,10 50,5 C60,0 50,10 50,20" />
    </svg>
  ),
  bean: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M30,70 C30,70 40,20 70,30 C70,30 60,80 30,70 Z" />
      <path d="M40,60 C40,60 50,30 60,35" />
    </svg>
  ),
  squash: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M30,50 C30,30 70,30 70,50 C70,70 30,70 30,50 Z" />
      <path d="M50,30 C50,30 45,20 50,10 C55,0 45,20 50,30" />
      <path d="M40,40 C40,40 50,50 60,40" />
    </svg>
  ),
  sunflower: (
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="15" fill="#F1C40F" />
      <circle cx="50" cy="50" r="10" fill="#E67E22" />
      {[...Array(12)].map((_, i) => (
        <path
          key={i}
          d={`M50,50 L${50 + 35 * Math.cos(i * Math.PI / 6)},${50 + 35 * Math.sin(i * Math.PI / 6)}`}
          stroke="#F1C40F"
          strokeWidth="8"
          strokeLinecap="round"
        />
      ))}
    </svg>
  ),
  apple: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M50,30 C50,30 45,20 50,15 C55,10 60,15 60,20" />
      <path d="M50,30 C20,30 20,90 50,90 C80,90 80,30 50,30" />
      <path d="M50,30 C50,30 55,20 60,15" />
    </svg>
  ),
  pepper: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M50,20 C50,20 45,15 50,10 C55,5 55,15 50,20" />
      <path d="M50,20 C30,20 20,40 20,60 C20,80 40,90 50,90 C60,90 80,80 80,60 C80,40 70,20 50,20" />
    </svg>
  ),
  broccoli: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M50,90 L50,50" />
      <circle cx="40" cy="40" r="10" />
      <circle cx="60" cy="40" r="10" />
      <circle cx="50" cy="30" r="10" />
      <path d="M30,50 C30,50 40,45 50,50" />
      <path d="M70,50 C70,50 60,45 50,50" />
    </svg>
  ),
  mushroom: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M30,50 C30,30 70,30 70,50 C70,60 30,60 30,50" />
      <path d="M45,50 L40,90" />
      <path d="M55,50 L60,90" />
    </svg>
  ),
  wheat: (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M50,20 L50,90" />
      <path d="M50,30 L40,20" />
      <path d="M50,40 L60,30" />
      <path d="M50,50 L40,40" />
      <path d="M50,60 L60,50" />
      <path d="M50,70 L40,60" />
    </svg>
  )
};

function FoodIllustration({ type = 'leaf', className = '', style = {} }) {
  const opacity = type === 'sunflower' ? 'text-accent-3/80 hover:text-accent-3/90' : 'text-accent-3/30 hover:text-accent-3/40';
  
  return (
    <div 
      className={`${opacity} transition-colors duration-300 filter drop-shadow-md ${className}`}
      style={{ ...style }}
    >
      {illustrations[type]}
    </div>
  );
}

export default FoodIllustration;