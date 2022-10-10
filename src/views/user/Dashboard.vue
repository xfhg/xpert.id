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

    <v-sheet height="10px" width="100%" color="transparent"> </v-sheet>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-0" sm="12" md="8" xl="6">
        <v-row no-gutters>
          <v-col cols="12" sm="3" md="3" xl="3"
            ><v-card
              min-height="100px"
              color="#ffffff"
              class="px-5 ma-5 d-flex justify-space-between align-center"
              style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
            >
              <v-icon color="#1d2226" size="45px">mdi-hexagon</v-icon>
              <div class="text-h4">134</div>
            </v-card></v-col
          >
          <v-col cols="12" sm="3" md="3" xl="3"
            ><v-card
              color="#ffffff"
              min-height="100px"
              class="px-5 ma-5 d-flex justify-space-between align-center"
              style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
              ><v-icon color="#1d2226" size="45px">mdi-flash-circle</v-icon>
              <div class="text-h4">45</div></v-card
            ></v-col
          >
          <v-col cols="12" sm="3" md="3" xl="3"
            ><v-card
              color="#ffffff"
              min-height="100px"
              class="px-5 ma-5 d-flex justify-space-between align-center"
              style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
              ><v-icon color="#1d2226" size="45px">mdi-bash</v-icon>
              <div class="text-h4">600</div></v-card
            ></v-col
          >
          <v-col cols="12" sm="3" md="3" xl="3"
            ><v-card
              color="#ffffff"
              min-height="100px"
              class="px-5 ma-5 d-flex justify-space-between align-center"
              style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
              ><v-icon color="#1d2226" size="45px">mdi-chess-king</v-icon>
              <div class="text-h4">1200</div></v-card
            ></v-col
          >
        </v-row>
        <!-- <v-row no-gutters>
          <v-col cols="12" sm="4" md="4" xl="4"
            ><v-card class="pa-1"
              ><chevrons-up-icon stroke-width="1"></chevrons-up-icon>
              <div class="text-h6">Rank</div></v-card
            ></v-col
          >
          <v-col class="px-5" cols="12" sm="4" md="4" xl="4"
            ><v-card class="pa-1"
              ><affiliate-icon stroke-width="1"></affiliate-icon>
              <div class="text-h6">Karma</div></v-card
            ></v-col
          >
          <v-col cols="12" sm="4" md="4" xl="4"
            ><v-card class="pa-1"
              ><flag-icon stroke-width="1"></flag-icon>
              <div class="text-h6">Milestones</div></v-card
            ></v-col
          >
        </v-row> -->
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-sheet class="mb-10" color="transparent" min-height="10px"></v-sheet>

    <v-row no-gutters>
      <v-col class sm="12" md="12">
        <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>

        <vue-diagonal
          :deg="-2"
          background="#1d2226"
          space-before
        ></vue-diagonal>

        <vue-diagonal :deg="-2" background="#39444b">
          <v-sheet class="pb-5" color="#39444b" min-height="25">
            <v-row no-gutters>
              <v-col class cols="0" sm="0" md="2" xl="3"> </v-col>
              <v-col class="" sm="12" md="8" xl="6">
                <!-- https://glassmorphism.com/ -->
                <v-card
                  class="elevation-8 mx-1 mb-5 pa-10 mb-15"
                  style="margin-top: -175px"
                  min-height="300px"
                  color="#ffffff"
                >
                  <div class="d-flex align-center justify-space-around"></div>
                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="8"> </v-col>
                    <v-col class cols="12" sm="12" md="4"> </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col class cols="0" sm="0" md="2" xl="3"> </v-col>
            </v-row>

            <!-- <v-row no-gutters>
              <v-col cols="0" sm="0" md="2" xl="3"></v-col>
              <v-col class="px-0" sm="12" md="8" xl="6">
                <v-autocomplete
                  class="my-5 mx-5"
                  no-data-text="XPERT Command Prompt"
                  clearable
                  item-text="name"
                  ref="prompt"
                  color="#32e0c4"
                  append-icon=""
                  loading
                >
                  <template v-slot:item="{ item }">
                    <v-list-item dense @click="sendMeTo(item.url)"
                      ><prompt-icon></prompt-icon>{{ item.name }}</v-list-item
                    >
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="0" sm="0" md="2" xl="3"></v-col>
            </v-row> -->

            <v-row no-gutters>
              <v-col cols="0" sm="0" md="2" xl="3"></v-col>
              <v-col class="px-5" sm="12" md="8" xl="6">
                <v-card class="elevation-0 mx-1 mb-5 pa-1" color="transparent">
                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="12">
                      <div class="d-flex align-center">
                        <div class="text-button text-left white--text">
                          COLLAB
                        </div>
                        <v-divider class="mx-2"></v-divider>
                        <v-icon color="white">mdi-hexagon-outline</v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col cols="0" sm="0" md="2" xl="3"></v-col>
            </v-row>

            <v-row no-gutters class="mt-5">
              <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
              <v-col
                class="d-flex justify-center pa-5"
                cols="12"
                sm="12"
                md="8"
                xl="4"
              >
              </v-col>

              <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
            </v-row>
          </v-sheet>
        </vue-diagonal>
        <vue-diagonal :deg="-2" background="#f6f9fc" space-after>
          <v-row no-gutters>
            <v-col
              class="d-flex align-center justify-center my-5"
              cols="12"
              sm="12"
              md="12"
            >
              <v-icon x-large color="black">mdi-plus</v-icon>
            </v-col>
            <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
            <v-col class="px-5" cols="12" sm="12" md="8" xl="4"> </v-col>
            <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
          </v-row>
        </vue-diagonal>
      </v-col>
    </v-row>
    <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="6">
        <v-card class="elevation-0 mx-1 mb-5 pa-1" color="transparent">
          <v-row no-gutters>
            <v-col class cols="12" sm="12" md="12">
              <div class="d-flex align-center">
                <div class="text-button text-left">Network</div>
                <v-divider class="mx-2"></v-divider>
                <deci-svg height="64px"></deci-svg>
              </div>
            </v-col>
          </v-row>

          <router-link class="ml-2" to="/profile">
            <v-btn class="mr-1" color="#32e0c4" text v-if="auth.authenticated"
              ><v-icon>mdi-account</v-icon></v-btn
            >
          </router-link>
          <router-link class="ml-2" :to="'/x/' + xpert.data.profile.username">
            <v-btn class="mr-1" color="#32e0c4" text v-if="auth.authenticated"
              ><v-icon>mdi-star</v-icon></v-btn
            >
          </router-link>

          <v-btn
            class="mr-1"
            color="#32e0c4"
            text
            v-if="auth.authenticated"
            @click="invokeBits"
            ><v-icon>mdi-hexagon</v-icon></v-btn
          >
        </v-card>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-row no-gutters class="mt-5">
      <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
      <v-col class="d-flex justify-center pa-5" cols="12" sm="12" md="8" xl="4">
        <v-skeleton-loader
          class="mx-auto"
          height="200px"
          type="paragraph@3"
          width="100%"
          boilerplate
        ></v-skeleton-loader>
      </v-col>

      <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
    </v-row>
    <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>

    <vue-diagonal :deg="-2" background="#f6f9fc" space-before>
      <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>

      <v-row no-gutters>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
        <v-col class="px-5" sm="12" md="8" xl="6">
          <v-card class="elevation-0 mx-1 mb-5 pa-1" color="transparent">
            <v-row no-gutters>
              <v-col class cols="12" sm="12" md="12">
                <div class="d-flex align-center">
                  <div class="text-button text-left">The Academy</div>
                  <v-divider class="mx-2"></v-divider>
                  <chip-svg width="64px"></chip-svg>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
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
                <template v-for="(item, index) in latestBits">
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
                            :to="'bit/' + item.id"
                            :external="false"
                            :new-tab="false"
                            class="text-button text-uppercase"
                          >
                            <!-- <hexagon-icon
                              class="mr-2"
                              color="#1d2226"
                            ></hexagon-icon> -->
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
      <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>
    </vue-diagonal>

    <vue-diagonal :deg="-2" background="#39444b">
      <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>

      <v-row no-gutters>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
        <v-col class="px-5" sm="12" md="8" xl="6">
          <v-card class="elevation-0 mx-1 mb-5 pa-1" color="transparent">
            <v-row no-gutters>
              <v-col class cols="12" sm="12" md="12">
                <div class="d-flex align-center">
                  <div class="text-button text-left">The Talent HUB</div>
                  <v-divider class="mx-2"></v-divider>
                  <Logo
                    lwidth="32px"
                    lheight="32px"
                    lfill="#1d2226"
                    lstroke="rgba(0, 0, 0, 0.50)"
                    class="mx-2"
                  />
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      </v-row>

      <v-row no-gutters class="mt-5">
        <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
        <v-col class="" cols="12" sm="12" md="8" xl="4">
          <flicking
            class="flicking"
            :options="{
              gap: 25,
              collectStatistics: false,
              circular: true,
              anchor: 0,
              adaptive: true,
              hanger: 0,
            }"
          >
            <div
              min-height="300"
              :key="index"
              v-for="(item, index) in latestBits"
            >
              <v-card
                color="#ffffff"
                style="min-width: 300px; max-width: 300px"
                class="py-3 px-3 ma-3 elevation-5"
              >
                <v-row>
                  <v-col cols="12" sm="12" class="d-flex align-center">
                    <vue-link
                      :to="'bit/' + item.id"
                      :external="false"
                      :new-tab="false"
                      class="text-button text-uppercase"
                    >
                      <!-- <hexagon-icon class="mr-2" color="#1d2226"></hexagon-icon> -->
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
          </flicking>
        </v-col>

        <v-col class cols="12" sm="0" md="2" xl="4"></v-col>
      </v-row>
      <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>
    </vue-diagonal>
    <vue-diagonal :deg="-2" background="#1d2226" space-after>
      <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>

      <v-row no-gutters>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
        <v-col class="px-5" sm="12" md="8" xl="6">
          <v-card class="elevation-0 mx-1 mb-5 pa-1" color="transparent">
            <v-row no-gutters>
              <v-col class cols="12" sm="12" md="12">
                <div class="d-flex align-center">
                  <div class="text-button text-left white--text">
                    xpert.IDENTITY
                  </div>
                  <v-divider class="mx-2"></v-divider>
                  <v-icon color="white">mdi-dna</v-icon>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      </v-row>

      <v-row no-gutters class="mt-5">
        <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
        <v-col cols="12" sm="12" md="8" xl="6">
          <flicking
            class="flicking"
            :options="{
              gap: 25,
              collectStatistics: false,
              circular: true,
              anchor: 0,
              adaptive: true,
              hanger: 0,
            }"
            @move="
              (e) => {
                this.$refs.thumb.style.width = e.progress * 100 + '%'
              }
            "
          >
            <div
              min-height="300"
              :key="index"
              v-for="(item, index) in latestBits"
            >
              <v-card
                color="#ffffff"
                style="min-width: 300px; max-width: 300px"
                class="py-3 px-3 ma-3 elevation-5"
              >
                <v-row>
                  <v-col cols="12" sm="12" class="d-flex align-center">
                    <vue-link
                      :to="'bit/' + item.id"
                      :external="false"
                      :new-tab="false"
                      class="text-button text-uppercase"
                    >
                      <!-- <hexagon-icon class="mr-2" color="#1d2226"></hexagon-icon> -->
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
          </flicking>
          <div class="progress">
            <div class="thumb" ref="thumb"></div>
          </div>
        </v-col>
        <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
      </v-row>
      <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>
    </vue-diagonal>

    <v-row no-gutters>
      <v-col class="flex-grow-1 flex-shrink-1" sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="150px"
        ></v-sheet>
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="150px"
        ></v-sheet>
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="150px"
        ></v-sheet>
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="150px"
        ></v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import store from '@/store'
  import { Flicking } from '@egjs/vue-flicking'

  import { get } from 'vuex-pathify'
  import { mapState } from 'vuex'

  import Logo from '@/components/main/Logo'

  import DeciSvg from '@/assets/svg/temp/decentralized.svg'
  import ChipSvg from '@/assets/svg/temp/chipblack.svg'

  // import Logo from '@/components/main/Logo'

  export default {
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Dashboard',
    },
    components: {
      Logo,
      DeciSvg,
      ChipSvg,
      VueLink: () => import('vue-link'),
      Flicking: Flicking,
    },

    data: () => ({
      latestBits: [],
    }),

    computed: {
      error: get('status@error'),
      message: get('status@message'),
      loading: get('status@loading'),

      ...mapState(['auth', 'user', 'xpert', 'system']),
    },

    methods: {
      TestButton() {
        !this.loading
        store.dispatch('user/testAction', {})
      },
      Nuke() {
        !this.loading
        store.dispatch('user/nukeUsers', {})
      },
      TestAccountStuffs() {
        !this.loading
        store.dispatch('account/getAccountSubscription', {})
      },
      SubscribeAccountStuffs() {
        !this.loading
        store.dispatch('account/subscribePioneer', {})
      },
      AccountStuffs() {
        !this.loading
        store.dispatch('account/accountDashboard', {})
      },
      Ambassador() {
        !this.loading
        store.dispatch('account/subscribeAmbassador', {})
      },

      invokeBits() {
        store.dispatch('bit/getXbits', {}).then((data) => {
          this.latestBits = data.data
          console.log(data)
        })
      },
    },
  }
</script>

<style >
  .flicking {
    background: #1d2226;
    background: rgba(55, 55, 55 0.1);
    border-radius: 5px;
    height: 200px;
  }
  .progress {
    position: relative;
    width: 50%;
    height: 10px;
    border-radius: 5px;
    background: #000;
    margin: 10px auto;
    overflow: hidden;
  }
  .thumb {
    position: relative;
    height: 100%;
    width: 0;
    border-radius: inherit;
    background: #39444b;
  }
</style>
