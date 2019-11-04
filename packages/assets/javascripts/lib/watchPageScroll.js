/* eslint-disable */
const watchPageScroll = (function () {
  const fn = function (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  let isLock = false
  return {
    lock: (el) => {
      if (isLock) return
      isLock = true;
      (el || document).addEventListener('touchmove', fn)
    },
    unlock: (el) => {
      isLock = false;
      (el || document).removeEventListener('touchmove', fn)
    }
  }
})()
export default watchPageScroll
