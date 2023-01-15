import * as crypto from "crypto";

type hashFunction = 'sha1' | 'sha256' | 'sha512' | 'sha3-512' | 'sha3-384' | 'sha3-256' | 'shake128' | 'sha3-224' | 'shake256' | 'md4' | 'md5' | 'sha224' | 'sha512-224' | 'sha512-256' | 'sm3' | 'blake2b512' | 'blake2s256';

const hashCodes = new Map();
hashCodes.set('sha1', '11')
    .set('sha256', '12')
    .set('sha512', '13')
    .set('sha3-512', '14')
    .set('sha3-384', '15')
    .set('sha3-256', '16')
    .set('shake128', '18')
    .set('sha3-224', '17')
    .set('shake256', '19')
    .set('sha384', '20')
    .set('md5', 'd5')
    .set('sha224', '1013')
    .set('sha512-224', '1014')
    .set('sha512-256', '1015')
    .set('sm3', '534d')
    .set('blake2b512', 'b240')
    .set('blake2s256', 'b260')

const createMultiHash = (inputString: string, hashFunction: hashFunction): string => {
    if (typeof inputString != 'string') {
        throw new TypeError('"inputString" must be string')
    }
    if (!hashCodes.has(hashFunction)) {
        throw new TypeError('"hashFunction" must be hash type')
    }
    const hash = crypto.createHash(hashFunction);
    const data = hash.update(inputString);
    const hashHex = data.digest('hex');
    const buffer = Buffer.from(hashHex, 'hex');
    const bufferArray = new Uint8Array(buffer);
    const multiHash: string = (hashCodes.get(hashFunction) + bufferArray.length.toString(16) + hashHex);
    return multiHash
}

export {
    createMultiHash as default,
    createMultiHash
}