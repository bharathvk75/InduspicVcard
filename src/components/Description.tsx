import { companyInfo } from '../config';

export default function Description() {
  return (
    <p className="company-description" data-gsap="description">
      {companyInfo.shortDescription}
    </p>
  );
}
