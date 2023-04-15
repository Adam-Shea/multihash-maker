import { createMultiHash, parseMultiHash } from '../lib/index';

test('blake2b512', () => {
  expect(createMultiHash('Merkle–Damgård', 'blake2b512')).toBe('b24040d91ae0cb0e48022053ab0f8f0dc78d28593d0f1c13ae39c9b169c136a779f21a0496337b6f776a73c1742805c1cc15e792ddb3c92ee1fe300389456ef3dc97e2');
});
test('blake2s256', () => {
  expect(createMultiHash('Merkle–Damgård', 'blake2s256')).toBe('b26020a96953281f3fd944a3206219fad61a40b992611b7580f1fa091935db3f7ca13d');
});
test('sha512', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha512')).toBe('134052eb4dd19f1ec522859e12d89706156570f8fbab1824870bc6f8c7d235eef5f4c2cbbafd365f96fb12b1d98a0334870c2ce90355da25e6a1108a6e17c4aaebb0');
});
test('sha1', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha1')).toBe('11148a173fd3e32c0fa78b90fe42d305f202244e2739');
});
test('sha256', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha256')).toBe('122041dd7b6443542e75701aa98a0c235951a28a0d851b11564d20022ab11d2589a8');
});
test('sha512', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha512')).toBe('134052eb4dd19f1ec522859e12d89706156570f8fbab1824870bc6f8c7d235eef5f4c2cbbafd365f96fb12b1d98a0334870c2ce90355da25e6a1108a6e17c4aaebb0');
});
test('sha224', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha224')).toBe('10131c070cd0b2fd51aa6351781693fe6696d382c05fed638f59c04daa457a');
});
test('sha512-224', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha512-224')).toBe('10141c63a5113d708524b93c204a51c21dbb259e28fca9cb3eb73be0ac7571');
});
test('sha512-256', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha512-256')).toBe('101520006fff7ca0bd5b4a5b01706525ca739e63bf9dbdced6da91911d71b42667ba7f');
});
test('sha3-512', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha3-512')).toBe('14401be89b32d7b646d7bc4bca5994fdb57f70a808a7463d672cabe21841c6bca150bda6a3a2c3bf8813663fd46150a9f744cdbcd9fb7a84897aafc30e4ab4685d51');
});
test('sha3-384', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha3-384')).toBe('1530dc90850536360373cbaf12bb559ed957440e4c9cb8f0e722cbe36c13c3882ddf79a16395c58157bc755f6c63c4808e33');
});
test('sha3-256', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha3-256')).toBe('1620d51edb27e9acfb91835282adac200b6fd8b01dca5023d2b0c1dade86dbe911db');
});
test('shake128', () => {
  expect(createMultiHash('Merkle–Damgård', 'shake128')).toBe('18105374f3c5ea5b16fcfc34b7abe8a6d3af');
});
test('shake256', () => {
  expect(createMultiHash('Merkle–Damgård', 'shake256')).toBe('19206791d7eee1f45ae801e8c4b26b8ab538b1cf28d7369c590c2f8b3bf2c8e2d850');
});
test('sha3-224', () => {
  expect(createMultiHash('Merkle–Damgård', 'sha3-224')).toBe('171ca62c6428adf6d0bdcaf42b206bcb653fcfa29aca29377f719c7d6530');
});
test('md5', () => {
  expect(createMultiHash('Merkle–Damgård', 'md5')).toBe('d510d193ffc66bd2fd67ac50bd34cff310be');
});
test('sm3', () => {
  expect(createMultiHash('Merkle–Damgård', 'sm3')).toBe('534d2019445e02e1c2c9ba10d50a1b4d3785405faa4fa8919c231282bb58af834695c1');
});

test('Type Error: Input', () => {
  expect(() => { createMultiHash(123, 'sm3') }).toThrow(TypeError('"inputString" must be string'));
});

