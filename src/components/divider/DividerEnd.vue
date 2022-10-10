<template>
  <v-row no-gutters>
    <v-col cols="12" class="flex-grow-0 flex-shrink-0 divider-bottom-01">
      <div class="custom-shape-divider-bottom-1594323961">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style="transform: rotate(180deg)"
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
.divider-bottom-01 {
  min-height: 100px;
  max-height: 100px;
}
.custom-shape-divider-bottom-1594323961 {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  /* transform: rotate(180deg); */
}

.custom-shape-divider-bottom-1594323961 svg {
  position: relative;
  display: block;
  width: calc(100% + 1px);
  height: 100px;
  /* transform: rotateY(180deg); */
}

.custom-shape-divider-bottom-1594323961 .shape-fill {
  /* fill: #52616b; */
}
</style>
