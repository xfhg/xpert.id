<template>
  <v-row no-gutters>
    <v-col
      class="d-flex align-center justify-center"
      cols="12"
      sm="12"
      md="12"
      xl="12"
    >
      <v-divider></v-divider>
      <Logo
        lwidth="24px"
        lheight="24px"
        lfill="#52616b"
        lstroke="#f6f9fc"
        class="ma-5"
      />
      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script>
// TODO MAKE PROPS FOR ALL SETTINGS INCLUDING SIZE OF THE LOGO
import Logo from '@/components/main/Logo'
export default {
  components: { Logo },
}
</script>

<style>
</style>