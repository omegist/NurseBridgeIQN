// src/utils/chartUtils.ts

export function getPayloadConfigFromPayload(
    config: Record<string, any>,
    item: Record<string, any>,
    key: string
  ) {
    return config?.[key] ?? {}
  }
  