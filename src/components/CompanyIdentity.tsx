import { companyInfo } from '../config';

export default function CompanyIdentity() {
  return (
    <div className="company-identity-text" data-gsap="identity">
      <h1 className="company-name-full">
        <span className="name-brand">{companyInfo.name}</span>{' '}
        <span className="name-division">{companyInfo.division}</span>
      </h1>
    </div>
  );
}
