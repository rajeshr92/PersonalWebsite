"use client";

import { ReactNode } from "react";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
}

export function FlipCard({ frontContent, backContent, className = "" }: FlipCardProps) {
  return (
    <div className={`[perspective:1000px] cursor-pointer ${className}`}>
      <div 
        className="relative w-full h-full transition-all duration-700 ease-in-out [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-sm overflow-hidden">
          {frontContent}
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-sm overflow-hidden">
          {backContent}
        </div>
      </div>
    </div>
  );
}

