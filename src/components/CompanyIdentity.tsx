import { companyInfo } from '../config';

export default function CompanyIdentity() {
  return (
    <div className="company-identity-text" data-gsap="identity">
      <h1 className="company-name-oneline">
        <span className="brand-title">{companyInfo.name}</span>{' '}
        <span className="division-title">{companyInfo.division}</span>
      </h1>
    </div>
  );
}
