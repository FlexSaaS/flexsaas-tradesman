import type { ClientConfig } from "../types/Config";
import clientAConfig from "../configs/clientA";
import clientBConfig from "../configs/clientB";
import clientBeakomConfig from "../configs/Beakom";
import clientPrintifyConfig from "../configs/Printify";
// import other configs...

const configMap: Record<string, ClientConfig> = {
  A: clientAConfig,
  B: clientBConfig,
  Beakom: clientBeakomConfig,
  Printify: clientPrintifyConfig,
  // ...
};

export function getClientConfig(): ClientConfig {
  const key = import.meta.env.VITE_CLIENT || "B";
  return configMap[key] || clientAConfig;
}