test('Type Error: Input', () => {
  expect(() => { createMultiHash('Merkle–Damgård', 'invalid hash') }).toThrow(TypeError('"hashFunction" must be hash type'));
});




test('blake2b512', () => {
  expect(parseMultiHash('b24040d91ae0cb0e48022053ab0f8f0dc78d28593d0f1c13ae39c9b169c136a779f21a0496337b6f776a73c1742805c1cc15e792ddb3c92ee1fe300389456ef3dc97e2')).toMatchObject(
    {
      length: 64,
      hashFunction: "blake2b512",
      hash: "d91ae0cb0e48022053ab0f8f0dc78d28593d0f1c13ae39c9b169c136a779f21a0496337b6f776a73c1742805c1cc15e792ddb3c92ee1fe300389456ef3dc97e2"
    }
  );
});
test('blake2s256', () => {
  expect(parseMultiHash('b26020a96953281f3fd944a3206219fad61a40b992611b7580f1fa091935db3f7ca13d')).toMatchObject(
    {
      length: 32,
      hashFunction: "blake2s256",
      hash: "a96953281f3fd944a3206219fad61a40b992611b7580f1fa091935db3f7ca13d"
    }
  );
});
test('sha512', () => {
  expect(parseMultiHash('134052eb4dd19f1ec522859e12d89706156570f8fbab1824870bc6f8c7d235eef5f4c2cbbafd365f96fb12b1d98a0334870c2ce90355da25e6a1108a6e17c4aaebb0')).toMatchObject(
    {
      length: 64,
      hashFunction: "sha512",
      hash: "52eb4dd19f1ec522859e12d89706156570f8fbab1824870bc6f8c7d235eef5f4c2cbbafd365f96fb12b1d98a0334870c2ce90355da25e6a1108a6e17c4aaebb0"
    }
  );
});
test('sha1', () => {
  expect(parseMultiHash('11148a173fd3e32c0fa78b90fe42d305f202244e2739')).toMatchObject(
    {
      length: 20,
      hashFunction: "sha1",
      hash: "8a173fd3e32c0fa78b90fe42d305f202244e2739"
    }
  );
});
test('sha256', () => {
  expect(parseMultiHash('122041dd7b6443542e75701aa98a0c235951a28a0d851b11564d20022ab11d2589a8')).toMatchObject(
    {
      length: 32,
      hashFunction: "sha256",
      hash: "41dd7b6443542e75701aa98a0c235951a28a0d851b11564d20022ab11d2589a8"
    }
  );
});
test('sha512', () => {
  expect(parseMultiHash('134052eb4dd19f1ec522859e12d89706156570f8fbab1824870bc6f8c7d235eef5f4c2cbbafd365f96fb12b1d98a0334870c2ce90355da25e6a1108a6e17c4aaebb0')).toMatchObject(
    {
      length: 64,
      hashFunction: "sha512",
      hash: "52eb4dd19f1ec522859e12d89706156570f8fbab1824870bc6f8c7d235eef5f4c2cbbafd365f96fb12b1d98a0334870c2ce90355da25e6a1108a6e17c4aaebb0"
    }
  );
});
test('sha224', () => {

  expect(parseMultiHash('10131c070cd0b2fd51aa6351781693fe6696d382c05fed638f59c04daa457a')).toMatchObject(
    {
      length: 28,
      hashFunction: "sha224",
      hash: "070cd0b2fd51aa6351781693fe6696d382c05fed638f59c04daa457a"
    }
  );
});
test('sha512-224', () => {
  expect(parseMultiHash('10141c63a5113d708524b93c204a51c21dbb259e28fca9cb3eb73be0ac7571')).toMatchObject(
    {
      length: 28,
      hashFunction: "sha512-224",
      hash: "63a5113d708524b93c204a51c21dbb259e28fca9cb3eb73be0ac7571"
    }
  );
});
test('sha512-256', () => {
  expect(parseMultiHash('101520006fff7ca0bd5b4a5b01706525ca739e63bf9dbdced6da91911d71b42667ba7f')).toMatchObject(
    {
      length: 32,
      hashFunction: "sha512-256",
      hash: "006fff7ca0bd5b4a5b01706525ca739e63bf9dbdced6da91911d71b42667ba7f"
    }
  );
});
test('sha3-512', () => {
  expect(parseMultiHash('14401be89b32d7b646d7bc4bca5994fdb57f70a808a7463d672cabe21841c6bca150bda6a3a2c3bf8813663fd46150a9f744cdbcd9fb7a84897aafc30e4ab4685d51')).toMatchObject(
    {
      length: 64,
      hashFunction: "sha3-512",
      hash: "1be89b32d7b646d7bc4bca5994fdb57f70a808a7463d672cabe21841c6bca150bda6a3a2c3bf8813663fd46150a9f744cdbcd9fb7a84897aafc30e4ab4685d51"
    }
  );
});
test('sha3-384', () => {
  expect(parseMultiHash('1530dc90850536360373cbaf12bb559ed957440e4c9cb8f0e722cbe36c13c3882ddf79a16395c58157bc755f6c63c4808e33')).toMatchObject(
    {
      length: 48,
      hashFunction: "sha3-384",
      hash: "dc90850536360373cbaf12bb559ed957440e4c9cb8f0e722cbe36c13c3882ddf79a16395c58157bc755f6c63c4808e33"
    }
  );
});
test('sha3-256', () => {
  expect(parseMultiHash('1620d51edb27e9acfb91835282adac200b6fd8b01dca5023d2b0c1dade86dbe911db')).toMatchObject(
    {
      length: 32,
      hashFunction: "sha3-256",
      hash: "d51edb27e9acfb91835282adac200b6fd8b01dca5023d2b0c1dade86dbe911db"
    }
  );
});
test('shake128', () => {
  expect(parseMultiHash('18105374f3c5ea5b16fcfc34b7abe8a6d3af')).toMatchObject(
    {
      length: 16,
      hashFunction: "shake128",
      hash: "5374f3c5ea5b16fcfc34b7abe8a6d3af"
    }
  );
});
test('shake256', () => {
  expect(parseMultiHash('19206791d7eee1f45ae801e8c4b26b8ab538b1cf28d7369c590c2f8b3bf2c8e2d850')).toMatchObject(
    {
      length: 32,
      hashFunction: "shake256",
      hash: "6791d7eee1f45ae801e8c4b26b8ab538b1cf28d7369c590c2f8b3bf2c8e2d850"
    }
  );
});
test('sha3-224', () => {
  expect(parseMultiHash('171ca62c6428adf6d0bdcaf42b206bcb653fcfa29aca29377f719c7d6530')).toMatchObject(
    {
      length: 28,
      hashFunction: "sha3-224",
      hash: "a62c6428adf6d0bdcaf42b206bcb653fcfa29aca29377f719c7d6530"
    }
  );
});
test('md5', () => {
  expect(parseMultiHash('d510d193ffc66bd2fd67ac50bd34cff310be')).toMatchObject(
    {
      length: 16,
      hashFunction: "md5",
      hash: "d193ffc66bd2fd67ac50bd34cff310be"
    }
  );
});
test('sm3', () => {
  expect(parseMultiHash('534d2019445e02e1c2c9ba10d50a1b4d3785405faa4fa8919c231282bb58af834695c1')).toMatchObject(
    {
      length: 32,
      hashFunction: "sm3",
      hash: "19445e02e1c2c9ba10d50a1b4d3785405faa4fa8919c231282bb58af834695c1"
    }
  );
});

test('Type Error: Input', () => {
  expect(() => { parseMultiHash('34d2019445e02e1c2c9ba10d50a1b4d3785405faa4fa8919c231282bb58af834695c1') }).toThrow(TypeError('"multiHash" does not included a supported hash function'));
});

