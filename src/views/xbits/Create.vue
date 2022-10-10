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

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="2"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="8">
        <v-row no-gutters>
          <v-col class="" cols="12" sm="12" md="12"> </v-col>
        </v-row>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="2"></v-col>
    </v-row>

    <vue-diagonal :deg="-2" background="#f7fafc" space-before>
      <v-sheet color="transparent" min-height="850px">
        <v-row no-gutters>
          <v-col class="" sm="12" md="12">
            <v-sheet
              class="d-flex"
              color="transparent"
              min-height="25px"
            ></v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="0" md="1" xl="2"></v-col>
          <v-col class="px-5" sm="12" md="8" xl="6">
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
          <v-col class="px-3 mb-10" cols="12" sm="0" md="2" xl="2">
            <div class="d-flex align-center justify-space-around">
              <v-switch
                v-model="system.data.template.bits.guidelines"
                color="#39444b"
                class="mt-5"
              >
                <template v-slot:label>
                  <v-icon color="#39444b" class="">mdi-information</v-icon>
                  <div class="text-button">premise</div>
                </template>
              </v-switch>
            </div>

            <v-scroll-x-transition>
              <v-sheet
                v-if="system.data.template.bits.guidelines"
                color="transparent"
              >
                <div class="text-h5 mt-5">
                  <v-icon color="#39444b" class="pb-5">mdi-hexagon</v-icon>xpert
                  bits
                </div>

                <div class="text-body-2">
                  A knowledge bit is the first class citizen of xpert.id
                  platform. It is as blank canvas for thought provoking problem
                  statements, disruptive story telling, or simply a brain dump
                  napkin note. Mind map an hypothesis, set tasks and goals... it
                  is your growth blueprint
                </div>
                <div class="text-h5 mt-10 mb-3">
                  brain<v-icon color="#39444b">mdi-flash</v-icon>storm
                </div>
                <div class="text-body-2">
                  The key reason of its existence is to be brainstormed by
                  another xpert. Pick as many brains as you can to enhance your
                  canvas. Execution is imminent
                </div>

                <div class="text-h5 mt-10 mb-3">
                  collab<v-icon color="#39444b"
                    >mdi-account-supervisor-circle</v-icon
                  >rate
                </div>

                <div class="text-body-2">
                  What is an idea without an audience ? Challenge those who are
                  pursuing success without shortcuts, uplifting, pragmatic, goal
                  oriented and disciplined xperts
                </div>

                <div class="text-h5 mt-10 mb-3">
                  now<v-icon color="#39444b" class="mx-1"
                    >mdi-rocket-launch</v-icon
                  >execute
                </div>
                <div class="text-body-2 mb-15">
                  No more excuses, time is ticking, creativity is just
                  connecting things. Uncertainty is where we learn, just f*cking
                  do it
                </div>
              </v-sheet></v-scroll-x-transition
            >
          </v-col>
          <v-col cols="12" sm="0" md="1" xl="2"></v-col>
        </v-row>
      </v-sheet>
      <v-row no-gutters>
        <v-col cols="12" sm="0" md="2" xl="2"></v-col>
        <v-col
          class="d-flex justify-space-between align-center px-5 mb-15"
          sm="12"
          md="8"
          xl="8"
        >
          <v-sheet class="d-flex justify-start align-center" color="transparent"
            ><div class="text-button">X</div>
            <v-icon color="#39444b">mdi-hexagon</v-icon>
            <div class="text-button">bit</div>
          </v-sheet>

          <v-sheet
            class="d-flex align-center justify-center"
            color="transparent"
          >
            <!-- <div class="text-button">DRAFT NOT YET SAVED</div> -->
            <v-icon color="#39444b">mdi-hexagon-outline</v-icon>

            <v-icon color="#39444b">mdi-hexagon</v-icon>
            <div class="text-overline">hivemind</div>
            <v-icon color="#39444b">mdi-hexagon-outline</v-icon>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="0" md="2" xl="2"></v-col>
      </v-row>
    </vue-diagonal>
    <vue-diagonal :deg="-2" background="#39444b" space-after>
      <v-sheet color="transparent" min-height="25px"></v-sheet>

      <v-row no-gutters>
        <v-col
          class="d-flex align-center justify-space-between"
          cols="0"
          sm="0"
          md="4"
        >
        </v-col>
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
            <template v-slot:loader>
              <span>
                Linking to the network
                <v-progress-circular
                  indeterminate
                  size="24"
                  width="2"
                  color="black"
                  class="ml-5"
                ></v-progress-circular
              ></span>
            </template>
            Create Knowledge
            <v-icon class="mx-1">mdi-hexagon-outline</v-icon> BIT
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
      <v-sheet color="transparent" min-height="25px"></v-sheet>
      <v-sheet class="d-flex justify-center align-center" color="transparent">
        <!-- <v-btn text @click="invokeSave"> -->

        <div class="text-button white--text">S.M.A.R.T. DEADLINE</div>
        <!-- </v-btn> -->
      </v-sheet>
      <v-row no-gutters class="mb-5">
        <v-col class cols="12" sm="12" md="12">
          <v-item-group
            mandatory
            class="my-5 d-flex flex-wrap align-center justify-center"
            v-model="system.data.template.bits.deadline"
          >
            <v-item :value="1" v-slot="{ active, toggle }">
              <v-chip
                outlined
                :color="active ? '#32e0c4' : '#ffffff'"
                class="ma-3 px-5 d-flex align-center elevation-1"
                @click="toggle"
              >
                <flag-icon stroke-width="1" v-if="active"></flag-icon>
                <div class="pa-3 text-overline">15 days</div>
              </v-chip>
            </v-item>

            <v-item :value="2" v-slot="{ active, toggle }">
              <v-chip
                outlined
                small
                :color="active ? '#32e0c4' : '#ffffff'"
                class="ma-3 px-5 d-flex align-center elevation-1"
                @click="toggle"
              >
                <flag-icon stroke-width="1" v-if="active"></flag-icon>
                <div class="pa-3 text-overline">30 days</div>
              </v-chip>
            </v-item>

            <v-item :value="3" v-slot="{ active, toggle }">
              <v-chip
                outlined
                small
                :color="active ? '#32e0c4' : '#ffffff'"
                class="ma-3 px-5 d-flex align-center elevation-1"
                @click="toggle"
              >
                <flag-icon stroke-width="1" v-if="active"></flag-icon>
                <div class="pa-3 text-overline">45 days</div>
              </v-chip>
            </v-item>
          </v-item-group>
        </v-col>
      </v-row>

      <v-sheet class="d-flex justify-center align-center" color="transparent">
        <!-- <v-btn text @click="invokeSave"> -->
        <div class="text-button">private by default</div>
        <v-icon class="mx-3">mdi-cog-outline</v-icon>
        <div class="text-button">settings after saving</div>
        <!-- </v-btn> -->
      </v-sheet>
      <v-sheet color="transparent" min-height="25px"></v-sheet>
    </vue-diagonal>

    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="10px"
    ></v-sheet>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="0" sm="12" md="6" class="pa-5 mt-10">
        <div class="text-h4 mb-10 text-center">
          What's in a BIT
          <v-icon color="#39444b" class="pb-4">mdi-help-circle</v-icon>
          Execution
          <v-icon color="#39444b" class="pb-4">mdi-rocket-launch</v-icon>
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-5">
        <div class="text-h5 mb-3">
          transient<v-icon>mdi-graph</v-icon>energy
        </div>
        <div class="text-body-2">
          Short lived knowledge bits to be executed promptly. Maximum of 45 days
          and no archival. Make it count, storm it efficiently. Debrief,
          repurpose and repeat.
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-5"
        ><div class="text-h5 mb-3">
          resolute<v-icon>mdi-paper-roll-outline</v-icon>quality
        </div>

        <div class="text-body-2">
          Its quality is peer reviewed and timebound. Take advantage of
          anonymous feedback and a hivemind of xperts ready to brainstorm your
          bits.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-5">
        <div class="text-h5 mb-3">
          exaptation<v-icon>mdi-hexagon-multiple</v-icon>hive
        </div>
        <div class="text-body-2">
          Serendipity ? Discovery ? Organise your active knowledge bits in a
          chain of related problem statements. Let the brains do the heavy
          lifting.
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-5"
        ><div class="text-h5 mb-3">
          insight<v-icon>mdi-pound-box</v-icon>appetite
        </div>

        <div class="text-body-2">
          Classify your data to get the most out of our network. Topics,
          interests and trends will bring relevant xperts to your whiteboard.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>

    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="50px"
    ></v-sheet>

    <v-row no-gutters>
      <v-col class="mb-10" sm="12" md="12">
        <v-sheet color="transparent" min-height="150px"> </v-sheet>
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
        formBit: null,

        config: {
          placeholder: '⇥ Start here, hit TAB for block options',
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
                  imgur: true,
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
      }
    },
    components: {},
    computed: {
      ...mapState(['system', 'user']),
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
            console.log(this.user.data)
            store
              .dispatch('bit/bitCreate', {
                content: { json: bitraw },
                deadline: this.system.data.template.bits.deadline,
                owner: this.user.data.graph_id,
              })
              .then(() => {
                this.system.data.template.bits.loading = false
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
        // this.$refs.editor._data.state.editor
        //   .render(JSON.parse(lzdecompress(this.system.xbits)))
        //   .then((data) => {
        //     console.log(data)
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })
      },
      invokeRO() {
        this.$refs.editor._data.state.editor.readOnly.toggle()
      },
      invokeBooks() {
        store.dispatch('user/booksAPI').then((response) => {
          console.log(response)
        })
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
  }
  .ct--shown {
    text-transform: uppercase !important;
    font-family: 'Montserrat', sans-serif !important;
  }

  .cdx-simple-image__caption .cdx-simple-image__caption,
  .cdx-simple-image__picture--with-border {
    border: 0px !important;
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
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .ce-toolbox {
    background: #f7fafc !important;
  }

  .cdx-checklist {
    font-size: 1.4em;
    line-height: 1.3em;
    /* text-align: justify; */
    text-justify: inter-word;
  }

  .cdx-list {
    font-size: 1.3em;
    line-height: 1.3em;
    /* text-align: justify; */
    text-justify: inter-word;
  }

  .cdx-simple-image img {
    border-radius: 5px;
  }
  /* .cdx-input {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            border: 0px !important;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text-align: center;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            box-shadow: none;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          } */
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

  .ce-header {
    margin-bottom: 0.1em !important;
  }
</style>
