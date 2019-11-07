<template>
  <usage-with-demo :usage="usage">
    <!--<input type="text" v-model="input" @change="changeInputValue" v-debounce>-->
    <zzp-row>
      <zzp-col span="12">
        without lazy
        <input type="text" v-model="inputValue" @change="changeInputValue" v-debounce="600">
      </zzp-col>
      <zzp-col span="12">
        with lazy
        <input type="text" v-model.lazy="inputValue" @change="changeInputValue" v-debounce="600">
      </zzp-col>
      <zzp-col span="24">
        <div>CurrentValue：{{inputValue}}</div>
        <div>DebounceValue: {{debounceValue}}</div>
      </zzp-col>
    </zzp-row>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage,
      inputValue: '',
      debounceValue: ''
    }
  },
  methods: {
    changeInputValue (e) {
      this.debounceValue = this.inputValue
    }
  }
}
</script>
