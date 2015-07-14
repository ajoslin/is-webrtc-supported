# is-webrtc-supported

> Detect webrtc support in current environment

Code originally taken from https://github.com/appearin/appearin-sdk, License MIT.

Call a function that returns true if the current environment supports getUserMedia, VP8, video elements, RTCPeerConnections, and ICE candidates.

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

MIT © [Telenor Digital AS](https://github.com/appearin/appearin-sdk/)
