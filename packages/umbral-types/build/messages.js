"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UmbralVerifyCapsuleFragMsg = exports.UmbralDecryptReEncryptedMsg = exports.UmbralDecryptMsg = exports.UmbralGenerateKeyFragsMsg = exports.UmbralEncryptMsg = exports.UmbralGetSigningPublicKeyMsg = exports.UmbralGetPublicKeyMsg = exports.ROUTE = void 0;
const router_1 = require("@keplr-wallet/router");
exports.ROUTE = "umbral";
class UmbralGetPublicKeyMsg extends router_1.Message {
    constructor(chainId) {
        super();
        this.chainId = chainId;
    }
    static type() {
        return "get-public-key-msg";
    }
    route() {
        return exports.ROUTE;
    }
    type() {
        return UmbralGetPublicKeyMsg.type();
    }
    approveExternal() {
        return true;
    }
    validateBasic() {
        if (!this.chainId) {
            throw new Error("chain id not set");
        }
    }
}
exports.UmbralGetPublicKeyMsg = UmbralGetPublicKeyMsg;
class UmbralGetSigningPublicKeyMsg extends router_1.Message {
    constructor(chainId) {
        super();
        this.chainId = chainId;
    }
    static type() {
        return "get-signing-public-key-msg";
    }
    route() {
        return exports.ROUTE;
    }
    type() {
        return UmbralGetSigningPublicKeyMsg.type();
    }
    approveExternal() {
        return true;
    }
    validateBasic() {
        if (!this.chainId) {
            throw new Error("chain id not set");
        }
    }
}
exports.UmbralGetSigningPublicKeyMsg = UmbralGetSigningPublicKeyMsg;
class UmbralEncryptMsg extends router_1.Message {
    constructor(pubKey, plainTextBytes) {
        super();
        this.pubKey = pubKey;
        this.plainTextBytes = plainTextBytes;
    }
    static type() {
        return "encrypt";
    }
    route() {
        return exports.ROUTE;
    }
    type() {
        return UmbralEncryptMsg.type();
    }
    approveExternal() {
        return true;
    }
    validateBasic() {
        if (!this.pubKey) {
            throw new Error("pubKey not set");
        }
        if (!this.plainTextBytes) {
            throw new Error("plainTextBytes not set");
        }
    }
}
exports.UmbralEncryptMsg = UmbralEncryptMsg;
class UmbralGenerateKeyFragsMsg extends router_1.Message {
    constructor(chainId, receiverPublicKey, threshold, shares) {
        super();
        this.chainId = chainId;
        this.receiverPublicKey = receiverPublicKey;
        this.threshold = threshold;
        this.shares = shares;
    }
    static type() {
        return "generate-kfrags";
    }
    route() {
        return exports.ROUTE;
    }
    type() {
        return UmbralGenerateKeyFragsMsg.type();
    }
    approveExternal() {
        return true;
    }
    validateBasic() {
        if (!this.chainId) {
            throw new Error("chain id not set");
        }
        if (!this.receiverPublicKey) {
            throw new Error("receiverPublicKey not set");
        }
        if (!this.threshold) {
            throw new Error("threshold not set");
        }
        if (!this.shares) {
            throw new Error("shares not set");
        }
    }
}
exports.UmbralGenerateKeyFragsMsg = UmbralGenerateKeyFragsMsg;
class UmbralDecryptMsg extends router_1.Message {
    constructor(chainId, capsuleBytes, cipherTextBytes) {
        super();
        this.chainId = chainId;
        this.capsuleBytes = capsuleBytes;
        this.cipherTextBytes = cipherTextBytes;
    }
    static type() {
        return "decrypt";
    }
    route() {
        return exports.ROUTE;
    }
    type() {
        return UmbralDecryptMsg.type();
    }
    approveExternal() {
        return true;
    }
    validateBasic() {
        if (!this.chainId) {
            throw new Error("chain id not set");
        }
        if (!this.cipherTextBytes) {
            throw new Error("cipherTextBytes not set");
        }
    }
}
exports.UmbralDecryptMsg = UmbralDecryptMsg;
class UmbralDecryptReEncryptedMsg extends router_1.Message {
    constructor(chainId, senderPublicKey, capsule, capsuleFragments, cipherTextBytes) {
        super();
        this.chainId = chainId;
        this.senderPublicKey = senderPublicKey;
        this.capsule = capsule;
        this.capsuleFragments = capsuleFragments;
        this.cipherTextBytes = cipherTextBytes;
    }
    static type() {
        return "decrypt-re-encrypted";
    }
    route() {
        return exports.ROUTE;
    }
    type() {
        return UmbralDecryptReEncryptedMsg.type();
    }
    approveExternal() {
        return true;
    }
    validateBasic() {
        if (!this.chainId) {
            throw new Error("chain id not set");
        }
        if (!this.cipherTextBytes) {
            throw new Error("cipherTextBytes not set");
        }
    }
}
exports.UmbralDecryptReEncryptedMsg = UmbralDecryptReEncryptedMsg;
class UmbralVerifyCapsuleFragMsg extends router_1.Message {
    constructor(capsuleFragment, capsule, verifyingPublicKey, senderPublicKey, receiverPublicKey) {
        super();
        this.capsuleFragment = capsuleFragment;
        this.capsule = capsule;
        this.verifyingPublicKey = verifyingPublicKey;
        this.senderPublicKey = senderPublicKey;
        this.receiverPublicKey = receiverPublicKey;
    }
    static type() {
        return "verify-capsule-fragment";
    }
    route() {
        return exports.ROUTE;
    }
    type() {
        return UmbralDecryptReEncryptedMsg.type();
    }
    approveExternal() {
        return true;
    }
    validateBasic() {
        if (!this.capsuleFragment) {
            throw new Error("capsuleFragment not set");
        }
        if (!this.capsule) {
            throw new Error("capsule not set");
        }
        if (!this.verifyingPublicKey) {
            throw new Error("verifyingPublicKey not set");
        }
        if (!this.senderPublicKey) {
            throw new Error("senderPublicKey not set");
        }
        if (!this.receiverPublicKey) {
            throw new Error("receiverPublicKey not set");
        }
    }
}
exports.UmbralVerifyCapsuleFragMsg = UmbralVerifyCapsuleFragMsg;
//# sourceMappingURL=messages.js.map