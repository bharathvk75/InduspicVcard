import { useRef } from 'react';
import { companyInfo } from '../config';

export default function Logo() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="logo-bare" data-gsap="logo">
      <img
        src={companyInfo.logoSrc}
        alt={`${companyInfo.name} logo`}
        loading="eager"
        draggable={false}
      />
    </div>
  );
}
