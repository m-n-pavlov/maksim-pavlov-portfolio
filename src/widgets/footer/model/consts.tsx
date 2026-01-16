import { SocialIcons } from '@/shared/assets/icons'; // импортируем группу Social-иконок
import type {FooterData} from "./types.ts";

export const FOOTER_DATA = {
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/m-n-pavlov',
      icon: SocialIcons.GitHub
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/your-username',
      icon: SocialIcons.LinkedIn
    },
    {
      id: 'telegram',
      label: 'Telegram',
      url: 'https://t.me/m_n_pavlov',
      icon: SocialIcons.Telegram // Telegram
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:m.n.pavlov@mail.com',
      icon: SocialIcons.Email // Email
    }
  ],
  documents: {
    ru: {
      label: 'Скачать резюме',
      url: '/resume-ru.pdf',
    },
    en: {
      label: 'Download CV',
      url: '/resume-en.pdf',
    }
  }
} as const satisfies FooterData;
