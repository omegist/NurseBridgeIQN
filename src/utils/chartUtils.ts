// src/utils/chartUtils.ts

import type { Config, ConfigItem, PayloadItem } from "../types/chart";

/**
 * Safely gets the config item from config by key
 * @param config - The config object
 * @param item - The data payload item
 * @param key - The key to look up in config
 * @returns ConfigItem or empty object if not found
 */
export function getPayloadConfigFromPayload(
  config: Config,
  item: PayloadItem,
  key: string
): ConfigItem {
  return config?.[key] ?? {};
}