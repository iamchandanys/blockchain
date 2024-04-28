import * as elliptic from "elliptic";

export class KeyGenerator {

    key: elliptic.ec.KeyPair;
    publicKey: string;
    privateKey: string;
    keyFromPrivate: elliptic.ec.KeyPair;

    constructor() {

        const ec = new elliptic.ec('secp256k1');
        this.key = ec.genKeyPair();
        this.publicKey = this.key.getPublic('hex');
        this.privateKey = this.key.getPrivate('hex');
        this.keyFromPrivate = ec.keyFromPrivate(this.privateKey);

    }
}