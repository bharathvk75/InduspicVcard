import { useEffect } from 'react';
import gsap from 'gsap';

export function useEntranceAnimation(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: 0.7,
        },
      });

      // Initial state — everything hidden
      gsap.set('[data-gsap="logo"]', { opacity: 0, y: 12, scale: 0.92 });
      gsap.set('[data-gsap="identity"]', { opacity: 0, y: 10 });
      gsap.set('[data-gsap="description"]', { opacity: 0, y: 8 });
      gsap.set('[data-gsap="action-item"]', { opacity: 0, y: 10 });
      gsap.set('[data-gsap="map-preview"]', { opacity: 0, y: 10 });
      gsap.set('[data-gsap="contacts"]', { opacity: 0, y: 8 });
      gsap.set('[data-gsap="save-contact"]', { opacity: 0, y: 8 });

      // Card entrance
      gsap.set('.vcard', { opacity: 0, scale: 0.97 });
      tl.to('.vcard', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      });

      // Logo
      tl.to('[data-gsap="logo"]', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.4)',
      }, '-=0.3');

      // Identity
      tl.to('[data-gsap="identity"]', {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, '-=0.35');

      // Description
      tl.to('[data-gsap="description"]', {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, '-=0.3');

      // Action buttons stagger
      tl.to('[data-gsap="action-item"]', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out',
      }, '-=0.2');

      // Map preview
      tl.to('[data-gsap="map-preview"]', {
        opacity: 1,
        y: 0,
        duration: 0.4,
      }, '-=0.15');

      // Contacts
      tl.to('[data-gsap="contacts"]', {
        opacity: 1,
        y: 0,
        duration: 0.4,
      }, '-=0.2');

      // Save contact
      tl.to('[data-gsap="save-contact"]', {
        opacity: 1,
        y: 0,
        duration: 0.4,
      }, '-=0.2');

    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}

export function useButtonInteractions() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.action-btn, .save-contact-btn, .contact-row, .map-preview');

    const handlePointerDown = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      gsap.to(target, {
        scale: 0.96,
        duration: 0.12,
        ease: 'power2.out',
      });
    };

    const handlePointerUp = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      gsap.to(target, {
        scale: 1,
        duration: 0.35,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    const handlePointerLeave = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      gsap.to(target, {
        scale: 1,
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    buttons.forEach((btn) => {
      btn.addEventListener('pointerdown', handlePointerDown);
      btn.addEventListener('pointerup', handlePointerUp);
      btn.addEventListener('pointerleave', handlePointerLeave);
      btn.addEventListener('pointercancel', handlePointerLeave);
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('pointerdown', handlePointerDown);
        btn.removeEventListener('pointerup', handlePointerUp);
        btn.removeEventListener('pointerleave', handlePointerLeave);
        btn.removeEventListener('pointercancel', handlePointerLeave);
      });
    };
  }, []);
}
