<template>
  <div>
    <vue-diagonal :deg="-2" :background="fcolor">
      <v-sheet class="my-3" color="transparent" min-height="50px"></v-sheet>
    </vue-diagonal>
    <v-footer :color="fcolor" min-height="500px" style="margin-top: -75px">
      <v-sheet
        class="mb-10"
        color="transparent"
        min-height="150px"
        width="100%"
      >
        <v-row no-gutters>
          <v-col cols="0" sm="0" md="2" xl="2"></v-col>
          <v-col cols="12" sm="12" md="4" xl="4">
            <v-sheet class="my-10" color="transparent">
              <div
                class="text-h3"
                style="
                  text-shadow: 1px 3px 7px rgba(246, 249, 252, 0.6);
                  color: #747c81;
                "
              >
                <Logo
                  lwidth="25px"
                  lheight="25px"
                  lfill="#747c81"
                  lstroke="#747c81"
                />pert.id
              </div>
              <div class="text-button ma-1 ml-10">
                Growth Enablement Platform
              </div>
              <router-link to="/login">
                <div class="text-overline my-1 ml-15">
                  PRIVATE.ALPHA.{{ version.slice(0, 6) }}
                </div>
              </router-link>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="12" md="4" xl="4">
            <v-sheet
              class="my-10 d-flex justify-end align-center"
              color="transparent"
            >
              <div class="mr-5 text-button text-center">powered by</div>
              <div class="text-h3 text-center" style="color: #747c81">
                カルマ
              </div>
              <!-- कर्मन् קארמה karma 业力 -->
            </v-sheet>
          </v-col>
          <v-col cols="0" sm="0" md="2" xl="2"></v-col>
        </v-row>
      </v-sheet>
    </v-footer>
  </div>
</template>

<script>
  // import LocaleChanger from '@/components/locale/LocaleChanger'

  import Logo from '@/components/main/Logo'

  import xpert from '@/config/xpert'
  import { get } from 'vuex-pathify'
  export default {
    data: () => ({
      version: xpert.version,
    }),
    components: { Logo },
    props: ['fcolor'],
    computed: {
      auth: get('auth/authenticated'),
    },
    methods: {},
  }
</script>


<style></style>
