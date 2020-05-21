function handle (el, binding) {
  let { disabled, color } = binding.value
  if (disabled) {
    return
  }
  let children = el.querySelectorAll('*[data-skeleton]')
  for (let dom of children) {
    // <img>
    if (/IMG/i.test(dom.nodeName)) {
      dom.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
      dom.style['backgroundColor'] = dom.dataset['skeleton'] || color
    } else {
      dom.style['backgroundColor'] = dom.dataset['skeleton'] || color
      dom.style['color'] = 'transparent'
    }
    dom.classList.add('skeleton-animation')
  }
}

// bind 和 update
export default {
  inserted (el, binding) {
    handle(el, binding)
  },
  update (el, binding) {
    handle(el, binding)
  }
}
