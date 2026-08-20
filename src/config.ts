export interface CompanyInfo {
  name: string;
  division: string;
  description: string;
  shortDescription: string;
  website: string;
  googleMaps: string;
  whatsapp: string;
  email: string;
  primaryPhone: string;
  primaryContact: string;
  alternativePhone: string;
  alternativeContact: string;
  logoSrc: string;
}

export const companyInfo: CompanyInfo = {
  name: 'INDUSPIC ENGINEERS',
  division: 'CHEMICALS DIVISION',
  description:
    'Induspic Engineers is one among the leading blenders of descaling chemicals in Sugar Industries. The speciality of our chemicals is that it descales even the hardest of the scales without harming the parent material.',
  shortDescription:
    'Leading blenders of descaling chemicals for the sugar industry, engineered to remove even the hardest scales without harming the parent material.',
  website: 'https://www.induspicengineers.com',
  googleMaps: 'https://maps.app.goo.gl/n5HDmoaNvGyNYznr8',
  whatsapp: 'https://wa.me/9449983601',
  email: 'induspic@gmail.com',
  primaryPhone: '+91 9449983601',
  primaryContact: 'ANBU SOMAN',
  alternativePhone: '+91 6363447946',
  alternativeContact: 'BHARATH ABHINESH A',
  logoSrc: '/induspic-logo.png',
};

export function generateVCF(): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${companyInfo.name}`,
    `ORG:${companyInfo.name};${companyInfo.division}`,
    `TEL;TYPE=WORK,VOICE:${companyInfo.primaryPhone.replace(/\s/g, '')}`,
    `TEL;TYPE=WORK,VOICE:${companyInfo.alternativePhone.replace(/\s/g, '')}`,
    `EMAIL;TYPE=WORK:${companyInfo.email}`,
    `URL:${companyInfo.website}`,
    `NOTE:${companyInfo.description}`,
    'END:VCARD',
  ];
  return lines.join('\r\n');
}

export function downloadVCF(): void {
  const vcfContent = generateVCF();
  const blob = new Blob([vcfContent], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'INDUSPIC_ENGINEERS.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
