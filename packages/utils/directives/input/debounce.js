import debounce from 'lodash/debounce'
export default function (el, binding) {
  // change debounce only if interval has changed
  let inputDom = el
  if (!/^(INPUT|TEXTAREA)$/i.test(el.tagName)) {
    inputDom = el.querySelector('input')
  }
  if ((!binding.value || binding.value !== binding.oldValue) && !inputDom.oninput) {
    inputDom.oninput = debounce((evt) => {
      inputDom.dispatchEvent(new Event('change'))
    }, parseInt(binding.value) || 600)
  }
}
