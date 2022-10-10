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
      @click="invokeSave"
    >
      <v-icon dark>mdi-hexagon</v-icon>
    </v-btn> -->

    <v-speed-dial
      fab
      fixed
      bottom
      right
      open-on-hover
      color="#39444b"
      class="ma-5"
    >
      <template v-slot:activator>
        <v-btn color="#000000" icon fab x-large>
          <v-icon> mdi-hexagon-outline </v-icon>
        </v-btn>
      </template>

      <router-link :to="'/storm/' + bit.wip">
        <v-btn fab small>
          <v-icon>mdi-flash</v-icon>
        </v-btn>
      </router-link>
      <v-btn fab small>
        <v-icon>mdi-flag</v-icon>
      </v-btn>
      <v-btn fab small>
        <v-icon>mdi-alert</v-icon>
      </v-btn>
    </v-speed-dial>

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
      <v-col cols="12" sm="0" md="2" xl="2"></v-col>
      <v-col
        class="d-flex justify-space-between align-center px-5 mb-5"
        sm="12"
        md="8"
        xl="8"
      >
        <v-sheet class="d-flex justify-start align-center" color="transparent">
          <div class="text-button"></div>
          <v-icon color="#32e0c4" size="32px">mdi-hexagon</v-icon>
          <div class="text-button">{{ bit.brain.slug || '' }}</div>
        </v-sheet>

        <v-sheet class="d-flex align-center justify-center" color="transparent">
          <v-scroll-x-transition>
            <div v-if="countdown" class="text-button">
              <vue-countdown-timer
                :start-time="bit.brain.time_origin"
                :end-time="'2021-10-10 00:00:00'"
                :interval="1000"
              >
                <template slot="start-label" slot-scope="scope">
                  <span style="color: red">{{ scope.props.startLabel }}</span>
                  <span style="color: blue">{{ scope.props.endLabel }} </span>
                </template>

                <template slot="countdown" slot-scope="scope">
                  <span>{{ scope.props.days }}</span
                  >{{ scope.props.dayTxt }} <span>{{ scope.props.hours }}</span
                  >{{ scope.props.hourTxt }}
                  <span>{{ scope.props.minutes }}</span
                  >{{ scope.props.minutesTxt }}
                  <span>{{ scope.props.seconds }}</span>
                </template>

                <template slot="end-label" slot-scope="scope">
                  <span style="color: red">{{ scope.props.startLabel }}</span>
                  <span style="color: blue">{{ scope.props.endLabel }}</span>
                  X
                  <!-- {{ bit.wip.slice(24) }} -->
                </template>

                <template slot="end-text" slot-scope="scope">
                  <span style="color: green">{{ scope.props.endText }}</span>
                </template>
              </vue-countdown-timer>
            </div>
          </v-scroll-x-transition>
          <v-icon right color="#39444b" @click="countdown = !countdown"
            >mdi-hexagon-slice-3</v-icon
          >
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="0" md="2" xl="2"></v-col>
    </v-row>

    <vue-diagonal :deg="-2" background="#f7fafc" space-before>
      <v-sheet color="transparent" min-height="500px">
        <v-row no-gutters>
          <v-col class="" sm="12" md="12">
            <v-sheet
              class="d-flex"
              color="transparent"
              min-height="15px"
            ></v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="0" md="2" xl="2"></v-col>
          <v-col class="px-5" sm="12" md="8" xl="8">
            <v-row no-gutters>
              <v-col class cols="12" sm="12" md="12">
                <v-sheet class="px-1 ma-5" color="transparent">
                  <editor
                    ref="editor"
                    :config="config"
                    :initialized="onInitialized"
                  />
                </v-sheet>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="0" md="2" xl="2"></v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="0" sm="0" md="2" xl="2"></v-col>
          <v-col class="pa-5" cols="12" sm="12" md="8" xl="8">
            <v-sheet class="px-5" color="transparent">
              <!-- <v-icon left>mdi-pound-box</v-icon>
              <div class="text-button">hash</div> -->

              <v-sheet
                class="d-flex flex-wrap justify-space-between"
                width="100%"
                color="transparent"
              >
                <template v-for="item in bit.brain.meta_xperts">
                  <div :key="item" class="my-3 mx-3">
                    <v-chip
                      class="elevation-1"
                      color="#39444b"
                      dark
                      outlined
                      label
                    >
                      <v-avatar left>
                        <v-icon size="24" color="#39444b"
                          >mdi-account-circle</v-icon
                        >
                      </v-avatar>
                      <span class="mx-5">{{ item.toLowerCase() }}</span>
                    </v-chip>
                  </div>
                </template>
              </v-sheet>
            </v-sheet>
          </v-col>
          <v-col cols="0" sm="0" md="2" xl="2"></v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="0" sm="0" md="2" xl="2"></v-col>
          <v-col class="pa-5" cols="12" sm="12" md="8" xl="8">
            <v-sheet class="px-5" color="transparent">
              <!-- <v-icon left>mdi-pound-box</v-icon>
              <div class="text-button">hash</div> -->

              <v-sheet
                class="d-flex flex-wrap justify-space-between"
                width="100%"
                color="transparent"
              >
                <template v-for="item in bit.brain.meta_keywords">
                  <div :key="item" class="my-3 mx-3">
                    <v-chip
                      class="elevation-1"
                      color="#39444b"
                      dark
                      outlined
                      label
                    >
                      <v-avatar left>
                        <v-icon size="24" color="#39444b">mdi-pound-box</v-icon>
                      </v-avatar>
                      <span class="mx-5">{{
                        item.substr(1).toLowerCase()
                      }}</span>
                    </v-chip>
                  </div>
                </template>
              </v-sheet>
            </v-sheet>
          </v-col>
          <v-col cols="0" sm="0" md="2" xl="2"></v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="0" sm="0" md="2" xl="2"></v-col>
          <v-col class="pa-5" cols="12" sm="12" md="8" xl="8">
            <v-sheet class="px-5" color="transparent">
              <!-- <v-icon left>mdi-pound-box</v-icon>
              <div class="text-button">hash</div> -->

              <v-sheet
                class="d-flex flex-wrap justify-space-between"
                width="100%"
                color="transparent"
              >
                <template v-for="item in bit.brain.meta_chain">
                  <div :key="item" class="my-3 mx-3">
                    <v-chip class="elevation-1" color="#39444b" label outlined>
                      <v-avatar left>
                        <v-icon size="24" color="#39444b"
                          >mdi-format-section</v-icon
                        >
                      </v-avatar>

                      <span class="mx-5">{{ item.toLowerCase() }}</span>
                    </v-chip>
                  </div>
                </template>
              </v-sheet>
            </v-sheet>
          </v-col>
          <v-col cols="0" sm="0" md="2" xl="2"></v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="0" sm="0" md="2" xl="2"></v-col>
          <v-col class="pa-5" cols="12" sm="12" md="8" xl="8">
            <v-sheet class="px-5" color="transparent">
              <!-- <v-icon left>mdi-pound-box</v-icon>
              <div class="text-button">hash</div> -->

              <v-sheet
                class="d-flex flex-wrap justify-space-between"
                width="100%"
                color="transparent"
              >
                <template v-for="item in bit.brain.meta_chain">
                  <div :key="item" class="my-3 mx-3">
                    <v-chip class="elevation-1" color="#39444b" label outlined>
                      <v-avatar left>
                        <v-icon size="24" color="#39444b"
                          >mdi-chart-bubble</v-icon
                        >
                      </v-avatar>

                      <span class="mx-5">{{ item.toLowerCase() }}</span>
                    </v-chip>
                  </div>
                </template>
              </v-sheet>
            </v-sheet>
          </v-col>
          <v-col cols="0" sm="0" md="2" xl="2"></v-col>
        </v-row>

        <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

        <div class="d-flex align-center justify-space-around">
          <v-switch
            inset
            v-model="system.data.template.bits.guidelines"
            color="#39444b"
            class="mb-5"
          >
            <template v-slot:label>
              <v-icon color="#39444b" left class="">mdi-information</v-icon>
              <div class="text-button">Metadata Instructions</div>
            </template>
          </v-switch>
        </div>
        <v-scroll-x-transition>
          <div v-if="system.data.template.bits.guidelines">
            <v-row no-gutters>
              <v-col cols="0" sm="0" md="2"></v-col>
              <v-col cols="12" sm="12" md="4" class="pa-5 mb-5">
                <div class="text-h5 mb-3">
                  <kbd>@@username</kbd>
                  <v-icon class="ml-5">mdi-account-circle</v-icon>collaborate
                </div>

                <div class="text-body-2">
                  Connected brains are unstoppable. Mention another xpert, team
                  or domain to directly engage with them.
                </div>
              </v-col>
              <v-col cols="12" sm="12" md="4" class="pa-5 mb-5"
                ><div class="text-h5 mb-3">
                  <kbd>##trendname</kbd>
                  <v-icon class="ml-5">mdi-pound-box</v-icon>trends
                </div>
                <div class="text-body-2">
                  Location can bring essential context to your bits. Assisted
                  language translation in place to break knowledge boundaries.
                </div>
              </v-col>
              <v-col cols="0" sm="0" md="2"></v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="0" sm="0" md="2"></v-col>
              <v-col cols="12" sm="12" md="4" class="pa-5 mb-5">
                <div class="text-h5 mb-3">
                  <kbd>§§skillname</kbd
                  ><v-icon class="ml-5">mdi-format-section</v-icon>skillset
                </div>
                <div class="text-body-2">
                  Build in the open. Unleash your experience by setting the
                  stage with the required skillset to enhance your bits. Your
                  bits succeed in a targeted contexture.
                </div>
              </v-col>
              <v-col cols="12" sm="12" md="4" class="pa-5 mb-5"
                ><div class="text-h5 mb-3">
                  <kbd>~~sectorname</kbd
                  ><v-icon class="ml-5">mdi-chart-bubble</v-icon>influence
                  sectors
                </div>

                <div class="text-body-2">
                  Call to arms to get the most out of your bits. If skillset is
                  not enough to filter your audience then sectors can set
                  additional backdrop.
                </div>
              </v-col>
              <v-col cols="0" sm="0" md="2"></v-col>
            </v-row>
          </div>
        </v-scroll-x-transition>
        <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>
      </v-sheet>
    </vue-diagonal>
    <vue-diagonal :deg="-2" background="#39444b" space-after>
      <v-sheet color="transparent" min-height="50px"></v-sheet>
      <v-row no-gutters class="mb-5">
        <v-col class cols="12" sm="12" md="12">
          <v-item-group
            mandatory
            class="my-5 d-flex flex-wrap align-center justify-center"
            v-model="bit.brain.metadata.public"
          >
            <v-item :value="1" v-slot="{ active, toggle }">
              <v-chip
                outlined
                small
                :color="active ? '#32e0c4' : '#ffffff'"
                class="ma-3 px-5 d-flex align-center elevation-5"
                @click="toggle"
              >
                <check-icon v-if="active"></check-icon>
                <div class="pa-3 text-overline">Private</div>
              </v-chip>
            </v-item>

            <v-item :value="2" v-slot="{ active, toggle }">
              <v-chip
                outlined
                small
                :color="active ? '#32e0c4' : '#ffffff'"
                class="ma-3 px-5 d-flex align-center elevation-5"
                @click="toggle"
              >
                <check-icon v-if="active"></check-icon>
                <div class="pa-3 text-overline">Network</div>
              </v-chip>
            </v-item>

            <v-item :value="3" v-slot="{ active, toggle }">
              <v-chip
                outlined
                small
                :color="active ? '#32e0c4' : '#ffffff'"
                class="ma-3 px-5 d-flex align-center elevation-5"
                @click="toggle"
              >
                <check-icon v-if="active"></check-icon>
                <div class="pa-3 text-overline">Public</div>
              </v-chip>
            </v-item>
          </v-item-group>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="" cols="0" sm="0" md="4"> </v-col>
        <v-col
          class="d-flex align-center justify-center"
          cols="12"
          sm="12"
          md="4"
        >
          <v-btn
            rounded
            elevation="5"
            x-large
            style=""
            color="#32e0c4"
            class="px-15"
            @click="invokeSave"
            :loading="system.data.template.bits.loading"
          >
            UPDATE<v-icon class="pl-3" color="#39444b">mdi-hexagon</v-icon> BIT
          </v-btn>
        </v-col>
        <v-col
          class="d-flex align-center justify-space-between"
          cols="0"
          sm="0"
          md="4"
        >
        </v-col>
      </v-row>
      <v-sheet color="transparent" min-height="10px"></v-sheet>
      <v-sheet class="" color="#39444b" min-height="25">
        <v-row no-gutters>
          <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
          <v-col class="px-5" cols="12" sm="12" md="8" xl="6">
            <v-sheet class="px-5 mt-15" width="100%" color="transparent">
            </v-sheet>

            <div class="text-h4 text-left mt-15 white--text">
              <v-icon color="#32e0c4" size="32px">mdi-hexagon</v-icon>metadata
            </div>
            <div class="text-overline text-left mx-5 white--text">
              bit settings
            </div>
            <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

            <v-sheet
              class="d-flex justify-end align-center"
              color="transparent"
            >
              <div class="text-button">{{ bit.brain.title || 'UNTITLED' }}</div>
              <v-icon right>mdi-hexagon</v-icon>
            </v-sheet>
            <v-sheet
              class="d-flex justify-end align-center"
              color="transparent"
            >
              <div class="text-button">
                {{ $date(bit.brain.time_origin).fromNow() }}
              </div>
              <v-icon right>mdi-hexagon-slice-2</v-icon>
            </v-sheet>
            <v-sheet
              class="d-flex justify-end align-center"
              color="transparent"
            >
              <div class="text-button">{{ bit.wip }}</div>
              <v-icon right>mdi-arrow-up-bold-hexagon-outline</v-icon>
            </v-sheet>

            <v-sheet
              class="d-flex justify-start align-center"
              color="transparent"
            >
              <v-icon left>mdi-paper-roll-outline</v-icon>
              <div class="text-button">QUALITY</div>
            </v-sheet>
            <v-sheet
              class="d-flex justify-start align-center"
              color="transparent"
            >
              <v-icon left>mdi-hexagon-slice-4</v-icon>
              <div class="text-button">DEADLINE</div>
            </v-sheet>
            <!-- <v-sheet
              class="d-flex justify-start align-center"
              color="transparent"
            >
              <v-icon left>mdi-translate</v-icon>
              <div class="text-button">languages</div>
            </v-sheet>
            <v-sheet
              class="d-flex justify-start align-center"
              color="transparent"
            >
              <v-icon left>mdi-map-marker</v-icon>
              <div class="text-button">locations</div>
            </v-sheet> -->

            <v-sheet
              class="d-flex justify-end align-center"
              color="transparent"
            >
              <v-chip
                outlined
                label
                class="px-5 d-flex align-center elevation-0"
              >
                <div class="text-button">disconnect</div>
                <v-icon right>mdi-power-plug</v-icon>
              </v-chip>
            </v-sheet>

            <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

            <!-- <v-sheet
                class="d-flex mb-10"
                color="transparent"
                min-height="150px"
              ></v-sheet> -->
          </v-col>
          <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
        </v-row>
      </v-sheet>
    </vue-diagonal>

    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" cols="12" sm="12" md="8" xl="6">
        <v-sheet class="px-5 mt-15" width="100%" color="transparent"> </v-sheet>

        <div class="text-h4 text-left mt-15">
          <v-icon size="32px">mdi-flash</v-icon>brainstorms
        </div>
        <div class="text-overline text-left mx-5">xpert feedback</div>
        <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

        <!-- <v-avatar size="64" class="elevation-6">
          <v-img alt="" src="https://i.imgur.com/0Hk1Uye.jpg"></v-img>
        </v-avatar> -->

        <v-sheet class="" width="100%" color="transparent">
          <template v-for="(item, index) in bit.brain.brainstorms">
            <div :key="index">
              <v-card
                color="#ffffff"
                style="
                  min-width: 300px;
                  box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px;
                "
                class="py-3 px-3 ma-3"
              >
                <v-row>
                  <v-col cols="12" sm="12" class="d-flex align-center">
                    <vue-link
                      :to="'/s/' + item.sid + '/' + item.sis"
                      :external="false"
                      :new-tab="false"
                      class="text-button text-uppercase"
                    >
                      <hexagon-icon class="mr-2" color="#1d2226"></hexagon-icon>
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

        <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>
        <!-- <v-sheet
                class="d-flex mb-10"
                color="transparent"
                min-height="150px"
              ></v-sheet> -->
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" cols="12" sm="12" md="8" xl="6">
        <v-sheet class="px-5 mt-15" width="100%" color="transparent"> </v-sheet>

        <div class="text-h4 text-left mt-15">
          <v-icon size="32px">mdi-virus</v-icon>raw
        </div>
        <div class="text-overline text-left mx-5">anonymous feedback</div>
        <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

        <!-- <v-avatar size="64" class="elevation-6">
          <v-img alt="" src="https://i.imgur.com/0Hk1Uye.jpg"></v-img>
        </v-avatar> -->

        <!-- <v-card
          min-height="75px"
          color="#ffffff"
          class="px-5 ma-5 d-flex justify-space-between align-center"
          style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
        >
          <div class="text-button">work in progress</div>
          <v-icon color="#1d2226" size="32px">mdi-google-downasaur</v-icon>
        </v-card> -->

        <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

        <!-- <v-sheet
                class="d-flex mb-10"
                color="transparent"
                min-height="150px"
              ></v-sheet> -->
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" cols="12" sm="12" md="8" xl="6">
        <v-sheet class="px-5 mt-15" width="100%" color="transparent"> </v-sheet>

        <div class="text-h4 text-left mt-15">
          <v-icon size="32px">mdi-graph-outline</v-icon>bitplugs
        </div>
        <div class="text-overline text-left mx-5">linked downstream bits</div>
        <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

        <!-- <v-avatar size="64" class="elevation-6">
          <v-img alt="" src="https://i.imgur.com/0Hk1Uye.jpg"></v-img>
        </v-avatar> -->

        <!-- <v-card
          min-height="75px"
          color="#ffffff"
          class="px-5 ma-5 d-flex justify-space-between align-center"
          style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
        >
          <div class="text-button">work in progress</div>
          <v-icon color="#1d2226" size="32px">mdi-google-downasaur</v-icon>
        </v-card> -->

        <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

        <!-- <v-sheet
                class="d-flex mb-10"
                color="transparent"
                min-height="150px"
              ></v-sheet> -->
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="mb-10" sm="12" md="12">
        <v-sheet color="transparent" min-height="250px"> </v-sheet>
      </v-col>
    </v-row>

    <!-- <v-row no-gutters>
      <v-col sm="12" md="4"></v-col>
      <v-col sm="12" md="4">
        <v-sheet
          class="my-10 pa-10"
          color="#ccc"
          style="border-radius: 5px; border: 1px solid black"
        >
          <div class="mb-3 text-overline text-center">
            Developer Box Toolset
          </div>
          <v-btn class="mx-5" large color="#fcfcfc" @click="invokeLoad">
            Load Data
          </v-btn>

          <v-btn large color="#fcfcfc" @click="invokeRO"> Read Only </v-btn>
        </v-sheet>
      </v-col>
      <v-col sm="12" md="4"></v-col>
    </v-row> -->
  </div>
