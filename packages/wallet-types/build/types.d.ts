import { Keplr } from "@keplr-wallet/types";
import { UmbralApi } from "@stream-wallet/umbral-types";
export interface FetchBrowserWallet {
    readonly version: string;
    readonly umbral: UmbralApi;
    readonly keplr: Keplr;
}
