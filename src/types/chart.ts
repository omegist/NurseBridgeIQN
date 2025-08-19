// src/types/chart.ts
import type { Icon } from 'lucide-react';

export type ConfigItem = {
  label?: string;
  icon?: React.ComponentType | Icon;
  [key: string]: any;
};

export type Config = Record<string, ConfigItem>;

export type PayloadItem = {
  dataKey?: string | number;
  name?: string;
  value?: any;
  payload?: Record<string, any>;
  fill?: string;
  color?: string;
  [key: string]: any;
};
