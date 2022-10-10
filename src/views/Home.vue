<template>
  <div>
    <v-sheet class="mb-10" color="transparent" min-height="100px"> </v-sheet>
    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col cols="12" class="px-5" sm="12" md="8" xl="6">
        <div class="text-h3 text-center">Intrepid Connected Brains</div>
        <div class="text-h4 text-center">
          brain<v-icon size="32px" color="#37474F">mdi-flash</v-icon>storm the
          <v-icon size="32px" class="text-center" color="#37474F"
            >mdi-all-inclusive</v-icon
          >
          of knowledge
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>
    <v-sheet class="mb-10" color="transparent" min-height="200px"> </v-sheet>
    <vue-diagonal :deg="-3" background="#f7fafc">
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="d-flex align-center justify-center">
          <!-- <div class="my-5 text-h3 text-right" style="color: gray" color="#3BEE81"  color="#3BEE81">
            surround yourself
          </div> -->

          <main-svg
            width="750px"
            style="margin-top: -250px; margin-right: -10%; margin-left: -10%"
          ></main-svg>
          <!-- <div class="my-5 text-h3 text-left" style="color: gray">
            with excellence
          </div> -->
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
        <v-col cols="12" class="px-5" sm="12" md="8" xl="6">
          <div class="text-h5 text-center">
            growth enablement<v-icon size="32px" color="#37474F"
              >mdi-exponent-box</v-icon
            >platform
          </div>
          <!-- <div class="text-h4 text-center">platform</div> -->
          <!-- <div class="text-h4 text-center">
            surround yourself with excellence
          </div>
          <div class="text-h6 text-center">
            no blockchains, altcoins, nfts, gurus, bullshit tokens..
          </div>
          <div class="text-h6 text-center">
            not us but you are the next big thing
          </div> -->
        </v-col>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      </v-row>
      <v-sheet min-height="750px" color="transparent"> </v-sheet>
    </vue-diagonal>
    <v-sheet min-height="750px"> </v-sheet>

    <v-sheet min-height="750px"></v-sheet>
  </div>
</template>

<script>
  import MainSvg from '@/assets/svg/core/main_color.svg'
  export default {
    components: { MainSvg },
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Growth enablement platform',
    },
    data: () => ({
      //
    }),
  }
</script>

<style scoped>
  /* Animation for SVG LOGO */
</style>
