import { companyInfo } from '../config';

export default function CompanyIdentity() {
  return (
    <div className="text-center" data-gsap="identity">
      <h1 className="company-name">{companyInfo.name}</h1>
      <p className="division-label">{companyInfo.division}</p>
    </div>
  );
}
