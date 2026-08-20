import { Phone } from 'lucide-react';
import { companyInfo } from '../config';

/* ===== Official HD Gmail Logo SVG ===== */
function GmailLogo() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M5 19h14a2 2 0 002-2V7.5L12 14 3 7.5V17a2 2 0 002 2z"/>
      <path fill="#EA4335" d="M19 4H5a2 2 0 00-2 2v1.5l9 6.5 9-6.5V6a2 2 0 00-2-2z"/>
      <path fill="#34A853" d="M19 19a2 2 0 002-2V7.5L14 12.5v6.5h5z"/>
      <path fill="#FBBC05" d="M5 19a2 2 0 01-2-2V7.5L10 12.5v6.5H5z"/>
    </svg>
  );
}

/* ===== WhatsApp Official Brand SVG ===== */
function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

interface ActionItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  variant?: 'primary' | 'whatsapp' | 'default';
  ariaLabel: string;
  external?: boolean;
}

const actions: ActionItem[] = [
  {
    label: 'Website',
    href: companyInfo.website,
    icon: (
      <img
        src={companyInfo.logoSrc}
        alt="Induspic Logo"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    ),
    ariaLabel: `Visit ${companyInfo.name} website`,
    external: true,
  },
  {
    label: 'Mail',
    href: `mailto:${companyInfo.email}`,
    icon: <GmailLogo />,
    ariaLabel: `Send email to ${companyInfo.name}`,
  },
  {
    label: 'WhatsApp',
    href: companyInfo.whatsapp,
    icon: <WhatsAppLogo />,
    variant: 'whatsapp',
    ariaLabel: `Message ${companyInfo.name} on WhatsApp`,
    external: true,
  },
  {
    label: 'Call',
    href: `tel:${companyInfo.primaryPhone.replace(/\s/g, '')}`,
    icon: <Phone style={{ width: '20px', height: '20px' }} />,
    variant: 'primary',
    ariaLabel: `Call ${companyInfo.name} at ${companyInfo.primaryPhone}`,
  },
];

export default function PrimaryActions() {
  return (
    <div className="actions-grid" data-gsap="actions">
      {actions.map((action) => {
        const variantClass =
          action.variant === 'primary'
            ? 'action-btn--primary'
            : action.variant === 'whatsapp'
              ? 'action-btn--whatsapp'
              : '';

        return (
          <a
            key={action.label}
            href={action.href}
            className={`action-btn ${variantClass}`}
            aria-label={action.ariaLabel}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            data-gsap="action-item"
          >
            <span className="btn-icon">{action.icon}</span>
            <span>{action.label}</span>
          </a>
        );
      })}
    </div>
  );
}
