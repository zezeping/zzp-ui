export default function (el, binding) {
  // change src
  if (binding.value && binding.value !== binding.oldValue) {
    let img = new Image()
    img.src = binding.value
    img.onload = function () {
      el.src = binding.value
    }
  }
}
