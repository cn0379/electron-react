const EventEmitter = require('events')
const peer = new EventEmitter()

const {
  desktopCapturer,
  ipcRenderer
} = require('electron') // 引入桌面模块


// peer.on('robot', (type, data) => {
//   if (type === 'mouse') {
//     data.screen = {
//       width: window.screen.width,
//       height: window.screen.height
//     }
//   }
//   ipcRenderer.send('robot', type, data)
// })

const pc = new window.RTCPeerConnection({})
async function createOffer() {
  const offer = await pc.createOffer({
    offerToReceiveAudio: false,
    offerToReceiveVideo: true
  })
  await pc.setLocalDescription(offer)
  console.log(6666666666666666666);
  console.log('pc offer', JSON.stringify(offer));
  return pc.localDescription
}

createOffer()

async function setRemote(answer) {
  await pc.setRemoteDescription(answer)
}

window.setRemote = setRemote

pc.onaddstream = (e) => {
  console.log('eadd-stream', e.stream);
  peer.emit('add-stream', e.stream)
}

module.exports = peer
