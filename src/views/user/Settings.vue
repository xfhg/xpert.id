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
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="6">
        <v-card class="elevation-0 mx-1 mb-5 pa-1" color="#fff">
          <v-row no-gutters>
            <v-col class cols="12" sm="12" md="12">
              <div class="d-flex align-center">
                <div class="text-button text-left">Platform settings</div>
                <v-divider class="mx-2"></v-divider>
                <Logo
                  lwidth="32px"
                  lheight="32px"
                  lfill="#97a0a6"
                  lstroke="#f6f9fc"
                  class="mx-2"
                />
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-sheet height="50px" width="100%" color="transparent"> </v-sheet>

    <DividerTop dcolor="f6f9fc"></DividerTop>
    <v-sheet class="pb-5" color="#f6f9fc" min-height="25">
      <v-row no-gutters>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
        <v-col class="" sm="12" md="8" xl="6">
          <!-- <v-tabs color="deep-purple accent-4" center-active>
          <v-tab>XPERT ID</v-tab>
          <v-tab>ACADEMY</v-tab>
          <v-tab>TALENT <v-icon>mdi-star</v-icon></v-tab>

          <v-tab-item v-for="n in 3" :key="n">
            <v-container fluid>
              <v-row>
                <v-col v-for="i in 6" :key="i" cols="12" md="4">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${
                      i * n * 5 + 10
                    }`"
                    :lazy-src="`https://picsum.photos/10/6?image=${
                      i * n * 5 + 10
                    }`"
                    aspect-ratio="1"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs> -->

          <v-tabs
            show-arrows
            grow
            class="px-5"
            color="#52616b"
            background-color="#f6f9fc"
          >
            <v-tab>
              <v-icon left small>mdi-triangle-outline</v-icon>XPERT ID
            </v-tab>
            <v-tab>
              <v-icon left small>mdi-rhombus-outline</v-icon>ACADEMY
            </v-tab>
            <v-tab
              ><v-icon left small>mdi-pentagon-outline</v-icon>TALENT
            </v-tab>
            <v-tab><v-icon left small>mdi-hexagon-outline</v-icon>NOMAD </v-tab>

            <v-tab-item
              transition="fade-transition"
              eager
              class="pa-1"
              style="background-color: #f6f9fc"
            >
              <v-card class="elevation-3 mt-10 pa-10 mb-5" color="white">
                <div class="text-h4 mb-10">Privacy Switchboard</div>

                <v-row no-gutters>
                  <v-col class cols="12" sm="12" md="6" xl="6">
                    <v-subheader
                      ><v-icon left small>mdi-triangle-outline</v-icon>XPERT
                      Public Network</v-subheader
                    >
                    <v-subheader
                      >The following sections can be hidden from your PUBLIC
                      profile by deselecting them.
                    </v-subheader>

                    <v-list color="transparent">
                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              v-model="xpert.data.privacy"
                              color="#32e0c4"
                              value="profile"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Profile</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              v-model="xpert.data.privacy"
                              color="#32e0c4"
                              value="picture"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title
                              >Profile Picture</v-list-item-title
                            >
                            <v-list-item-subtitle class="text-wrap"
                              >Reduce unconscious bias ?</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="role"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Profession</v-list-item-title>
                            <v-list-item-subtitle class="text-wrap"
                              >Main role & company</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="bio"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Short Bio</v-list-item-title>
                            <v-list-item-subtitle class="text-wrap"
                              >Your Elevator Pitch</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="skillset"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Skillset</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="experience"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Experience</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="featured"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Featured</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="portfolio"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Portfolio</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="employment"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Employment</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="education"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Education</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="socials"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title
                              >Social Handles</v-list-item-title
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="contacts"
                              multiple
                              disabled
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title
                              >Direct Contact</v-list-item-title
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list>
                  </v-col>
                  <v-col class cols="12" sm="12" md="6" xl="6">
                    <v-subheader
                      ><v-icon left small>mdi-rhombus-outline</v-icon>ACADEMY
                      Extra Profile Sections</v-subheader
                    >
                    <!-- <v-subheader
                    >The following sections will remain visible inside the
                    Academy for registered users</v-subheader
                  > -->
                    <v-list color="transparent">
                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              disabled
                              v-model="xpert.data.privacy"
                              value="mentor"
                              multiple
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Mentor</v-list-item-title>
                            <v-list-item-subtitle class="text-wrap"
                              >Your mentoring catalogue and slot booking
                              section</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="brainstorm"
                              multiple
                              disabled
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Brainstorms</v-list-item-title>
                            <v-list-item-subtitle class="text-wrap"
                              >List of the brainstorms you worked
                              on</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="karma"
                              multiple
                              disabled
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Karma</v-list-item-title>
                            <v-list-item-subtitle class="text-wrap"
                              >Your academy stats and
                              reviews</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list>

                    <v-subheader
                      ><v-icon left small>mdi-pentagon-outline</v-icon>TALENT
                      Extra Profile Sections
                    </v-subheader>
                    <!-- <v-subheader
                    >The following sections will remain visible inside the
                    Talent Network for registered users</v-subheader
                  > -->

                    <v-list color="transparent">
                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="jobs"
                              multiple
                              disabled
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Job Board</v-list-item-title>
                            <v-list-item-subtitle class="text-wrap"
                              >Your active posted jobs</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>

                      <v-list-item>
                        <template>
                          <v-list-item-action>
                            <v-checkbox
                              color="#32e0c4"
                              v-model="xpert.data.privacy"
                              value="collabs"
                              multiple
                              disabled
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Collaborate</v-list-item-title>
                            <v-list-item-subtitle class="text-wrap"
                              >Your active collaboration
                              gigs</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
                <v-row justify="space-between">
                  <v-col class="text-center" cols="12">
                    <v-alert
                      class="my-10"
                      v-model="infoPrivacy"
                      dismissible
                      transition="scale-transition"
                      color="#293136"
                      dark
                      dense
                      icon="mdi-school"
                      prominent
                      elevation="5"
                    >
                      Help Lorem Ipsum
                    </v-alert>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col
                    class="d-flex align-center justify-center mb-5"
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-btn
                      text
                      color="#293136"
                      @click="infoPrivacy = !infoPrivacy"
                    >
                      <v-icon dark>mdi-information</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col
                    class="d-flex align-center justify-center mb-5 px-5"
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-btn
                      :disabled="!validPrivacy"
                      block
                      rounded
                      color="#32e0c4"
                      @click="validatePrivacy"
                      x-large
                    >
                      Update Settings
                      <v-icon dark right>mdi-eye</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
            <v-tab-item
              transition="fade-transition"
              eager
              style="background-color: #f6f9fc"
              class="pa-1"
            >
              <v-card class="elevation-3 mt-10 pa-10 mb-5" color="white">
                {{ xpert.data.privacy }}
              </v-card>
            </v-tab-item>
            <v-tab-item
              transition="fade-transition"
              eager
              style="background-color: #f6f9fc"
              class="pa-1"
            >
              <v-card class="elevation-3 mt-10 pa-10 mb-5" color="white">
                {{ xpert.data.privacy }}
              </v-card>
            </v-tab-item>
            <v-tab-item
              transition="fade-transition"
              eager
              style="background-color: #f6f9fc"
              class="pa-1"
            >
              <v-card class="elevation-3 mt-10 pa-10 mb-5" color="white">
                {{ xpert.data.privacy }}
              </v-card>
            </v-tab-item>
          </v-tabs>

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
                lwidth="64px"
                lheight="64px"
                lfill="#f6f9fc"
                lstroke="#f6f9fc"
                class="ma-5"
              />
              <v-divider></v-divider>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      </v-row>
    </v-sheet>
    <DividerBottom dcolor="f6f9fc"></DividerBottom>
    <v-row no-gutters>
      <v-col class cols="12" sm="0" md="1" xl="1"> </v-col>
      <v-col class cols="12" sm="12" md="10" xl="10">
        <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet>
        <v-row no-gutters>
          <v-col class cols="12" sm="12" md="12" xl="12">
            <v-sheet
              class="pa-5 mb-15"
              width="100%"
              height=""
              color="transparent"
            >
              <div class="text-h3 mt-10 text--pink">Your Data</div>
              <div class="text-overline ml-5">
                Privacy · Security · Compliance
              </div>

              <v-card class="elevation-5 mx-5 mb-5 mt-15 pa-10" color="white">
                {{ xpert.data.privacy }}
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
      <v-col class cols="12" sm="0" md="1" xl="1"></v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from '@/components/main/Logo'
import { mapState } from 'vuex'
import store from '@/store'
import { DateTime } from 'luxon'
import { continents, countries, languages, languagesAll } from 'countries-list'
import _ from 'lodash'
import DividerTop from '@/components/divider/DividerTop'
import DividerBottom from '@/components/divider/DividerBottom'

export default {
  data: () => ({
    validPrivacy: true,
    infoPrivacy: false,
  }),
  computed: {
    ...mapState(['user', 'xpert', 'system']),
  },
  components: {
    Logo,
    DividerTop,
    DividerBottom,
  },
  methods: {
    timeNowLux() {
      var iso = DateTime.fromISO('2017-05-15T09:10:23')
      console.log(iso.zoneName)
      console.log(
        this.$luxon('2020-10-05 22:36', {
          input: { format: 'yyyy-MM-dd HH:mm', zone: 'Asia/Tokyo' },
          output: { format: 'yyyy-MM-dd HH:mm', zone: 'utc' },
        })
      )
      console.log(continents)
      console.log(_.values(countries))
      console.log(languages)
      console.log(languagesAll)
    },
    validatePrivacy() {
      const privacyNetwork = this.xpert.data.privacy

      console.log(privacyNetwork)

      store
        .dispatch('xpert/backendOfflineUpdateAction', {
          data: {
            privacy: JSON.parse(JSON.stringify(privacyNetwork)),
          },
          collection: 'xperts',
          direct: true,
        })
        .then(function () {
          store.dispatch('triggerNotification', {
            type: 'success',
            message: 'Privacy Settings Updated',
          })

          store.dispatch('xpert/xpertSetPublicPrivacy', {})
          // store.dispatch('xpert/xpertGetPublicProfileNonAuth', {})
        })
    },
  },
}
</script>

<style>
/* hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #f7fafc !important;
  margin: 1em 0;
  padding: 0;
} */
/* white space in between tabs*/
.theme--light.v-tabs-items {
  background-color: #f6f9fc !important;
}
</style>