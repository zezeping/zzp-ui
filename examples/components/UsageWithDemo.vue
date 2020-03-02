<template>
  <zzp-row flex align="top" class="usage-with-demo">
    <zzp-col class="usage" :span="24" style="overflow-x: hidden">
      <div class="markdown hljs" v-html="marked(usage)"></div>
    </zzp-col>
    <div class="demo" v-if="allSlotKeys.indexOf('default') !== -1">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </zzp-row>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/default.css'
import '../assets/stylesheets/scss/markdown.scss'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return highlight.highlightAuto(code).value
  }
})
export default {
  props: {
    usage: {
      type: String,
      required: true
    }
  },
  computed: {
    allSlotKeys () {
      return Object.keys(this.$slots).concat(Object.keys(this.$scopedSlots)).filter((value, index, self) => { return self.indexOf(value) === index })
    }
  },
  data () {
    return {
      marked
    }
  }
}
</script>

<style lang="scss" scoped>
  .usage-with-demo {
    height: 100%;
    overflow: hidden;
    .usage {
      margin: 0 20px 50px;
      height: 100%;
    }
    .demo {
      .container {
        transform: translate(0, 0);
        font-size: 13px;
        overflow: auto;
        margin: 20px 20px 20px 0;
        width: 320px;
        height: 450px;
        background: #f7f7f7;
        user-select: none;

        /deep/ .page {
          min-height: 100%;
        }
      }
    }
  }
</style>
