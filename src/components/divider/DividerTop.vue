<template>
  <v-row no-gutters>
    <v-col cols="12" class="flex-grow-0 flex-shrink-1 divider-bottom-01">
      <div class="custom-shape-divider-bottom-1594323961">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" :style="style" />
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
  min-height: 150px;
}
.custom-shape-divider-bottom-1594323961 {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1594323961 svg {
  position: relative;
  display: block;
  width: calc(120% + 1px);
  height: 150px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1594323961 .shape-fill {
  /* fill: #52616b; */
}
</style>
