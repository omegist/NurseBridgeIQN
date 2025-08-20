import type { Config, ConfigItem, ExtendedTooltipPayload } from "@/types/chart"

/**
 * Safely gets the config item from config by key
 * @param config - The config object
 * @param item - The data payload item
 * @param key - The key to look up in config
 * @returns ConfigItem or empty object if not found
 */
export function getPayloadConfigFromPayload(
  config: Config,
  item: ExtendedTooltipPayload,
  key: string
): ConfigItem {
  return config?.[key] ?? {}
}
