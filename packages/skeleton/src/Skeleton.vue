<template>
  <div class="zzp-skeleton" v-skeleton="{ disabled, color }" :key="disabled">
    <slot></slot>
  </div>
</template>

<script>
import skeleton from '../../directives/skeleton'
export default {
  name: 'ZzpSkeleton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#f2f3f5'
    }
  },
  directives: {
    skeleton
  }
}
</script>

<style lang="scss">
  .zzp-skeleton {
    /*!*deep*! .skeleton {*/
    /*  color: transparent;*/
    /*}*/
    /* deep */ .skeleton-animation {
      @keyframes skeleton-animation {
        0%, 100% {
          opacity: 1
        }
        50% {
          opacity: 0.7
        }
      }
      animation: skeleton-animation 3s ease infinite;
    }
  }
</style>
