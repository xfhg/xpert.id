<template>
  <v-row no-gutters>
    <v-col cols="12" class="flex-grow-0 flex-shrink-0 mt-10">
      <div class="custom-shape-divider-bottom-1593072170">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            class="shape-fill"
            :style="style"
          />
        </svg>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['dcolor'],
  computed: {
    style() {
      return 'fill: #' + this.dcolor
    },
  },
}
</script>

<style>
.custom-shape-divider-bottom-1593072170 {
  position: absolute;
  bottom: 500px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1593072170 svg {
  position: relative;
  display: block;
  width: calc(100% + 1px);
  height: 50px;
}

.custom-shape-divider-bottom-1593072170 .shape-fill {
  /* fill: #eceff1; */
}
</style>
