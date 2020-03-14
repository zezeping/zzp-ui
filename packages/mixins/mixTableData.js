export default {
  data () {
    return {
      mixAjax: null,
      mixQuery: null,
      mixData: {
        fetching: false,
        items: [],
        pagination: {
          page: 1,
          pageSize: 10,
          total: 0
        }
      }
    }
  },
  methods: {
    async mixFetchData (promise, query, append = false) {
      if (!append) {
        this.mixData.pagination.page = 1
      }
      let res = await this._mixFetchPageData(promise, query)
      let pageItems = res.data.items || res.data.data
      if (append) {
        this.mixData.items = this.mixData.items.concat(pageItems)
      } else {
        this.mixData.items = pageItems
      }
      Object.assign(this.mixData.pagination, res.data.pagination || { page: res.data.page, pageSize: res.data.pageSize, total: res.data.total })
      if (this.$refs['zScroll']) {
        let hasMore = this.mixData.pagination.total > this.mixData.items.length
        this.$refs['zScroll'].stopLoading(hasMore)
      }
    },
    async mixLoadMore () {
      this.mixAjax && await this.mixFetchData(this.mixAjax, Object.assign(this.mixQuery, { page: this.mixData.pagination.page + 1, pageSize: this.mixData.pagination.pageSize }), true)
    },
    async _mixFetchPageData (promise, query) {
      this.mixAjax = promise || this.mixAjax
      this.mixQuery = Object.assign({}, this.mixQuery, { page: this.mixData.pagination.page, pageSize: this.mixData.pagination.pageSize }, query)
      this.mixData.fetching = true
      // eslint-disable-next-line no-return-await
      return await this.mixAjax(this.mixQuery).then(res => {
        return res
      }).finally(() => {
        this.mixData.fetching = false
      })
    }
  }
}
