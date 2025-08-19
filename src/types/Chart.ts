// src/types/chart.ts

export type ConfigItem = {
    label?: string;
    icon?: React.ComponentType<any>;
    [key: string]: any;
  };
  
  export type Config = Record<string, ConfigItem>;
  
  export type PayloadItem = {
    dataKey?: string | number;
    name?: string;
    value?: any;
    payload?: Record<string, any>; // ✅ flat object, not nested array
    fill?: string;
    color?: string;
    [key: string]: any;
  };