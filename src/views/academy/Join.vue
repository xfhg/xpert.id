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

    <v-btn
      fab
      fixed
      bottom
      right
      icon
      color="black"
      class="ma-5"
      @click="slots"
    >
      <v-icon dark>mdi-star</v-icon>
    </v-btn>

    <v-row no-gutters>
      <v-col class="" sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="25px"
        ></v-sheet>
      </v-col>
    </v-row>

    <vue-diagonal :deg="-2" background="#39444b">
      <v-sheet class="" color="#39444b" min-height="25">
        <v-row no-gutters>
          <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
          <v-col class="px-5" cols="12" sm="12" md="8" xl="6">
            <v-sheet class="px-5 mt-15" width="100%" color="transparent">
            </v-sheet>

            <div class="text-h3 text-left mt-15 white--text">Mentorship</div>
            <div class="text-overline text-left mx-5 white--text">
              setup your shift availability
            </div>
            <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet>

            <ValidationObserver
              ref="formMentor"
              immediate
              v-slot="{ invalid, valid, handleSubmit }"
            >
              <v-form
                ref="formMentor"
                v-model="validMentor"
                v-on:submit.prevent
              >
                <v-card
                  class="elevation-0 mx-auto mb-0 pa-5"
                  color="transparent"
                >
                  <div class="my-5 text-overline text-right white--text">
                    Skills available for Mentorship
                  </div>

                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="12">
                      <ValidationProvider
                        name="EXP Skill"
                        rules="required"
                        v-slot="{ errors, valid }"
                      >
                        <v-autocomplete
                          class=""
                          v-model="system.data.template.academy.shitf_skill"
                          :items="xpert.data.experience"
                          solo
                          hide-no-data
                          multiple
                          :error-messages="errors"
                          :valid="valid"
                          label="Experience"
                          item-text="exp_entity"
                          return-object
                          clearable
                          :search-input.sync="searchInputshift_skill"
                          @change="searchInputshift_skill = ''"
                        >
                          <template v-slot:selection="data">
                            <v-chip
                              v-bind="data.attrs"
                              :input-value="data.selected"
                              outlined
                            >
                              <v-avatar left>
                                <check-icon stroke-width="1" />
                              </v-avatar>
                              {{ data.item.exp_entity }}
                            </v-chip>
                          </template>
                          <template v-slot:item="data">
                            <template>
                              <jump-rope-icon
                                stroke-width="1"
                                class="mr-2"
                              ></jump-rope-icon>
                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.exp_entity"
                                ></v-list-item-title>
                                <!-- <v-list-item-subtitle>
                                {{ data.item.exp_industry }}
                              </v-list-item-subtitle> -->
                                <v-list-item-action-text>
                                  {{ data.item.exp_level.name }} -
                                  {{ data.item.exp_skill.skill_length }} YR
                                  Experience
                                </v-list-item-action-text>
                              </v-list-item-content>
                            </template>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                  </v-row>

                  <div class="my-5 text-overline text-right white--text">
                    Mentorship Slot duration
                  </div>

                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="4"> </v-col>
                    <v-col class cols="12" sm="12" md="8">
                      <ValidationProvider
                        name="Slot Duration"
                        rules="required"
                        v-slot="{ errors, valid }"
                      >
                        <v-autocomplete
                          v-model="academy.data.mentorship_duration"
                          :items="system.data.academy.slot_duration"
                          solo
                          hide-no-data
                          multiple
                          class="mb-5"
                          :error-messages="errors"
                          :valid="valid"
                          label="Duration"
                          item-text="name"
                          append-icon="mdi-progress-clock"
                          return-object
                          :search-input.sync="searchInputmentorship_duration"
                          @change="searchInputmentorship_duration = ''"
                          :value="academy.data.mentorship_duration"
                        >
                          <template v-slot:item="data">
                            <template>
                              <v-list-item-avatar>
                                <clock-icon stroke-width="1" />
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                  </v-row>

                  <div class="my-5 text-overline text-right white--text">
                    Availability - Hours
                  </div>

                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="6">
                      <ValidationProvider
                        name="Hours Start"
                        rules="required"
                        v-slot="{ errors, valid }"
                      >
                        <v-autocomplete
                          v-model="academy.data.mentorship_hour_start"
                          :items="system.data.academy.slot_hours"
                          solo
                          hide-no-data
                          class="mb-5 mr-2"
                          :error-messages="errors"
                          :valid="valid"
                          label="Available from"
                          item-text="name"
                          append-outer-icon="mdi-progress-clock"
                          return-object
                          :search-input.sync="searchInputmentorship_hour_start"
                          @change="searchInputmentorship_hour_start = ''"
                          :value="academy.data.mentorship_hour_start"
                        >
                          <template v-slot:item="data">
                            <template>
                              <v-list-item-avatar>
                                <clock-icon stroke-width="1" />
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                    <v-col class cols="12" sm="12" md="6">
                      <ValidationProvider
                        name="Hours End"
                        rules="required"
                        v-slot="{ errors, valid }"
                      >
                        <v-autocomplete
                          v-model="academy.data.mentorship_hour_end"
                          :items="system.data.academy.slot_hours"
                          solo
                          hide-no-data
                          class="mb-5"
                          :error-messages="errors"
                          :valid="valid"
                          label="to"
                          item-text="name"
                          append-icon="mdi-progress-clock"
                          return-object
                          :search-input.sync="searchInputmentorship_hour_end"
                          @change="searchInputmentorship_hour_end = ''"
                          :value="academy.data.mentorship_hour_end"
                        >
                          <template v-slot:item="data">
                            <template>
                              <v-list-item-avatar>
                                <clock-icon stroke-width="1" />
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                  </v-row>

                  <div class="my-5 text-overline text-right white--text">
                    Availability - Days
                  </div>

                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="6">
                      <div
                        class="d-flex flex-wrap align-center justify-space-around"
                      >
                        <v-switch
                          v-model="academy.data.coaching_status"
                          class="ma-5 text-center"
                          inset
                          dark
                          color="#fff"
                        >
                          <template v-slot:label>
                            <div
                              class="text-overline text-center mx-5 white--text"
                            >
                              24h buffer to book
                            </div>
                          </template>
                        </v-switch>
                      </div>
                    </v-col>
                    <v-col class cols="12" sm="12" md="6">
                      <ValidationProvider
                        name="Slot Active weekdays"
                        rules="required"
                        v-slot="{ errors, valid }"
                      >
                        <v-autocomplete
                          v-model="academy.data.mentorship_weekdays"
                          :items="system.data.academy.slot_weekdays"
                          solo
                          hide-no-data
                          class=""
                          multiple
                          :error-messages="errors"
                          :valid="valid"
                          label="Available on"
                          item-text="name"
                          append-icon="mdi-calendar"
                          return-object
                          :search-input.sync="searchInputmentorship_weekdays"
                          @change="searchInputmentorship_weekdays = ''"
                          :value="academy.data.mentorship_weekdays"
                        >
                          <template v-slot:item="data">
                            <template>
                              <v-list-item-avatar>
                                <minus-vertical-icon stroke-width="1" />
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </template>
                        </v-autocomplete>
                      </ValidationProvider>
                    </v-col>
                  </v-row>

                  <v-row no-gutters>
                    <v-col class="mb-5" cols="12" sm="12" md="12">
                      <div
                        class="mb-5 pl-1 text-overline text-right white--text"
                      >
                        Confirmation Message
                      </div>
                      <ValidationProvider
                        name="Confirmation Message"
                        rules=""
                        v-slot="{ errors, valid }"
                      >
                        <v-textarea
                          class="mb-0"
                          solo
                          v-model="academy.data.brainstorm_storm_confirmation"
                          auto-grow
                          label="Message"
                          placeholder="Use this confirmation message for meeting room passwords, FAQs, preparation info, disclaimers or just to break the ice"
                          :error-messages="errors"
                          :valid="valid"
                          maxlength="250"
                          counter
                        >
                        </v-textarea>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col
                      class="d-flex flex-wrap align-top justify-space-around"
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <div class="text-caption px-5 mb-5 white--text">
                        On each booked slot a private room URL will be generated
                        but you can also provide your own Meetup/Zoom/Teams
                        custom meeting endpoint :
                      </div>
                    </v-col>
                    <v-col class cols="12" sm="12" md="6">
                      <ValidationProvider
                        name="Storm URL"
                        rules="url"
                        v-slot="{ errors, valid }"
                      >
                        <v-text-field
                          class="mb-1"
                          v-model="academy.data.brainstorm_storm_media"
                          label="Your Custom Meeting URL"
                          hint=""
                          color="#32e0c4"
                          solo
                          :error-messages="errors"
                          :valid="valid"
                          maxlength="512"
                          append-icon="mdi-link"
                        ></v-text-field>
                      </ValidationProvider>
                    </v-col>
                  </v-row>

                  <!-- <span v-html="xpert.data.profile.bio"></span> -->
                </v-card>

                <!-- <v-sheet class="pa-5" width="100%" color="transparent">
                <vc-calendar
                  is-expanded
                  :columns="$screens({ default: 1, lg: 2 })"
                  :min-date="new Date()"
                />
              </v-sheet> -->
                <v-sheet height="50px" width="100%" color="transparent">
                </v-sheet>

                <v-row no-gutters>
                  <v-col
                    class="d-flex align-center justify-center mb-5"
                    cols="12"
                    sm="12"
                    md="4"
                  >
                    <v-btn disabled text color="#293136">
                      <v-icon dark>mdi-information</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col
                    class="d-flex align-center justify-center mb-5 px-5"
                    cols="12"
                    sm="12"
                    md="8"
                  >
                    <v-btn
                      :disabled="invalid || !valid"
                      color="#32e0c4"
                      @click="handleSubmit(validateMentor)"
                      block
                      rounded
                      x-large
                    >
                      Update your availability
                      <v-icon right>mdi-brain</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </ValidationObserver>
            <!--           
          <v-card
            class="mx-1 mb-5 pa-1"
            min-height="125px"
            color="#fff"
            style="box-shadow: inset 0 0 10px #39444b"
          >
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
      </v-sheet>
    </vue-diagonal>
    <vue-diagonal :deg="-2" background="#1d2226" space-after>
      <v-row no-gutters>
        <v-col
          class="d-flex align-center justify-center my-5"
          cols="12"
          sm="12"
          md="12"
        >
          <v-icon size="64" color="white">mdi-plus</v-icon>
        </v-col>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
        <v-col class="px-5" cols="12" sm="12" md="8" xl="4"> </v-col>
        <v-col class cols="1" sm="0" md="2" xl="4"></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
        <v-col class="px-5" cols="12" sm="12" md="8" xl="6">
          <div class="my-5 text-overline text-center white--text">
            Accelerate new founders with your startup experience
          </div>
          <v-row no-gutters>
            <v-col class cols="12" sm="12" md="12">
              <v-item-group
                class="my-5 d-flex flex-wrap align-center justify-space-between"
                multiple
              >
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">Founder Day Planning</div>
                  </v-chip>
                </v-item>

                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">
                      Idea Validation / Product Market Fit
                    </div>
                  </v-chip>
                </v-item>

                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">
                      Form a Startup / Incorporate
                    </div>
                  </v-chip>
                </v-item>

                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">
                      Business Planning / Startup Finance
                    </div>
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">
                      Product Development / Marketing Automation
                    </div>
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">
                      Customer Acquisition / Success
                    </div>
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">
                      Culture Creation / Mindset Coaching
                    </div>
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">
                      Funding Advice / Bootstrapping
                    </div>
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">
                      Public Relations / Social Media
                    </div>
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">
                      Growth Hacking / Optimisation
                    </div>
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    :color="active ? '#0c0c0c' : '#39444b'"
                    class="ma-2 px-5 d-flex align-center"
                    dark
                    @click="toggle"
                  >
                    <check-icon v-if="active"></check-icon>
                    <div class="pa-3 text-button">
                      Frustration / Burnout Recovery
                    </div>
                  </v-chip>
                </v-item>
              </v-item-group>
            </v-col>
          </v-row>
        </v-col>
        <v-col class cols="1" sm="0" md="2" xl="3"></v-col>
      </v-row>
    </vue-diagonal>

    <!-- <v-row no-gutters>
      <v-col class sm="12" md="12">
        <DividerTop dcolor="f6f9fc"></DividerTop>
        <v-sheet class="pb-5" color="#f6f9fc" min-height="250">
          <v-row no-gutters>
            <v-col class cols="1" sm="1" md="2" xl="3"></v-col>
            <v-col class="px-5" cols="12" sm="12" md="8" xl="6">
              <div class="text-h3 mt-10" style="color: #39444b">
                Founder Match
              </div>
              <div class="text-overline ml-5" style="color: #39444b">
                you create better together - meet your co-founder
              </div>

              <v-card class="elevation-2 mx-1 mt-15 pa-1" color="#f6f9fc">
                <v-row no-gutters>
                  <v-col class cols="12" sm="12" md="12">
                    <div class="text-overline text-center">
                      ··· Coming Soon ···
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col class cols="1" sm="1" md="2" xl="3"></v-col>
          </v-row>
        </v-sheet>
        <DividerBottom dcolor="f6f9fc"></DividerBottom>
      </v-col>
    </v-row> -->

    <!-- <v-row no-gutters>
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
          lfill="#ccc"
          lstroke="#f6f9fc"
          class="ma-5"
        />
        <v-divider></v-divider>
      </v-col>
    </v-row> -->
    <v-row no-gutters>
      <v-col class cols="1" sm="1" md="2"></v-col>
      <v-col class cols="12" sm="12" md="8">
        <v-sheet class="mb-10" color="transparent" min-height="50px"></v-sheet
      ></v-col>
      <v-col class cols="1" sm="1" md="2"></v-col>
    </v-row>

    <!-- <v-row no-gutters class="mb-20">
      <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="8">
        <v-row no-gutters>
          <v-col class cols="12" sm="4" md="4" xl="4">
            <v-card class="d-flex align-center ma-5" height="200">
              <v-scroll-y-transition>
                <div class="text-h2 ma-5">
                  CAREERS <users-icon></users-icon>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-col>
          <v-col class cols="12" sm="4" md="4" xl="4">
            <v-card class="d-flex align-center ma-5" height="200">
              <v-scroll-y-transition>
                <div class="text-h2 ma-5">
                  MENTORS <school-icon></school-icon>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-col>
          <v-col class cols="12" sm="4" md="4" xl="4">
            <v-card class="d-flex align-center ma-5" height="200">
              <v-scroll-y-transition>
                <div class="text-h2 ma-5">NOMADS <users-icon></users-icon></div>
              </v-scroll-y-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
    </v-row> -->

    <!-- //TODO REMOVE THIS BOTTOM STUFF AND MAKE A COMPONENT -->

    <v-sheet class="mb-10" color="transparent" min-height="350px"></v-sheet>
  </div>
