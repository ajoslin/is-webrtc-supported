# is-webrtc-supported

> Detect webrtc support in current environment

Code originally taken from https://github.com/appearin/appearin-sdk, License MIT.

Actually detects support, not userAgent strings.


## Install

```
$ npm install --save is-webrtc-supported
```


## Usage

```js
var isWebrtcSupported = require('is-webrtc-supported')

isWebrtcSupported() // => true/false
```

## API

#### `isWebrtcSupported([stunServer])` -> `boolean`

##### stunServer

*Optional*
Type: `string`

Url of a stun server to check. Defaults to `stun:stun.l.google.com:19302`.

You'll almost never need this parameter.

## License

MIT © [Appearin](https://github.com/appearin/appearin-sdk/)
