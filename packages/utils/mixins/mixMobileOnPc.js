export default {
  methods: {
    isPC () {
      let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      let isPc = true
      for (let i of Agents) {
        if (navigator.userAgent.indexOf(i) > 0) {
          isPc = false
          break
        }
      }
      return isPc
    }
  },
  mounted () {
    if (this.isPC()) {
      let html = document.querySelector('html')
      html.style.fontSize = '37.5px'
      html.style.width = '375px'
      html.style.height = '667px'
      html.style.margin = '15px auto'
      html.childNodes[0].style.transform = 'translate(0, 10%)'
    }
  }
}
