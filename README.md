# qramana

 `qramana` is a TypeScript library for quantum calculation.

## Quick start

### Install

To install current release via npm.

```bash
$ npm install @qramana/qramana
```

### Try your first qubit

Write your first qubit definition to typescript code in `qubit.ts`,

```ts
import * as q from '@qramana/qramana';

const qubit = new q.Qubit({value: "|0>"});
console.log(qubit.measure()); 
```

and run it.

```
$ tsc qubit.ts
$ node qubit.js
0
```

If you need more details, see [tutorial](docs/tutorial.md).

## Build qramana

If you want to build qramana to modify library code, clone and install dependencies.

```
$ git clone https://github.com/qramana/qramana.git
$ cd qramana
$ npm install
$ npm run build
```

Then you can run unit test.

```
$ npm run test
```

## Acknowledgement

This software is supported by IPA Mitou Target Project 2018 (Category: quantum logic gate).
See the abstract [here](https://www.ipa.go.jp/jinzai/target/2018/koubo2_index.html) (written in Japanese).
