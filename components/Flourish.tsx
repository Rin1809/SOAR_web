import React from 'react';

const Flourish: React.FC<{ position?: 'top' | 'bottom'; className?: string; }> = ({ position, className = '' }) => {
  const containerClass = `flourish-container ${position ? `flourish-${position}` : ''} ${className}`;

  return (
    <div className={containerClass} aria-hidden="true">
      <img src="/assets/flourish.png" alt="" className="flourish-image" />
    </div>
  );
};

export default Flourish;