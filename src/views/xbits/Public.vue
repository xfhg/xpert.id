<template>
  <div>
    <v-btn
      fab
      fixed
      bottom
      right
      icon
      color="black"
      class="ma-5"
      @click="invokeFlame"
    >
      <v-icon dark>mdi-fire</v-icon>
    </v-btn>

    <!-- <v-speed-dial fab fixed bottom right color="#39444b" class="ma-5">
      <template v-slot:activator>
        <v-btn color="#39444b" icon fab x-large>
          <v-icon> mdi-hexagon-outline </v-icon>
        </v-btn>
      </template>
      <v-btn fab small href="/lab/storm">
        <v-icon>mdi-flash</v-icon>
      </v-btn>
      <v-btn fab small>
        <v-icon>mdi-flag</v-icon>
      </v-btn>
      <v-btn fab small>
        <v-icon>mdi-alert</v-icon>
      </v-btn>
    </v-speed-dial> -->

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
          <div class="text-button">{{ global.bit.slug || '' }}</div>
        </v-sheet>

        <v-sheet class="d-flex align-center justify-center" color="transparent">
          <div class="text-button">
            {{ global.bit.id.slice(24) }}
          </div>
          <v-icon right color="#f7fafc">mdi-hexagon</v-icon>
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
                    :onReady="onInitialized"
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
                <template v-for="item in global.bit.meta_xperts">
                  <div :key="item" class="my-3 mx-3">
                    <v-chip
                      class="elevation-0"
                      color="#39444b"
                      dark
                      outlined
                      label
                    >
                      <v-avatar left>
                        <v-icon color="#39444b">mdi-account-circle</v-icon>
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
                <template v-for="item in global.bit.meta_keywords">
                  <div :key="item" class="my-3 mx-3">
                    <v-chip
                      class="elevation-0"
                      color="#39444b"
                      dark
                      outlined
                      label
                    >
                      <v-avatar left>
                        <v-icon color="#39444b">mdi-pound-box</v-icon>
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
                <template v-for="item in global.bit.meta_chain">
                  <div :key="item" class="my-3 mx-3">
                    <v-chip
                      class="elevation-0"
                      color="#39444b"
                      dark
                      outlined
                      label
                    >
                      <v-avatar left>
                        <v-icon color="#39444b">mdi-hexagon-multiple</v-icon>
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
        <v-row no-gutters>
          <v-col class="" cols="0" sm="0" md="4"> </v-col>
          <v-col
            class="d-flex align-center justify-space-around"
            cols="12"
            sm="12"
            md="4"
          >
            <v-btn
              rounded
              elevation="1"
              style=""
              class="px-5"
              @click="invokeFlame"
            >
              <v-icon class="" color="#39444b">mdi-paper-roll</v-icon>
            </v-btn>
            <v-btn
              rounded
              elevation="5"
              x-large
              style=""
              color="#32e0c4"
              class="px-15"
              @click="invokeFlame"
            >
              <v-icon class="" color="#39444b">mdi-flash</v-icon>
            </v-btn>

            <v-btn
              rounded
              elevation="1"
              style=""
              class="px-5"
              @click="invokeFlame"
            >
              <v-icon class="" color="#39444b">mdi-pizza</v-icon>
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
      </v-sheet>
    </vue-diagonal>
    <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>
    <v-row no-gutters>
      <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" cols="12" sm="12" md="8" xl="6">
        <v-sheet class="px-5 mt-15" width="100%" color="transparent"> </v-sheet>

        <div class="text-h4 text-left mt-15">
          <v-icon size="32px" color="#39444b">mdi-flash</v-icon>brainstorms
        </div>
        <div class="text-overline text-left mx-5">xpert feedback</div>
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
          <v-icon size="32px" color="#39444b">mdi-virus</v-icon>mindbites
        </div>
        <div class="text-overline text-left mx-5">anonymous feedback</div>
        <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

        <!-- <v-avatar size="64" class="elevation-6">
          <v-img alt="" src="https://i.imgur.com/0Hk1Uye.jpg"></v-img>
        </v-avatar> -->

        <v-card min-height="75px" color="#ffffff" class="elevation-0 my-5">
          <ValidationObserver
            ref="validRaw"
            immediate
            v-slot="{ invalid, valid, handleSubmit }"
          >
            <v-form
              class="mt-5"
              ref="formRaw"
              v-model="validRaw"
              v-on:submit.prevent
            >
              <ValidationProvider
                name="Private Message"
                rules="required"
                v-slot="{ errors, valid }"
              >
                <v-textarea
                  class="mb-0 px-5"
                  solo
                  auto-grow
                  label="Message"
                  persistent-hint
                  persistent-placeholder
                  placeholder="stay classy"
                  hint="This message is anonymous to the platform"
                  :error-messages="errors"
                  :valid="valid"
                  maxlength="250"
                  counter
                  v-model="system.data.template.bits.raw"
                >
                </v-textarea>
              </ValidationProvider>

              <v-row no-gutters>
                <v-col
                  class="d-flex align-center justify-center mb-5"
                  cols="12"
                  sm="12"
                  md="3"
                >
                </v-col>
                <v-col
                  class="d-flex align-center justify-end mb-5 px-5"
                  cols="12"
                  sm="12"
                  md="9"
                >
                  <v-btn
                    :disabled="invalid || !valid"
                    color="#32e0c4"
                    @click="handleSubmit(validateRaw)"
                    large
                    class="px-10 mt-5"
                  >
                    SUBMIT RAW
                    <v-icon right>mdi-virus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </ValidationObserver>
        </v-card>

        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="150px"
        ></v-sheet>
      </v-col>
      <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
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

  // import BlockSvg from '@/assets/svg/temp/chipblack.svg'

  export default {
    data() {
      return {
        config: {
          data: JSON.parse(store.get('global/bit@data')),
          placeholder: 'Loading',
          logLevel: 'ERROR',
          readOnly: true,
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
        validRaw: false,
      }
    },
    components: {},
    computed: {
      ...mapState(['system', 'bit', 'global']),
    },
    beforeDestroy() {
      this.$refs.editor._data.state.editor.destroy()
    },

    methods: {
      onInitialized() {
        this.invokeRO()
      },

      validateRaw() {
        console.log(this.$refs.validRaw.validate())
      },

      invokeRO() {
        this.$refs.editor._data.state.editor.readOnly.toggle()
      },
      invokeFlame() {
        store.dispatch('bit/flameAction', {})
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
  .cdx-simple-image__caption {
    text-align: center;
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
    padding-left: 24px;
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

  .ce-header {
    margin-bottom: 0.1em !important;
  }
  .ce-block {
    margin-bottom: 25px;
  }
  .codex-editor__redactor {
    padding-bottom: 50px !important;
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

  /* this is for the editor */
  .ql-toolbar {
    border-radius: 5px 5px 0px 0px;
    border: 1px solid rgba(0, 0, 0, 0.47);
  }
  .ql-container {
    border-radius: 0px 0px 5px 5px;
    border: 1px solid rgba(0, 0, 0, 0.47);
  }
  .ql-editor {
    user-select: text;
    -ms-user-select: text;
    -moz-user-select: text;
    -webkit-user-select: text;
    background: white;
    box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px;
    border-radius: 5px;
  }

  .wrap-text {
    -webkit-line-clamp: unset !important;
  }
  /* temp */
  /* https://getcssscan.com/css-box-shadow-examples */
</style>
