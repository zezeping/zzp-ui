export default {
  data () {
    return {
      _mixApiFunc: null,
      _mixApiParams: {},
      mixApiExtraParams: {},
      mixScrollData: {
        fetching: false,
        items: [],
        pagination: null,
        // 是否存在空页面
        existBlankView: true
      }
    }
  },
  methods: {
    mixFetchScrollData (apiFunc, params = {}, appendMore = false) {
      this._mixApiFunc = apiFunc
      this._mixApiParams = Object.assign({ page: 1, pageSize: 10 }, params || {}, this.mixApiExtraParams)
      this.mixScrollData.fetching = true
      // if (!appendMore) {
      //   this.mixScrollData.items = []
      // }
      return apiFunc(this._mixApiParams).then(res => {
        this.mixScrollData.fetching = false
        if (appendMore) {
          this.mixScrollData.items = this.mixScrollData.items.concat(res.data.items)
        } else {
          this.mixScrollData.items = res.data.items
        }
        this.mixScrollData.pagination = res.data.pagination
        let hasMore = this.mixScrollData.pagination.total > this.mixScrollData.items.length
        this.$refs['zScroll'] && this.$refs['zScroll'].stopLoading(hasMore)
        this.$refs['zScroll'] && this.$refs['zScroll'].changeBlankViewStatus(this.mixScrollData.existBlankView && !this.mixScrollData.items.length)
        return res
      }).catch(err => {
        console.log(err)
        this.mixScrollData.fetching = false
        let hasMore = this.mixScrollData.pagination.total > this.mixScrollData.items.length
        this.$refs['bScrollRef'] && this.$refs['bScrollRef'].stopLoading(hasMore)
      })
    },
    mixLoadMoreScrollData () {
      this._mixApiFunc && this.mixFetchScrollData(this._mixApiFunc, Object.assign(this._mixApiParams, {
        page: this.mixScrollData.pagination.page + 1,
        pageSize: this.mixScrollData.pagination.pageSize
      }), true)
    }
  }
}
