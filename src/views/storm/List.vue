<template>
  <div>
    <v-row no-gutters>
      <v-col class="" sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="25px"
        ></v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters class="mb-10">
      <v-col cols="12" sm="2" md="2" xl="2"></v-col>
      <v-col
        cols="12"
        class="d-flex flex-wrap justify-center align-center"
        sm="2"
        md="2"
        xl="2"
        ><v-icon color="#39444b">mdi-dots-hexagon</v-icon></v-col
      >
      <v-col
        cols="12"
        class="d-flex flex-wrap justify-center align-center"
        sm="2"
        md="2"
        xl="2"
      >
        <v-icon color="#39444b">mdi-pound-box</v-icon></v-col
      >
      <v-col
        cols="12"
        class="d-flex flex-wrap justify-center align-center"
        sm="2"
        md="2"
        xl="2"
      >
        <v-icon color="#39444b">mdi-hexagon-multiple</v-icon></v-col
      >
      <v-col
        cols="12"
        class="d-flex flex-wrap justify-center align-center"
        sm="2"
        md="2"
        xl="2"
        ><v-icon color="#39444b">mdi-account-circle</v-icon></v-col
      >
      <v-col cols="12" sm="2" md="2" xl="2"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="2"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="8">
        <v-row no-gutters>
          <v-col class="" cols="12" sm="12" md="12">
            <v-sheet class="" width="100%" color="transparent">
              <template v-for="(item, index) in storm.storms.data.blue">
                <div :key="index">
                  <v-card
                    color="transparent"
                    style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
                    width="100%"
                    class="pa-3 ma-3"
                  >
                    <v-row v-if="item.updated">
                      <v-col cols="12" sm="12" class="d-flex align-center">
                        <div class="text-caption">
                          {{ item.updated }}
                        </div>
                      </v-col></v-row
                    >
                    <v-card-actions>
                      <template
                        v-for="(bout, bindex) in storm.storms.data.blue_bouts[
                          item.id
                        ]"
                      >
                        <v-card
                          :key="bindex"
                          color="blue"
                          style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
                          width="100%"
                          class="pa-3 ma-3"
                        >
                          <vue-link
                            :to="'s/' + item.id + '/' + bout.sis"
                            :external="false"
                            :new-tab="false"
                            class="text-button text-uppercase"
                          >
                            <bolt-icon class="mr-2" color="blue"></bolt-icon>
                            {{ bout.sis }}
                          </vue-link>

                          <div class="text-overline text-left">
                            {{ bout.bit }}
                          </div>
                          <div class="text-overline text-left">
                            {{ $date(bout.start.ts).fromNow() }}
                          </div>
                        </v-card>
                      </template>
                    </v-card-actions>
                  </v-card>
                </div>
              </template>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="2"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="" sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="50px"
        ></v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="2"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="8">
        <v-row no-gutters>
          <v-col class="" cols="12" sm="12" md="12">
            <v-sheet class="" width="100%" color="transparent">
              <template v-for="(item, index) in storm.storms.data.red">
                <div :key="index">
                  <v-card
                    color="transparent"
                    style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
                    width="100%"
                    class="pa-3 ma-3"
                  >
                    <v-row>
                      <v-col cols="12" sm="12" class="d-flex align-center">
                        <vue-link
                          :to="'s/' + item.id"
                          :external="false"
                          :new-tab="false"
                          class="text-button text-uppercase"
                        >
                          <bolt-icon class="mr-2" color="red"></bolt-icon>
                          {{ item.id }}
                        </vue-link>
                      </v-col>
                    </v-row>
                    <v-row v-if="item.updated">
                      <v-col cols="12" sm="12" class="d-flex align-center">
                        <div class="text-caption">
                          {{ item.updated }}
                        </div>
                      </v-col></v-row
                    >

                    <v-card-actions>
                      <template
                        v-for="(bout, bindex) in storm.storms.data.red_bouts[
                          item.id
                        ]"
                      >
                        <v-card
                          :key="bindex"
                          color="red"
                          style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
                          width="100%"
                          class="pa-3 ma-3"
                        >
                          <div class="text-overline text-left">
                            {{ bout.bit }}
                          </div>
                          <div class="text-overline text-left">
                            {{ $date(bout.start.ts).fromNow() }}
                          </div>
                        </v-card>
                      </template>
                    </v-card-actions>
                  </v-card>
                </div>
              </template>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="2"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="mb-10" sm="12" md="12">
        <v-sheet color="transparent" min-height="550px"> </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  // import store from '@/store'

  export default {
    data() {
      return {
        currentRefinement: '',
      }
    },
    components: {
      VueLink: () => import('vue-link'),
    },
    computed: {
      ...mapState(['system', 'storm', 'xpert']),
    },
    mounted() {
      // ! no need because this bind doesnt list collections just docs or a single doc
      // store.dispatch('storm/bindData')
    },
  }
</script>

<style>
</style>