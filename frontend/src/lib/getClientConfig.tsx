import type { ClientConfig } from "../types/Config";
import clientAConfig from "../configs/clientA";
import clientBConfig from "../configs/clientB";
// import other configs...

const configMap: Record<string, ClientConfig> = {
  A: clientAConfig,
  B: clientBConfig,
  // ...
};

export function getClientConfig(): ClientConfig {
  const key = import.meta.env.VITE_CLIENT || "A";
  return configMap[key] || clientAConfig;
}
