<template>
  <div>
    <v-btn
      fab
      fixed
      bottom
      left
      icon
      color="black"
      class="ma-5"
      @click="scrollToTop"
    >
      <v-icon dark>mdi-chevron-up</v-icon>
    </v-btn>

    <!-- <v-row no-gutters>
      <v-col class="" sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="25px"
        ></v-sheet>
      </v-col>
    </v-row> -->

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="6">
        <v-card class="elevation-0 mx-1 mb-5 pa-1" color="#fff">
          <v-row no-gutters>
            <v-col class cols="12" sm="12" md="12">
              <div class="d-flex align-center">
                <v-divider class="mx-2"></v-divider>
                <div class="text-button text-left">identity</div>
                <v-divider class="mx-2"></v-divider>
                <!-- <div class="text-h5 text-right mx-2">· xpert.ID</div> -->
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-sheet height="150px" width="100%" color="transparent"> </v-sheet>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="6">
        <v-row no-gutters>
          <v-col class cols="12" sm="12" md="4">
            <v-sheet
              class="d-flex align-center justify-center"
              color="transparent"
              min-height="25px"
            >
              <router-link class="mx-5" to="/profile/public">
                <triangle-icon size="72" stroke-width="1" />
              </router-link>
            </v-sheet>
          </v-col>
          <v-col class cols="12" sm="12" md="8">
            <v-sheet class="mb-10" color="transparent" min-height="25px">
              <div class="text-h3 text-left">ID</div>
              <div class="text-body-2 text-left pa-3">
                Network effects client product management. Ecosystem buyer
                interaction design lean startup infographic infrastructure pivot
                monetization. Buzz ecosystem stealth bootstrapping ownership
                founders.
              </div>
              <v-chip label class="elevation-2 ma-3" color="#fff">
                <v-avatar left>
                  <atom-2-icon stroke-width="1" color="#32e0c4" />
                </v-avatar>
                <span class="mx-5">XPERT ID</span>
              </v-chip>
              <v-chip label class="elevation-2 ma-3" color="#fff">
                <v-avatar left>
                  <atom-2-icon stroke-width="1" color="#32e0c4" />
                </v-avatar>
                <span class="mx-5">BRAND ID</span>
              </v-chip>
            </v-sheet></v-col
          >
        </v-row>
      </v-col>

      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-sheet
      height="150px"
      width="100%"
      class="d-flex align-center justify-center"
      color="transparent"
    >
      <plus-icon size="64"></plus-icon>
    </v-sheet>

    <DividerTop dcolor="f7fafc"></DividerTop>
    <v-sheet class="" color="#f7fafc" min-height="25">
      <v-sheet class="mb-10" color="transparent" min-height="550px">
        <v-sheet height="100px" width="100%" color="transparent"> </v-sheet>
        <v-row no-gutters>
          <v-col cols="0" sm="0" md="2" xl="3"></v-col>
          <v-col class="px-5" sm="12" md="8" xl="6">
            <v-row no-gutters>
              <v-col class cols="12" sm="12" md="8">
                <v-sheet class="mb-10" color="transparent" min-height="50px">
                  <div class="text-h3 text-left font-weight-thin">Academy</div>

                  <div class="text-body-2 text-left pa-3">
                    Network effects client product management. Ecosystem buyer
                    interaction design lean startup infographic infrastructure
                    pivot monetization. Buzz ecosystem stealth bootstrapping
                    ownership founders.
                  </div>

                  <v-chip label class="elevation-2 ma-3" color="#fff">
                    <v-avatar left>
                      <atom-2-icon stroke-width="1" color="#32e0c4" />
                    </v-avatar>
                    <span class="mx-5">Collaborate</span>
                  </v-chip>

                  <v-chip label class="elevation-2 ma-3" color="#fff">
                    <v-avatar left>
                      <atom-2-icon stroke-width="1" color="#32e0c4" />
                    </v-avatar>
                    <span class="mx-5">Mentor</span>
                  </v-chip>
                </v-sheet>
              </v-col>
              <v-col class cols="12" sm="12" md="4">
                <v-sheet
                  class="d-flex align-center justify-center"
                  color="transparent"
                  min-height="25px"
                >
                  <router-link class="mx-5" to="/profile/academy">
                    <square-rotated-icon size="72" stroke-width="1" />
                  </router-link>
                </v-sheet>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="0" sm="0" md="2" xl="3"></v-col>
        </v-row>
        <v-sheet height="150px" width="100%" color="transparent"> </v-sheet>
      </v-sheet>
    </v-sheet>

    <DividerTop dcolor="39444b" style="margin-top: -250px"></DividerTop>
    <v-sheet class="" color="#39444b" min-height="25">
      <v-sheet height="150px" width="100%" color="transparent"> </v-sheet>
      <v-row no-gutters>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
        <v-col class="px-5" sm="12" md="8" xl="6">
          <v-row no-gutters>
            <v-col class cols="12" sm="12" md="4">
              <v-sheet
                class="d-flex align-center justify-center"
                color="transparent"
                min-height="25px"
              >
                <router-link class="mx-5" to="/profile/talent">
                  <octagon-icon size="72" stroke-width="1" color="white" />
                </router-link>
              </v-sheet>
            </v-col>
            <v-col class cols="12" sm="12" md="8">
              <v-sheet class="mb-10" color="transparent" min-height="25px">
                <div class="text-h3 text-left white--text">Talent</div>
                <div class="text-body-2 text-left white--text pa-3">
                  Network effects client product management. Ecosystem buyer
                  interaction design lean startup infographic infrastructure
                  pivot monetization. Buzz ecosystem stealth bootstrapping
                  ownership founders.
                </div>
                <v-chip label class="elevation-2 ma-3" color="#fff">
                  <v-avatar left>
                    <atom-2-icon stroke-width="1" color="#32e0c4" />
                  </v-avatar>
                  <span class="mx-5">Hunt</span>
                </v-chip>
                <v-chip label class="elevation-2 ma-3" color="#fff">
                  <v-avatar left>
                    <atom-2-icon stroke-width="1" color="#32e0c4" />
                  </v-avatar>
                  <span class="mx-5">Match</span>
                </v-chip>

                <v-chip label class="elevation-2 ma-3" color="#fff">
                  <v-avatar left>
                    <atom-2-icon stroke-width="1" color="#32e0c4" />
                  </v-avatar>
                  <span class="mx-5">Hire</span>
                </v-chip>
              </v-sheet></v-col
            >
          </v-row>
        </v-col>

        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      </v-row>
    </v-sheet>
    <DividerBottom dcolor="39444b"></DividerBottom>

    <!-- <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="6">
        <v-row no-gutters>
          <v-col class cols="12" sm="12" md="4">
            <v-sheet
              class="d-flex align-center justify-center"
              color="transparent"
              min-height="25px"
            >
              <router-link class="mx-5" to="/profile/public">
                <cloud-icon size="72" stroke-width="1" />
              </router-link>
            </v-sheet>
          </v-col>
          <v-col class cols="12" sm="12" md="8">
            <v-sheet class="mb-10" color="transparent" min-height="25px">
              <div class="text-h3 text-left">Startup</div>
              <div class="text-body-2 text-left">
                Network effects client product management. Ecosystem buyer
                interaction design lean startup infographic infrastructure pivot
                monetization. Buzz ecosystem stealth bootstrapping ownership
                founders.
              </div>

              <v-chip dark label class="elevation-2 ma-3" color="#39444b">
                <v-avatar left>
                  <atom-2-icon stroke-width="1" color="#32e0c4" />
                </v-avatar>
                <span class="mx-5">Bootstrap</span>
              </v-chip>
              <v-chip dark label class="elevation-2 ma-3" color="#39444b">
                <v-avatar left>
                  <atom-2-icon stroke-width="1" color="#32e0c4" />
                </v-avatar>
                <span class="mx-5">Open Positions</span>
              </v-chip>

              <v-chip dark label class="elevation-2 ma-3" color="#39444b">
                <v-avatar left>
                  <atom-2-icon stroke-width="1" color="#32e0c4" />
                </v-avatar>
                <span class="mx-5">Funding</span>
              </v-chip>
            </v-sheet></v-col
          >
        </v-row>
      </v-col>

      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row> -->

    <!-- //TODO REMOVE THIS BOTTOM STUFF AND MAKE A COMPONENT -->

    <v-sheet class="mb-10" color="transparent" min-height="350px"></v-sheet>
    <v-row no-gutters class="mt-15">
      <v-col cols="4"> </v-col>
      <v-col cols="4" class="d-flex align-center justify-center"
        ><svg
          height="400px"
          width="400px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 600 600"
          style="enable-background: new 0 0 600 600; margin-bottom: -255px"
          xml:space="preserve"
        >
          <g>
            <path
              style="fill: #39444b; stroke: #f7fafc"
              d="M327.2118,220.0614l-0.0104-0.0097L460.9088,86.3447c4.5365-4.5365,4.5366-11.8917,0.0001-16.4282l-11.4902-11.4903
            c-4.5365-4.5366-11.8918-4.5366-16.4283,0L307.4976,183.9192c-4.5366,4.5366-11.8918,4.5366-16.4283,0l-68.5176-68.5176
            c-4.5366-4.5366-11.8918-4.5365-16.4283,0.0001l-11.4898,11.49c-4.5365,4.5366-4.5365,11.8917,0.0001,16.4282l96.4457,96.4457
            c4.5366,4.5365,11.8918,4.5365,16.4283,0L327.2118,220.0614z"
            />
            <path
              style="fill: #f7fafc; stroke: #f7fafc"
              d="M359.1364,251.986l-19.7045,19.7042c-4.5366,4.5366-4.5366,11.8918-0.0001,16.4284l108.8036,108.8033
		c4.5366,4.5366,11.8918,4.5365,16.4283,0l11.4901-11.4901c4.5366-4.5366,4.5365-11.8918,0-16.4283l-80.8752-80.8749
		c-4.5366-4.5366-4.5366-11.8918,0-16.4283L592.658,74.3204c4.5366-4.5366,4.5366-11.8917,0-16.4283l-11.4897-11.4897
		c-4.5366-4.5365-11.8918-4.5365-16.4283,0L359.1461,251.996L359.1364,251.986z"
            />
            <path
              style="fill: #f7fafc; stroke: #f7fafc"
              d="M272.413,338.7094l0.01,0.01l-85.4481,85.4474c-4.5366,4.5365-4.5366,11.8917-0.0001,16.4283l11.4901,11.4903
		c4.5365,4.5366,11.8918,4.5366,16.4284,0.0001l77.2335-77.2339c4.5366-4.5366,11.8918-4.5366,16.4283,0l187.746,187.746
		c4.5365,4.5365,11.8917,4.5366,16.4283,0.0001l11.49-11.4898c4.5366-4.5366,4.5366-11.8918,0.0001-16.4283l-215.674-215.6743
		c-4.5365-4.5365-11.8918-4.5366-16.4283,0L272.413,338.7094z"
            />
            <path
              style="fill: #f7fafc; stroke: #f7fafc"
              d="M240.4884,306.7848l19.7042-19.7042c4.5366-4.5365,4.5366-11.8918,0-16.4283L50.5942,61.0542
		c-4.5366-4.5366-11.8918-4.5365-16.4283,0l-11.49,11.49c-4.5365,4.5366-4.5365,11.8917,0,16.4283l181.6702,181.6701
		c4.5366,4.5366,4.5366,11.8918,0,16.4283L28.2539,463.1627c-4.5365,4.5365-4.5366,11.8917,0,16.4283l11.49,11.4901
		c4.5365,4.5366,11.8918,4.5366,16.4283,0l184.3063-184.3063L240.4884,306.7848z"
            />
          </g>
        </svg>
        <!-- <div
          class="text-h1"
          style="
            color: #f6f9fc;
            text-shadow: 1px 3px 7px rgba(246, 249, 252, 0.6);
          "
        >
          xpert.id
        </div> -->
      </v-col>
      <v-col cols="4"> </v-col>
    </v-row>
  </div>
</template>
<script>
  import DividerTop from '@/components/divider/DividerTop'
  import DividerBottom from '@/components/divider/DividerBottom'

  import { mapState } from 'vuex'

  export default {
    data: () => ({}),
    components: {
      DividerTop,
      DividerBottom,
    },
    computed: {
      ...mapState(['xpertid']),
    },
    created() {},
    mounted() {},

    methods: {
      scrollToTop() {
        requestAnimationFrame(() => {
          this.$vuetify.goTo(0)
        })
      },
    },
  }
</script>

<style>
  .wrap-text {
    -webkit-line-clamp: unset !important;
  }
</style>