</template>
<script>
  import store from '@/store'
  import { mapState } from 'vuex'

  import { DateTime, Duration } from 'luxon'

  export default {
    data: () => ({
      start: '',
      end: '',
      date: new Date(),

      e13: 1,

      searchInputshift_skill: null,

      searchInputmentorship_hour_start: null,
      searchInputmentorship_hour_end: null,
      searchInputmentorship_weekdays: null,
      searchInputmentorship_duration: null,

      searchInputbrain_trend: null,
      searchInputbrain_skill: null,

      searchInputbrainstorm_duration: null,
      searchInputbrainstorm_days: null,
      searchInputbrainstorm_weekdays: null,

      validMentor: null,

      attributes: [
        {
          highlight: {
            start: { fillMode: 'outline' },
            base: { fillMode: 'light' },
            end: { fillMode: 'outline' },
          },
          dates: { start: new Date(2021, 0, 14), end: new Date(2021, 0, 18) },
        },
        {
          key: 'today',
          highlight: true,
          dates: new Date(),
        },
        {
          bar: true,
          dates: [
            new Date(2021, 0, 1), // Jan 1st
            new Date(2021, 0, 10), // Jan 10th
            new Date(2021, 0, 22), // Jan 22nd
          ],
        },
        {
          bar: 'red',
          dates: [
            new Date(2021, 0, 4), // Jan 4th
            new Date(2021, 0, 10), // Jan 10th
            new Date(2021, 0, 27), // Jan 27th
          ],
        },
        {
          bar: {
            style: {
              backgroundColor: 'brown',
            },
          },
          dates: [
            new Date(2021, 0, 12), // Jan 12th
            new Date(2021, 0, 26), // Jan 26th
            new Date(2021, 0, 15), // Jan 15th
          ],
        },
      ],
    }),
    components: {},
    computed: {
      ...mapState(['system', 'talent', 'academy', 'xpert']),
    },
    created() {},
    mounted() {
      store.dispatch('talent/bindData')
    },

    methods: {
      slots() {
        const slot = Duration.fromMillis(1800000) // 30:00 minutes

        const period = {
          startTime: DateTime.local(2020, 1, 1, 8, 30),
          endTime: DateTime.local(2020, 1, 1, 10, 0),
        }

        var slots = []
        var slotCount = Math.trunc(
          (period.endTime.toMillis() - period.startTime.toMillis()) /
            slot.milliseconds
        )
        for (var i = 0; i < slotCount; i++) {
          slots[i] = {
            startTime: period.startTime.plus(i * slot.milliseconds),
            endTime: period.startTime.plus((i + 1) * slot.milliseconds),
          }
        }

        var formattedSlots = slots.map((x) => ({
          startHour: x.startTime.hour,
          startMinutes: x.startTime.minute,
          endHour: x.startTime.plus(slot).hour,
          endMinutes: x.startTime.plus(slot).minute,
        }))

        console.log(formattedSlots)
        // Prints out:
        // 0: {startHour: 8, startMinutes: 30, endHour: 9, endMinutes: 0}
        // 1: {startHour: 9, startMinutes: 0, endHour: 9, endMinutes: 30}
        // 2: {startHour: 9, startMinutes: 30, endHour: 10, endMinutes: 0}
      },

      validateTalent() {
        if (this.$refs.formTalent.validate()) {
          console.log(this.talent.data)

          store
            .dispatch('talent/backendOfflineUpdateAction', {
              data: this.talent.data,
              collection: 'talent',
            })
            .then(function () {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Talent Settings Updated',
              })
            })
        }
      },
      findIndustry(id) {
        return this.ninja.find(this.talent.data.sectors, { id: id })
      },
      removeIndustry(item) {
        this.talent.data.sectors = this.ninja.reject(
          this.talent.data.sectors,
          item
        )
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
  .wrap-text {
    -webkit-line-clamp: unset !important;
  }
</style>