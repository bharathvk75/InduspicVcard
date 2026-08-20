import { Download } from 'lucide-react';
import { downloadVCF } from '../config';

export default function AddToContacts() {
  return (
    <button
      className="save-contact-btn"
      onClick={downloadVCF}
      aria-label="Save INDUSPIC ENGINEERS VCard"
      data-gsap="save-contact"
    >
      <Download />
      <span>Save VCard</span>
    </button>
  );
}
