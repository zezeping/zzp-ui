export default {
  props: {
    mixOnConfirmFunc: [Function]
  },
  data () {
    return {
      mixShowDialog: true
    }
  },
  methods: {
    mixOnCancel () {
      this.mixShowDialog = false
      this.$ext.unmount(this)
    },
    mixOnConfirm () {
      this.mixOnConfirmFunc && this.mixOnConfirmFunc(...arguments)
      this.mixOnCancel()
    }
  }
}
