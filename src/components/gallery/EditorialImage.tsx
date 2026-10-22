import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  caption?: string;
  credit?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  aspectClass = 'aspect-[4/5]',
  className = '',
  caption,
  credit,
  priority = false
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`group relative overflow-hidden bg-[#F8E9EB] ${className}`}>
      <div className={`w-full ${aspectClass} overflow-hidden relative`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F8E9EB] to-[#EED5DB] text-[#342A2D]">
            <Sparkles className="w-6 h-6 text-[#A65C73] mb-2" />
            <p className="font-editorial text-lg font-medium">{alt}</p>
            <p className="text-xs text-[#817278] mt-1">
              The Hairdressers · 92 Boughton, Chester
            </p>
          </div>
        )}
      </div>

      {(caption || credit) && (
        <figcaption className="pt-2.5 flex items-baseline justify-between gap-4 text-xs text-[#817278]">
          {caption && <span className="text-[#342A2D] font-medium">{caption}</span>}
          {credit && <span className="shrink-0">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
