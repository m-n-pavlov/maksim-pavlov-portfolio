import type {FC, SVGProps} from 'react';

interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

interface CVLinks {
  ru: {
    label: string;
    url: string
  };
  en: {
    label: string;
    url: string
  };
}

export interface FooterData {
  socials: readonly SocialLink[];
  documents: CVLinks;
}
