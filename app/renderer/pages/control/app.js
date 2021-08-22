const peer = require('./peer-control')
let video = document.getElementById('screen-video')

peer.on('add-stream', (stream) => {
  play(stream)
})

function play(stream) {
  video.srcObject = stream
  video.onloadedmetadata = () => {
    video.play()
  }
}



window.onkeydown = function (e) {
  // data {keyCode, meta, alt, ctrl, shift}
  let data = {
    keyCode: e.keyCode,
    shift: e.shiftKey,
    meta: e.metaKey,
    control: e.ctrlKey,
    alt: e.altKey
  }
  peer.emit('robot', 'key', data)
}

window.onmouseup = function (e) {
  // data {clientX, clientY, screen: {width, height}, video: {width, height}}
  let data = {}
  data.clientX = e.clientX
  data.clientY = e.clientY
  data.video = {
    width: video.getBoundingClientRect().width,
    height: video.getBoundingClientRect().height
  }
  peer.emit('robot', 'mouse', data)
}
