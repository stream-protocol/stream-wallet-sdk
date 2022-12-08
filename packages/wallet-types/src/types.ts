import { Keplr } from "@keplr-wallet/types";
import { UmbralApi } from "@stream-wallet/umbral-types";

export interface StreamBrowserWallet {
  readonly version: string;
  readonly umbral: UmbralApi;
  readonly keplr: Keplr;
}
