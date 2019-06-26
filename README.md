# require.main example

A test repo to showcase how require.main can be used to find absolute paths.

## How to run

```bash
git clone git@github.com:MinimumViablePerson/require-main.git

cd require-main

node index.js
```

The following will be printed:

```
hey there!
and bye!
```

## How it works

If you look at [`/nested1/nested2/nested3/nested.js`](/nested1/nested2/nested3/nested.js) you will see the following line:

```
const greet = require.main.require('./stuff')
```

What `require.main.require(path)` does is check for a file within the main module loaded, in this case `index.js`, which allows us to import `stuff.js` with:
```js
require.main.require('./stuff') // relative to the main module
```
instead of:
```js
require('../../../stuff') // relative to the current file
```

Enjoy!
