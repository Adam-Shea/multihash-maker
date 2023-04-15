# Multihash Maker
Multihash Maker is a simple way to create multihashes with no external dependencies.

Read more about multihash and the multihash specification here [https://multiformats.io/multihash/](https://multiformats.io/multihash/)
## Install
```
npm install multihash-maker
```
## Usage
```typescript
import { createMultiHash, parseMultiHash } from '../lib/index';

createMultiHash('Hello World!', 'sha256')
// Returns '22041dd7b6443542e75701aa98a0c235951a28a0d851b11564d20022ab11d2589a8'

parseMultiHash('11148a173fd3e32c0fa78b90fe42d305f202244e2739')
// Returns {
      length: 20,
      hashFunction: "sha1",
      hash: "8a173fd3e32c0fa78b90fe42d305f202244e2739"
    }
```

## Tests
```
npm test
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2023 Adam Shea
