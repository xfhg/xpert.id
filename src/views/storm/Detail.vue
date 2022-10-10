<template>
  <div>
    <!-- <v-btn
      fab
      fixed
      bottom
      right
      icon
      color="black"
      class="ma-5"
      @click="calculateSlots(2)"
    >
      <v-icon dark>mdi-calendar</v-icon>
    </v-btn> -->
    <v-row no-gutters>
      <v-col class="" sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="25px"
        ></v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="2"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="8">
        <v-row no-gutters>
          <v-col class="" cols="12" sm="12" md="12">
            <v-sheet
              v-if="!storm.sis"
              class="d-flex flex-wrap justify-space-around align-start"
              width="100%"
              color="transparent"
            >
              <template v-for="(item, index) in storm.instances">
                <div :key="index">
                  <v-card
                    color="#ffffff"
                    style="
                      min-width: 300px;
                      max-width: 300px;
                      box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px;
                    "
                    class="py-3 px-3 ma-3"
                  >
                    <v-row>
                      <v-col cols="12" sm="12" class="d-flex align-center">
                        <vue-link
                          :to="item.sid + '/' + item.sis"
                          :external="false"
                          :new-tab="false"
                          class="text-button text-uppercase"
                        >
                          <hexagon-icon
                            class="mr-2"
                            color="#1d2226"
                          ></hexagon-icon>
                          {{ item.red }}
                        </vue-link>
                      </v-col>
                    </v-row>
                    <v-row v-if="item.red">
                      <v-col cols="12" sm="12" class="d-flex align-center">
                        <div class="text-caption">
                          {{ item.red }}
                        </div>
                      </v-col></v-row
                    >
                  </v-card>
                </div>
              </template>
            </v-sheet>
            <v-sheet
              v-if="storm.sis"
              class="d-flex flex-wrap justify-space-around align-start"
              width="100%"
              color="transparent"
            >
              <v-card
                color="#ffffff"
                style="
                  min-width: 300px;
                  max-width: 300px;
                  box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px;
                "
                class="py-3 px-3 ma-3"
              >
                <v-row>
                  <v-col cols="12" sm="12" class="d-flex align-center">
                    <hexagon-icon class="mr-2" color="#1d2226"></hexagon-icon>
                    {{ storm.charge.bit }}
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" class="d-flex align-center">
                    <div class="text-caption">
                      {{ storm.charge.red }}
                    </div>
                  </v-col></v-row
                >
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="2"></v-col>
    </v-row>

    <vue-diagonal :deg="-2" background="#f7fafc" space-before> </vue-diagonal>

    <v-sheet class="mb-10" color="transparent" min-height="350px"></v-sheet>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  // import store from '@/store'

  import { DateTime } from 'luxon'

  import _ from 'lodash'

  export default {
    data: () => ({
      days: [],
      myZoneName: DateTime.local().zoneName,
      myOffsetName: DateTime.local().offsetNameShort,
      myOffsetNameLong: DateTime.local().offsetNameLong,
    }),
    computed: {
      ...mapState(['system', 'storm', 'global', 'xpert']),
    },
    components: {
      VueLink: () => import('vue-link'),
    },
    mounted() {},
    methods: {
      truncateName(name) {
        return _.truncate(name, {
          length: 16,
          separator: ' ',
          omission: '',
        })
      },

      scrollToTop() {
        requestAnimationFrame(() => {
          this.$vuetify.goTo(0)
        })
      },
    },
  }
</script>

<style>
</style>