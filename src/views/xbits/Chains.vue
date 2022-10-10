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
            <v-sheet
              class="d-flex flex-wrap justify-space-around align-start"
              width="100%"
              color="transparent"
            >
              <template v-for="(item, index) in bit.bits.data">
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
                          :to="'brain/' + item.id"
                          :external="false"
                          :new-tab="false"
                          class="text-button text-uppercase"
                        >
                          <hexagon-icon
                            class="mr-2"
                            color="#1d2226"
                          ></hexagon-icon>
                          {{ item.title }}
                        </vue-link>
                      </v-col>
                    </v-row>
                    <v-row v-if="item.description">
                      <v-col cols="12" sm="12" class="d-flex align-center">
                        <div class="text-caption">
                          {{ item.description }}
                        </div>
                      </v-col></v-row
                    >
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
      <v-col class="mb-10" sm="12" md="12">
        <v-sheet color="transparent" min-height="550px"> </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

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
      ...mapState(['system', 'bit', 'xpert']),
    },
  }
</script>

<style>
</style>