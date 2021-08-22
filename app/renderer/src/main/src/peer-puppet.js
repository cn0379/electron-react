const {
  desktopCapturer
} = window.require('electron')

const pc = new window.RTCPeerConnection()
async function createAnswer(offer) {
  let stream = await getScreenStream()
  pc.addStream(stream)
  await pc.setRemoteDescription(offer)
  await pc.setLocalDescription(await pc.createAnswer())
  console.log('create answer \n', JSON.stringify(pc.localDescription))
  return pc.localDescription
}

window.createAnswer = createAnswer

async function getScreenStream() {
  const sources = await desktopCapturer.getSources({
    types: ['screen']
  })
  return new Promise((reslove, reject) => {
    navigator.webkitGetUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sources[0].id,
          maxWidth: window.screen.width,
          maxHeight: window.screen.height
        }
      }
    }, (stream) => {
      reslove(stream)
    }, err => {
      reject(err)
    })
  })
}
