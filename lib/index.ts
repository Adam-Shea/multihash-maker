import * as crypto from 'crypto'

type hashFunction = 'sha1' | 'sha256' | 'sha512' | 'sha3-512' | 'sha3-384' | 'sha3-256' | 'shake128' | 'sha3-224' | 'shake256' | 'md4' | 'md5' | 'sha224' | 'sha512-224' | 'sha512-256' | 'sm3' | 'blake2b512' | 'blake2s256'

const hashCodes = new Map()
hashCodes.set('sha1', 0x11)
  .set('sha256', 0x12)
  .set('sha512', 0x13)
  .set('sha3-512', 0x14)
  .set('sha3-384', 0x15)
  .set('sha3-256', 0x16)
  .set('shake128', 0x18)
  .set('sha3-224', 0x17)
  .set('shake256', 0x19)
  .set('sha384', 0x20)
  .set('md5', 0xd5)
  .set('sha224', 0x1013)
  .set('sha512-224', 0x1014)
  .set('sha512-256', 0x1015)
  .set('sm3', 0x534d)
  .set('blake2b512', 0xb240)
  .set('blake2s256', 0xb260)

const createMultiHash = (inputString: string, hashFunction: hashFunction): string => {
  if (typeof inputString !== 'string') {
    throw new TypeError('"inputString" must be string')
  }
  if (!hashCodes.has(hashFunction)) {
    throw new TypeError('"hashFunction" must be hash type')
  }
  const hash = crypto.createHash(hashFunction)
  const data = hash.update(inputString)
  const multiHash: string = (String(hashCodes.get(hashFunction).toString(16)) + String(data.copy().digest().length.toString(16)) + String(data.copy().digest('hex').toString()))
  return multiHash
}

const parseMultiHash = (multiHash: string): { hashFunction: string, length: number, hash: string } => {
  if (typeof multiHash !== 'string') {
    throw new TypeError('"multiHash" must be a string')
  }
  const hashFunction = Array.from(hashCodes).find((hashCode) => hashCode[1].toString(16) === multiHash.substring(0, hashCode[1].toString(16).length)) ?? [null, null]
  if (hashCodes.get(hashFunction[0]) === undefined) {
    throw new TypeError('"multiHash" does not included a supported hash function')
  }
  const hashLength = multiHash.slice(parseInt(hashFunction[1].toString(16).length), parseInt(hashFunction[1].toString(16).length) + 2)
  const originalHash = multiHash.slice(parseInt(hashFunction[1].toString(16).length) + 2)
  return {
    hashFunction: hashFunction[0],
    length: parseInt(hashLength, 16),
    hash: originalHash
  }
}

console.log(parseMultiHash("11148a173fd3e32c0fa78b90fe42d305f202244e2739"))

export {
  createMultiHash,
  parseMultiHash
}
