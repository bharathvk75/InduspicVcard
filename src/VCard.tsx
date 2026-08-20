import { useRef } from 'react';
import Logo from './components/Logo';
import CompanyIdentity from './components/CompanyIdentity';
import Description from './components/Description';
import PrimaryActions from './components/PrimaryActions';
import MapPreview from './components/MapPreview';
import ContactInfo from './components/ContactInfo';
import AddToContacts from './components/AddToContacts';
import { useEntranceAnimation, useButtonInteractions } from './animations';

export default function VCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEntranceAnimation(cardRef);
  useButtonInteractions();

  return (
    <div ref={cardRef} className="vcard-container">
      <div className="vcard">
        <div className="vcard-inner">
          <div className="header-identity-row" data-gsap="header-row">
            <Logo />
            <CompanyIdentity />
          </div>
          <Description />
          <div className="separator" />
          <PrimaryActions />
          <MapPreview />
          <ContactInfo />
          <AddToContacts />
        </div>
      </div>
    </div>
  );
}
