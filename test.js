'use strict'

var test = require('tape')
var isWebRtcSupported = require('./')

test(function (t) {
  // All we can really test is that it doesn't throw
  isWebRtcSupported()
  t.end()
})
