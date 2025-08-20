import type React from "react";

export type ConfigItem = {
  label?: string;
  icon?: React.ComponentType<any>; // Only React components allowed here
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

// Custom TooltipPayload type (no imports from recharts to avoid errors)
export type ExtendedTooltipPayload<T = any, K = string | number> = {
  dataKey?: K;
  name?: string;
  value?: any;
  payload?: T;
  color?: string;
  fill?: string;
  stroke?: string;
  [key: string]: any;
};

// Custom LegendPayload type
export type ExtendedLegendPayload = {
  color?: string;
  dataKey: string;
  inactive?: boolean;
  type?: string;
  value?: string | number;
  payload?: any;
  [key: string]: any;
};