</template>

<script>
  import Header from '@editorjs/header'
  // import List from '@editorjs/list'
  import NestedList from '@editorjs/nested-list'
  // import LinkTool from '@editorjs/link'
  // import CodeTool from '@editorjs/code'
  import Paragraph from '@editorjs/paragraph'
  import Embed from '@editorjs/embed'
  import Checklist from '@editorjs/checklist'
  import Marker from '@editorjs/marker'
  import Delimiter from '@editorjs/delimiter'
  import SimpleImage from '@editorjs/simple-image'
  import Alert from 'editorjs-alert'

  // import Warning from '@editorjs/warning'
  // import Quote from '@editorjs/quote'
  import InlineCode from '@editorjs/inline-code'

  import Xlink from '@/plugins/bits/xlink'
  import '@/plugins/bits/xlink.css'

  import { mapState } from 'vuex'
  import store from '@/store'

  import { compressToUTF16 as lzcompress } from 'lz-string'
  // import { decompressFromUTF16 as lzdecompress } from 'lz-string'

  // import BlockSvg from '@/assets/svg/temp/chipblack.svg'

  export default {
    data() {
      return {
        config: {
          data: JSON.parse(store.get('bit/brain@data')),
          placeholder: 'Start here !',
          logLevel: 'ERROR',
          inlineToolbar: true,
          tools: {
            header: {
              class: Header,
              config: {
                levels: [1, 2, 3],
                defaultLevel: 1,
              },
              inlineToolbar: true,
            },
            list: {
              class: NestedList,
              inlineToolbar: true,
            },
            checklist: {
              class: Checklist,
            },
            xlink: {
              class: Xlink,
            },
            image: SimpleImage,
            paragraph: {
              class: Paragraph,
              inlineToolbar: true,
            },
            embed: {
              inlineToolbar: true,
              class: Embed,
              config: {
                services: {
                  youtube: true,
                  codepen: true,
                  gfycat: true,
                  vimeo: true,

                  coub: true,
                },
              },
            },
            Marker: {
              class: Marker,
              shortcut: 'CMD+SHIFT+M',
            },
            inlineCode: {
              class: InlineCode,
            },
            alert: {
              class: Alert,
              inlineToolbar: true,
              shortcut: 'CMD+SHIFT+A',
              config: {
                defaultType: 'info',
                messagePlaceholder: 'Alert/Info message',
              },
            },
            delimiter: Delimiter,
          },
        },
        countdown: true,
      }
    },
    components: { VueLink: () => import('vue-link') },
    computed: {
      ...mapState(['system', 'bit', 'xpert']),
    },
    beforeDestroy() {
      this.$refs.editor._data.state.editor.destroy()
    },

    methods: {
      onInitialized() {},
      async invokeSave() {
        this.system.data.template.bits.loading = true
        this.$refs.editor._data.state.editor
          .save()
          .then((data) => {
            console.log(data)
            const bitraw = JSON.stringify(data)
            const bitdata = lzcompress(bitraw)

            if (bitdata.length > 10000000) {
              store.dispatch('triggerNotification', {
                type: 'error',
                message: 'Bit Size Over Limit',
              })
              this.system.data.template.bits.loading = false
              return false
            }

            store
              .dispatch('bit/bitSave', {
                bitcode: this.bit.wip,
                content: { json: bitraw, metadata: this.bit.brain.metadata },
              })
              .then((result) => {
                console.log(result)
                store.set('bit/brain', result.data)
                this.invokeLoad()
                this.system.data.template.bits.loading = false
                store.dispatch('triggerNotification', {
                  type: 'success',
                  message: 'Bit Saved',
                })
              })
          })
          .catch((err) => {
            store.dispatch('triggerNotification', {
              type: 'error',
              message: 'Error Saving Data',
            })
            console.log(err)
            this.system.data.template.bits.loading = false
          })
      },
      invokeLoad() {
        this.$refs.editor._data.state.editor
          .render(JSON.parse(this.bit.brain.data))
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            // this.invokeLoadBackup()
            console.log(err)
          })
      },
      // invokeLoadBackup() {
      //   this.$refs.editor._data.state.editor
      //     .render(JSON.parse(this.bit.brain.backup))
      //     .then(() => {})
      //     .catch((err) => {
      //       store.dispatch('triggerNotification', {
      //         type: 'error',
      //         message: 'Error Loading Data',
      //       })
      //       console.log(err)
      //     })
      // },
      invokeRO() {
        this.$refs.editor._data.state.editor.readOnly.toggle()
      },
    },
  }
