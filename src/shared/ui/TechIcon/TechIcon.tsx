import React from "react";
import { useTheme, Theme } from '@/shared/lib/theme';
import type { TechIconConfig } from '@/entities/project';

interface TechIconProps {
  // Называем проп просто 'config' или 'icon', для лаконичности
  config: TechIconConfig;
  className?: string;
}

export const TechIcon = ({ config, className }: TechIconProps) => {
  const { theme } = useTheme();

  // Если вдруг данных нет, ничего не рендерим
  if (!config) return null;

  // Type Guard: проверяем, является ли это объектом с темами
  const isThemed = (cfg: TechIconConfig): cfg is { light: React.FC<React.SVGProps<SVGSVGElement>>; dark: React.FC<React.SVGProps<SVGSVGElement>> } => {
    return typeof cfg === 'object' && 'light' in cfg;
  };

  if (isThemed(config)) {
    // Теперь TS на 100% уверен, что у config есть .dark и .light
    const Icon = theme === Theme.DARK ? config.dark : config.light;
    return <Icon className={className} />;
  }

  // Здесь TS понимает, что остался только вариант с FC<SVGProps>
  const Icon = config;
  return <Icon className={className} />;
};
