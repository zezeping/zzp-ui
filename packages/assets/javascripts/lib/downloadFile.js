import dataURLToBlob from './dataURLToBlob'

// url -> blob, remoteFileUrl
export function downloadFile (url, name = 'file') {
  let a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('download', name)
  a.setAttribute('target', '_blank')
  let clickEvent = document.createEvent('MouseEvents')
  clickEvent.initEvent('click', true, true)
  a.dispatchEvent(clickEvent)
}

export function downloadFileFromBase64 (base64, name) {
  let myBlob = dataURLToBlob(base64)
  let myUrl = URL.createObjectURL(myBlob)
  downloadFile(myUrl, name)
}

export default {
  dataURLToBlob,
  downloadFile,
  downloadFileFromBase64
}
