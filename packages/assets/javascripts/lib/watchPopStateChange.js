import watchPageScroll from './watchPageScroll'
export default function watchPopStateChange (comp, lockDom = false, closeCallback = null) {
  closeCallback = closeCallback || function () {
    comp.close && comp.close()
  }

  if (lockDom) {
    watchPageScroll.lock(comp.$el)
  }
  function hashChange () {
    if (lockDom) {
      watchPageScroll.unlock(comp.$el)
    }
    comp.$el.classList.add('zzp--leave')
    // 关闭
    closeCallback()
    setTimeout(() => {
      // window.removeEventListener('hashchange', hashChange)
      window.removeEventListener('popstate', hashChange)
    }, 200)
  }
  // window.addEventListener('hashchange', hashChange)
  window.addEventListener('popstate', hashChange)
}
