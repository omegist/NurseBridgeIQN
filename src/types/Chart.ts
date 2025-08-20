import type { TooltipPayload, LegendPayload } from "recharts"
import type React from "react"

export type ConfigItem = {
  label?: string
  icon?: React.ComponentType<any>
  [key: string]: any
}

export type Config = Record<string, ConfigItem>

export type ExtendedTooltipPayload = TooltipPayload<any, string | number>
export type ExtendedLegendPayload = LegendPayload
