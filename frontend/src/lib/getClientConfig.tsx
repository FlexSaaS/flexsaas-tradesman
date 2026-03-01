import type { ClientConfig } from "../types/Config";

import clientBeakomConfig from "../configs/Beakom";
import clientPrintifyConfig from "../configs/Printify";
import LecienConfig from "../configs/Lecien";
import EtherealVistaConfig from "../configs/Ethereal";

const configMap: Record<string, ClientConfig> = {
  Beakom: clientBeakomConfig,
  Printify: clientPrintifyConfig,
  Lecien: LecienConfig,
  Ethereal: EtherealVistaConfig,
};

export function getClientConfig(): ClientConfig {
  const key = import.meta.env.VITE_CLIENT || "B";
  return configMap[key] || LecienConfig;
}
