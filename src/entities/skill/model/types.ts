type SkillId = 'hard' | 'tools' | 'soft' | 'fintech';

interface SkillItem {
  id: string; // делает группы и тезисы уникальными для маппинга
  label?: string; // для заголовков групп Hard и Tools карточек
  skills?: string[]; // массив тегов для Hard и Tools карточек
  text: string; // для описания групп Hard и Tools карточек / для тезисов Soft и Fintech карточек
}

export interface SkillCardData {
  id: SkillId; // делает бенто-карточку уникальной для маппинга
  title: string; // название всей бенто-карточки
  subtitle: string; // описание всей бенто-карточки
  items: SkillItem[]; // массив групп для Hard и Tools карточек / тезисов для Soft и Fintech карточек
}
