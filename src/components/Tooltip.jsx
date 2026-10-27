import React, { useState, useRef } from 'react';

export function Tooltip({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      {React.Children.map(children, (child) => {
        if (!child) return null;
        return React.cloneElement(child, { isOpen, setIsOpen });
      })}
    </div>
  );
}

export function TooltipTrigger({ children, asChild, isOpen, setIsOpen }) {
  return children;
}

export function TooltipContent({ children, className = '', isOpen }) {
  if (!isOpen) return null;

  return (
    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-auto ${className}`}>
      {children}
    </div>
  );
}
