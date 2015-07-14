// Code taken from appearin-sdk
// Copyright Appearin, license MIC

var window = require('global/window')
var document = require('global/document')

module.exports = checkSupport

function checkSupport (/* optional */ stunServer) {
  try {
    var supportsVideoElement = !!document.createElement('video').canPlayType
    var supportsVP8 = document.createElement('video').canPlayType('video/webm codecs="vp8", vorbis') === 'probably'
    var supportsGetUserMedia = !!(window.navigator.mozGetUserMedia ||
                                  window.navigator.webkitGetUserMedia ||
                                  window.navigator.msGetUserMedia ||
                                  window.navigator.getUserMedia)
    var supportsRTCPeerConnection = !!(window.RTCPeerConnection ||
                                       window.mozRTCPeerConnection ||
                                       window.webkitRTCPeerConnection)
    var supportsIceCandidates = checkSupportForIce(stunServer)

    return supportsVideoElement &&
      supportsVP8 &&
      supportsGetUserMedia &&
      supportsRTCPeerConnection &&
      supportsIceCandidates
  } catch (e) {
    return false
  }
}

function checkSupportForIce (server) {
  var stunServer = server || 'stun:stun.l.google.com:19302'
  var config = {'iceServers': [{'url': stunServer}]}
  try {
    var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection
    var pc = new RTCPeerConnection(config)
    return pc && !!pc.iceConnectionState // pc.iceState is deprecated, no longer supported
  } catch (e) {
    return false
  }
}