</script>

<style>
  .codex-editor {
    user-select: text;
    -ms-user-select: text;
    -moz-user-select: text;
    -webkit-user-select: text;
    width: 100%;
  }
  .ce-block__content,
  .ce-toolbar__content {
    max-width: unset;
    /* width: 100%; */
  }
  .ct--top:after {
    display: none;
  }
  .ct--shown {
    text-transform: uppercase !important;
    font-family: 'Montserrat', sans-serif !important;
  }

  .cdx-simple-image__caption .cdx-simple-image__caption,
  .cdx-simple-image__picture--with-border {
    border: 0px !important;
  }
  .cdx-simple-image__caption[contentEditable='true'][data-placeholder]:empty::before {
    content: none;
  }
  .embed-tool__caption[contentEditable='true'][data-placeholder]::before {
    content: none;
  }
  .cdx-simple-image__picture--with-background {
    background-color: #f7fafc;
  }
  .inline-code {
    font-family: monospace !important;
    padding: 2px;
    margin: 0 2px 0 2px;
  }
  .ce-paragraph {
    font-size: 1.4em;
    line-height: 1.3em;
    /* text-align: justify; */
    text-justify: inter-word;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .ce-toolbox {
    background: #f7fafc !important;
  }

  .cdx-checklist {
    font-size: 1.4em;
    line-height: 1.3em;
    /* text-align: justify; */
    text-justify: inter-word;
    padding-left: 24px;
  }
  .cdx-alert-dark {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: 0px !important;
  }
  .cdx-alert-secondary {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: 0px !important;
  }

  .cdx-nested-list {
    /* font-size: 1.3em; */
    font-size: 16px;
    /* line-height: 1.3em; */
    /* text-align: justify; */
    text-justify: inter-word;
    margin: 0;
    padding: 0;
  }

  .cdx-simple-image img {
    border-radius: 5px;
  }

  .cdx-simple-image input {
    padding: 10px;
    align-items: center;
    border-radius: 6px;
    display: inline-flex;
    flex: 0 0 auto;
    font-weight: 400;
    letter-spacing: 0;
    justify-content: center;
    outline: 0;
    position: relative;
    text-decoration: none;
    text-indent: 0;
    text-transform: uppercase;
    transition-duration: 0.28s;
    transition-property: box-shadow, transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
  .link-tool {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  }
  .cdx-simple-image__picture img {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }

  .ce-header {
    margin-bottom: 0.1em !important;
  }
  .ce-block {
    margin-bottom: 5px;
  }

  @media (max-width: 650px) {
    .ce-toolbar {
      box-shadow: none !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      border-bottom-color: #d5d7db;
    }
    .ce-paragraph {
      font-size: 1.2em;
      line-height: 1.2em;
    }
  }

  /* temp */
  /* https://getcssscan.com/css-box-shadow-examples */
</style>
