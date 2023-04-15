# Multihash Maker
Multihash Maker is a simple way to create multihashes with no external dependencies.

Read more about multihash and the multihash specification here [https://multiformats.io/multihash/](https://multiformats.io/multihash/)
## Install
```
npm install multihash-maker
```
## Usage
```typescript
import multiHashMaker from 'multihash-maker';

multiHashMaker('Hello World!', 'sha256')
// Returns '22041dd7b6443542e75701aa98a0c235951a28a0d851b11564d20022ab11d2589a8'
```
```javascript
const multiHashMaker = require('multihash-maker')

multiHashMaker.createMultiHash('Hello World!', 'sha256')
// Returns '22041dd7b6443542e75701aa98a0c235951a28a0d851b11564d20022ab11d2589a8'
```

## Tests
```
npm test
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2023 Adam Shea
