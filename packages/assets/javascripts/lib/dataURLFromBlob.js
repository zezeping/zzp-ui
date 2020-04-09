export default function blobToDataURL (blob, callback) {
  let file = new FileReader()
  file.onload = function (e) {
    callback(e.target.result)
  }
  file.readAsDataURL(blob)
}
