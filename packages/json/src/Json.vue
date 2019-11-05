<template>
  <pre class="zzp-json" v-html="cJson"></pre>
</template>

<script>
export default {
  name: 'ZzpJson',
  props: {
    json: {
      required: true
    },
    space: {
      type: Number,
      default: 2
    },
    colorable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    cJson () {
      let jsonString = JSON.stringify(this.json, function replacer (key, value) {
        return value
      }, this.space)
      if (this.colorable) {
        return this.syntaxHighlight(jsonString)
      }
      return jsonString
    }
  },
  methods: {
    syntaxHighlight (jsonString) {
      let json = jsonString.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\\-]?\d+)?)/g, function (match) {
        var cls = 'pre-number'
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'pre-key'
          } else {
            cls = 'pre-string'
          }
        } else if (/true|false/.test(match)) {
          cls = 'pre-boolean'
        } else if (/null/.test(match)) {
          cls = 'pre-null'
        }
        return '<span class="' + cls + '">' + match + '</span>'
      })
    }
  }
}
</script>

<style lang="scss">
  .zzp-json {
    display: inline-block;
    margin: 5px;
    padding: 5px;
    line-height: 1.2;
    border: 1px solid #f2f2f2;

    .pre-string { color: green; }
    .pre-number { color: darkorange; }
    .pre-boolean { color: blue; }
    .pre-null { color: magenta; }
    .pre-key { color: red; }
  }
</style>
