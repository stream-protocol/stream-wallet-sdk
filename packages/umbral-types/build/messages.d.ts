import { Message } from "@keplr-wallet/router";
import { UmbralEncryptionResult, UmbralKeyFragment } from "./types";
export declare const ROUTE = "umbral";
export declare class UmbralGetPublicKeyMsg extends Message<Uint8Array> {
    readonly chainId: string;
    static type(): string;
    constructor(chainId: string);
    route(): string;
    type(): string;
    approveExternal(): boolean;
    validateBasic(): void;
}
export declare class UmbralGetSigningPublicKeyMsg extends Message<Uint8Array> {
    readonly chainId: string;
    static type(): string;
    constructor(chainId: string);
    route(): string;
    type(): string;
    approveExternal(): boolean;
    validateBasic(): void;
}
export declare class UmbralEncryptMsg extends Message<UmbralEncryptionResult> {
    readonly pubKey: Uint8Array;
    readonly plainTextBytes: Uint8Array;
    static type(): string;
    constructor(pubKey: Uint8Array, plainTextBytes: Uint8Array);
    route(): string;
    type(): string;
    approveExternal(): boolean;
    validateBasic(): void;
}
export declare class UmbralGenerateKeyFragsMsg extends Message<{
    fragments: UmbralKeyFragment[];
}> {
    readonly chainId: string;
    readonly receiverPublicKey: Uint8Array;
    readonly threshold: number;
    readonly shares: number;
    static type(): string;
    constructor(chainId: string, receiverPublicKey: Uint8Array, threshold: number, shares: number);
    route(): string;
    type(): string;
    approveExternal(): boolean;
    validateBasic(): void;
}
export declare class UmbralDecryptMsg extends Message<Uint8Array> {
    readonly chainId: string;
    readonly capsuleBytes: Uint8Array;
    readonly cipherTextBytes: Uint8Array;
    static type(): string;
    constructor(chainId: string, capsuleBytes: Uint8Array, cipherTextBytes: Uint8Array);
    route(): string;
    type(): string;
    approveExternal(): boolean;
    validateBasic(): void;
}
export declare class UmbralDecryptReEncryptedMsg extends Message<Uint8Array> {
    readonly chainId: string;
    readonly senderPublicKey: Uint8Array;
    readonly capsule: Uint8Array;
    readonly capsuleFragments: Uint8Array[];
    readonly cipherTextBytes: Uint8Array;
    static type(): string;
    constructor(chainId: string, senderPublicKey: Uint8Array, capsule: Uint8Array, capsuleFragments: Uint8Array[], cipherTextBytes: Uint8Array);
    route(): string;
    type(): string;
    approveExternal(): boolean;
    validateBasic(): void;
}
export declare class UmbralVerifyCapsuleFragMsg extends Message<boolean> {
    readonly capsuleFragment: Uint8Array;
    readonly capsule: Uint8Array;
    readonly verifyingPublicKey: Uint8Array;
    readonly senderPublicKey: Uint8Array;
    readonly receiverPublicKey: Uint8Array;
    static type(): string;
    constructor(capsuleFragment: Uint8Array, capsule: Uint8Array, verifyingPublicKey: Uint8Array, senderPublicKey: Uint8Array, receiverPublicKey: Uint8Array);
    route(): string;
    type(): string;
    approveExternal(): boolean;
    validateBasic(): void;
}
