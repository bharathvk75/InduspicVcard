import { Phone } from 'lucide-react';
import { companyInfo } from '../config';

interface ContactEntry {
  name: string;
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
}

const contacts: ContactEntry[] = [
  {
    name: 'ANBU SOMAN',
    label: 'Primary',
    value: companyInfo.primaryPhone,
    href: `tel:${companyInfo.primaryPhone.replace(/\s/g, '')}`,
    ariaLabel: `Call Anbu Soman at ${companyInfo.primaryPhone}`,
  },
  {
    name: 'BHARATH ABHINESH A',
    label: 'Alternative',
    value: companyInfo.alternativePhone,
    href: `tel:${companyInfo.alternativePhone.replace(/\s/g, '')}`,
    ariaLabel: `Call Bharath Abhinesh A at ${companyInfo.alternativePhone}`,
  },
];

export default function ContactInfo() {
  return (
    <div className="contact-info" data-gsap="contacts">
      {contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          className="contact-row"
          aria-label={contact.ariaLabel}
        >
          <Phone className="contact-icon" />
          <div className="contact-details">
            <span className="contact-name">{contact.name}</span>
            <span className="contact-label">{contact.label}</span>
          </div>
          <span className="contact-value">{contact.value}</span>
        </a>
      ))}
    </div>
  );
}
