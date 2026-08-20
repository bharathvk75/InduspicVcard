import { MapPin } from 'lucide-react';
import { companyInfo } from '../config';

export default function MapPreview() {
  return (
    <a
      href={companyInfo.googleMaps}
      target="_blank"
      rel="noopener noreferrer"
      className="map-preview"
      aria-label="Get directions to INDUSPIC ENGINEERS on Google Maps"
      data-gsap="map-preview"
    >
      <div className="map-preview__embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d76.65!3d12.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE4JzAwLjAiTiA3NsKwMzknMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, pointerEvents: 'none' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="INDUSPIC ENGINEERS location"
          tabIndex={-1}
        />
      </div>
      <div className="map-preview__overlay">
        <div className="map-preview__badge">
          <MapPin />
          <span>View on Maps</span>
        </div>
      </div>
    </a>
  );
}
