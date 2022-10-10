<template>
  <div>
    {{ this.global.xpert }}
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    data: () => ({}),
    components: {},
    computed: {
      ...mapState(['global']),
    },
    created() {},
    mounted() {},

    methods: {
      scrollToTop() {
        requestAnimationFrame(() => {
          this.$vuetify.goTo(0)
        })
      },
    },
  }
</script>


<style>
  .wrap-text {
    -webkit-line-clamp: unset !important;
  }
</style>