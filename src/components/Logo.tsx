import { useRef } from 'react';
import { companyInfo } from '../config';

export default function Logo() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="logo-container" data-gsap="logo">
      <img
        src={companyInfo.logoSrc}
        alt={`${companyInfo.name} logo`}
        width={80}
        height={80}
        loading="eager"
        draggable={false}
      />
    </div>
  );
}
