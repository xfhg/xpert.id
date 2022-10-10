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

    <v-row no-gutters>
      <v-col class="" sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="25px"
        ></v-sheet>
      </v-col>
    </v-row>

    <!-- <v-row no-gutters class="pb-15">
      <v-col class cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="6">
        <div class="text-h3 mt-15">
          Create
          <threed-cube-sphere-icon stroke-width="1" size="24" class="ml-1" />
        </div>
        <div class="mb-5 ml-5 text-overline text-left">
          knowledge into xpert bits
        </div>
      </v-col>
      <v-col class cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row> -->

    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="10px"
    ></v-sheet>

    <!-- <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10">
        <div class="text-h5 mb-10">
          brain<v-icon color="#32e0c4">mdi-flash</v-icon>storm ?
        </div>
        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10">
          collab<v-icon>mdi-account-supervisor-circle</v-icon>rate ?
        </div>

        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row> -->

    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="10px"
    ></v-sheet>

    <vue-diagonal :deg="-2" background="#f7fafc">
      <v-sheet class="" color="#f7fafc" min-height="25">
        <v-sheet class="mb-10" color="#f7fafc" min-height="650px">
          <v-row no-gutters>
            <v-col cols="0" sm="0" md="2" xl="3"></v-col>
            <v-col class="px-5" sm="12" md="8" xl="6">
              <div class="text-h3 text-left mt-15">
                brain<v-icon size="32px">mdi-flash</v-icon>storm setup
              </div>
              <div class="text-overline text-left mx-5">
                get your brain picked and collaborate with fellow xperts
              </div>

              <v-sheet class="mt-15" width="100%" color="transparent">
              </v-sheet>

              <ValidationObserver
                ref="formBrainstormSetup"
                immediate
                v-slot="{ invalid, valid, handleSubmit }"
              >
                <v-form
                  ref="formBrainstormSetup"
                  v-model="validBrainstormSetup"
                  v-on:submit.prevent
                >
                  <v-card
                    class="elevation-0 mx-auto mb-0 pa-5"
                    color="transparent"
                  >
                    <div class="my-5 text-overline text-right">
                      brain<v-icon>mdi-flash</v-icon>storm max Slot length
                    </div>

                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="6"> </v-col>
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Slot Duration"
                          rules="required"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="academy.data.brainstorm_duration"
                            :items="system.data.academy.slot_duration"
                            solo
                            hide-no-data
                            class="mb-5"
                            :error-messages="errors"
                            :valid="valid"
                            label="Duration"
                            item-text="name"
                            append-icon="mdi-progress-clock"
                            return-object
                            :search-input.sync="searchInputbrainstorm_duration"
                            @change="searchInputbrainstorm_duration = ''"
                            :value="academy.data.brainstorm_duration"
                          >
                            <template v-slot:item="data">
                              <clock-icon class="mr-5" stroke-width="1" />

                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-autocomplete>
                        </ValidationProvider>
                      </v-col>
                    </v-row>

                    <div class="my-5 text-overline text-left">
                      Availability - Days
                    </div>

                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="12">
                        <ValidationProvider
                          name="Slot Active weekdays"
                          rules="required"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="academy.data.brainstorm_weekdays"
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
                            :search-input.sync="searchInputbrainstorm_weekdays"
                            @change="searchInputbrainstorm_weekdays = ''"
                            :value="academy.data.brainstorm_weekdays"
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                label
                                color="#39444b"
                                dark
                              >
                                {{ data.item.name }}
                              </v-chip>
                            </template>
                            <template v-slot:item="data">
                              <calendar-event-icon
                                stroke-width="1"
                                class="mr-5"
                              ></calendar-event-icon>

                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-autocomplete>
                        </ValidationProvider>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col
                        class="d-flex align-center justify-center"
                        cols="12"
                        sm="12"
                        md="12"
                      >
                        <div class="text-overline mr-2">quick</div>
                        <v-switch
                          class="pt-1"
                          inset
                          color="#22292d"
                          v-model="academy.data.brainstorm_complexity"
                        >
                          <template v-slot:label>
                            <div class="text-overline">Detailed</div>
                          </template>
                        </v-switch>
                      </v-col>
                    </v-row>

                    <div v-if="academy.data.brainstorm_complexity">
                      <div class="mt-5 text-overline text-left">
                        Availability Per day
                      </div>
                      <template
                        v-for="(item, index) in academy.data
                          .brainstorm_weekdays"
                      >
                        <div :key="index">
                          <v-row no-gutters>
                            <v-col class cols="12" sm="2" md="2">
                              <div class="mt-5 text-overline text-left">
                                {{ item.name }}
                              </div>
                            </v-col>
                            <v-col class cols="12" sm="5" md="5">
                              <div class="mt-5 text-overline text-left">
                                from
                              </div>
                              <ValidationProvider
                                name="Hours Start"
                                rules="required"
                                v-slot="{ errors, valid }"
                              >
                                <v-autocomplete
                                  v-model="
                                    academy.data.brainstorm_complex[item.code]
                                      .hour_start
                                  "
                                  :items="system.data.academy.slot_hours"
                                  solo
                                  hide-no-data
                                  class="mb-5 mr-md-2"
                                  :error-messages="errors"
                                  :valid="valid"
                                  label="Available from"
                                  item-text="name"
                                  append-icon="mdi-progress-clock"
                                  return-object
                                  :value="academy.data.brainstorm_hour_start"
                                >
                                  <template v-slot:item="data">
                                    <clock-icon class="mr-5" stroke-width="1" />

                                    <v-list-item-content>
                                      <v-list-item-title
                                        v-html="data.item.name"
                                      ></v-list-item-title>
                                    </v-list-item-content>
                                  </template>
                                </v-autocomplete>
                              </ValidationProvider>
                            </v-col>
                            <v-col class cols="12" sm="5" md="5">
                              <div class="mt-5 text-overline text-left">to</div>
                              <ValidationProvider
                                name="Hours End"
                                rules="required"
                                v-slot="{ errors, valid }"
                              >
                                <v-autocomplete
                                  v-model="
                                    academy.data.brainstorm_complex[item.code]
                                      .hour_end
                                  "
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
                                  :value="academy.data.brainstorm_hour_end"
                                >
                                  <template v-slot:item="data">
                                    <clock-icon class="mr-5" stroke-width="1" />

                                    <v-list-item-content>
                                      <v-list-item-title
                                        v-html="data.item.name"
                                      ></v-list-item-title>
                                    </v-list-item-content>
                                  </template>
                                </v-autocomplete>
                              </ValidationProvider>
                            </v-col>
                          </v-row>
                        </div>
                      </template>
                    </div>

                    <div v-if="!academy.data.brainstorm_complexity">
                      <div class="mt-5 text-overline text-left">
                        Availability for all selected days
                      </div>

                      <v-row no-gutters>
                        <v-col class cols="12" sm="12" md="6">
                          <div class="mt-5 text-overline text-left">from</div>
                          <ValidationProvider
                            name="Hours Start"
                            rules="required"
                            v-slot="{ errors, valid }"
                          >
                            <v-autocomplete
                              v-model="academy.data.brainstorm_hour_start"
                              :items="system.data.academy.slot_hours"
                              solo
                              hide-no-data
                              class="mb-5 mr-md-2"
                              :error-messages="errors"
                              :valid="valid"
                              label="Available from"
                              item-text="name"
                              append-icon="mdi-progress-clock"
                              return-object
                              :value="academy.data.brainstorm_hour_start"
                            >
                              <template v-slot:item="data">
                                <clock-icon class="mr-5" stroke-width="1" />

                                <v-list-item-content>
                                  <v-list-item-title
                                    v-html="data.item.name"
                                  ></v-list-item-title>
                                </v-list-item-content>
                              </template>
                            </v-autocomplete>
                          </ValidationProvider>
                        </v-col>
                        <v-col class cols="12" sm="12" md="6">
                          <div class="mt-5 text-overline text-left">to</div>
                          <ValidationProvider
                            name="Hours End"
                            rules="required"
                            v-slot="{ errors, valid }"
                          >
                            <v-autocomplete
                              v-model="academy.data.brainstorm_hour_end"
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
                              :value="academy.data.brainstorm_hour_end"
                            >
                              <template v-slot:item="data">
                                <clock-icon class="mr-5" stroke-width="1" />

                                <v-list-item-content>
                                  <v-list-item-title
                                    v-html="data.item.name"
                                  ></v-list-item-title>
                                </v-list-item-content>
                              </template>
                            </v-autocomplete>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </div>

                    <div class="my-5 text-overline text-right">
                      Booking Buffer
                    </div>
                    <v-row no-gutters>
                      <v-col class cols="12" sm="12" md="6"> </v-col>
                      <v-col class cols="12" sm="12" md="6">
                        <ValidationProvider
                          name="Slot Buffer"
                          rules="required"
                          v-slot="{ errors, valid }"
                        >
                          <v-autocomplete
                            v-model="academy.data.brainstorm_buffer"
                            :items="system.data.academy.slot_buffer"
                            solo
                            hide-no-data
                            class=""
                            :error-messages="errors"
                            :valid="valid"
                            label="Booking buffer"
                            item-text="name"
                            append-icon="mdi-timelapse"
                            return-object
                            :search-input.sync="searchInputbrainstorm_buffer"
                            @change="searchInputbrainstorm_buffer = ''"
                            :value="academy.data.brainstorm_buffer"
                          >
                            <template v-slot:item="data">
                              <calendar-time-icon
                                class="mr-5"
                                stroke-width="1"
                              />

                              <v-list-item-content>
                                <v-list-item-title
                                  v-html="data.item.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-autocomplete>
                        </ValidationProvider>
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col class="mb-5" cols="12" sm="12" md="12">
                        <div class="mb-5 pl-1 text-overline text-left">
                          Your Default Pre-Booking Message
                        </div>
                        <ValidationProvider
                          name="Confirmation Message"
                          rules=""
                          v-slot="{ errors, valid }"
                        >
                          <v-textarea
                            class="mb-0"
                            solo
                            v-model="academy.data.brainstorm_default_message"
                            auto-grow
                            label="Message"
                            placeholder="Use this message to set expectations, share FAQs, any brainstorm preparation info or disclaimers about the 1 on 1 with you."
                            hint="Use this message to set expectations, share FAQs, any brainstorm preparation info or disclaimers about the 1 on 1 with you."
                            :error-messages="errors"
                            :valid="valid"
                            maxlength="250"
                            counter
                            :value="academy.data.brainstorm_default_message"
                          >
                          </v-textarea>
                        </ValidationProvider>
                      </v-col>
                    </v-row>
                    <!-- <v-row no-gutters>
                      <v-col
                        class="d-flex flex-wrap align-center justify-space-around"
                        cols="12"
                        sm="12"
                        md="6"
                      >
                        <div class="text-caption px-5 mb-5 pt-2">
                          On each booked slot an automated private room URL will
                          be generated but you can also provide your own
                          Meetup/Zoom/Teams custom meeting endpoint :
                        </div>
                      </v-col>
                      <v-col class cols="12" sm="12" md="6">
                        <div class="mb-5 pl-1 text-overline text-right">
                          Default Meeting URL
                        </div>
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
                    </v-row> -->
                  </v-card>
                  <v-sheet height="50px" width="100%" color="transparent">
                  </v-sheet>

                  <v-row no-gutters>
                    <v-col
                      class="d-flex align-center justify-center mb-5"
                      cols="12"
                      sm="12"
                      md="3"
                    >
                    </v-col>
                    <v-col
                      class="d-flex align-center justify-center mb-5 px-5"
                      cols="12"
                      sm="12"
                      md="6"
                    >
                      <v-btn
                        :disabled="invalid || !valid"
                        color="#32e0c4"
                        @click="handleSubmit(validateBrainstormSetup)"
                        block
                        rounded
                        x-large
                      >
                        Update your availability
                        <v-icon right>mdi-rocket-launch</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col
                      class="d-flex align-center justify-center mb-5"
                      cols="12"
                      sm="12"
                      md="3"
                    >
                    </v-col>
                  </v-row>
                  <div class="mt-5 mb-2 text-overline text-center">
                    All time slots are converted to your tz - {{ myZoneName }}
                  </div>
                  <div class="mb-5 text-overline text-center">
                    {{ myOffsetName }} -
                    {{ myOffsetNameLong }}
                  </div>
                </v-form>
              </ValidationObserver>

              <v-sheet
                class="mt-15"
                height="25px"
                width="100%"
                color="transparent"
              >
              </v-sheet>
            </v-col>
            <v-col cols="0" sm="0" md="2" xl="3"></v-col>
          </v-row>
        </v-sheet>
      </v-sheet>
    </vue-diagonal>

    <v-sheet
      class="d-flex mb-10"
      color="transparent"
      min-height="10px"
    ></v-sheet>

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="0" sm="12" md="6" class="pa-5 my-10">
        <div class="text-h4 mb-10 text-center">
          <v-icon color="#32e0c4">mdi-rocket</v-icon>get ready
        </div>

        <div class="text-body-2 text-justify">
          A knowledge bit is the first class citizen of xpert.id platform. Use
          it as blank canvas for story telling, napkin note for business
          bootstrapping, idea and mind mapping, task and goal setting... it can
          be anything.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10">
        <div class="text-h5 mb-10">
          knowledge<v-icon>mdi-hexagon-multiple</v-icon>mesh
        </div>
        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10">
          bit<v-icon color="#32e0c4">mdi-pound-box</v-icon>affinity
        </div>

        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row>
    <!-- <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10">
        <div class="text-h5 mb-10">
          <v-icon left>mdi-account-star</v-icon>iterate
        </div>
        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="pa-5 my-10"
        ><div class="text-h5 mb-10">
          <v-icon left>mdi-skull-scan</v-icon>No SCAM
        </div>

        <div class="text-body-2 text-justify">
          Try a more powerful colour it's great, can you add a beard though i
          was wondering if my cat could be placed over the logo in the flyer
          thanks for taking the time to make the website.
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row> -->

    <!-- <v-row no-gutters>
      <v-col cols="0" sm="0" md="3"></v-col>
      <v-col cols="0" sm="12" md="6" class="pa-5 my-10">
        <div class="d-flex justify-space-around align-center flex-wrap">
          <v-btn depressed x-large class="my-5">
            power up<v-icon size="32px" class="mx-3">mdi-exponent-box</v-icon
            >your profile
          </v-btn>
          <div class="text-h4 ma-5 text-center">or</div>
          <v-btn depressed x-large class="my-5">
            go CREATE<v-icon class="mx-3" ize="32px">mdi-hexagon</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="0" sm="0" md="3"></v-col>
    </v-row> -->

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

  import { DateTime } from 'luxon'

  export default {
    data: () => ({
      searchInputbrainstorm_duration: null,
      searchInputbrainstorm_days: null,
      searchInputbrainstorm_weekdays: null,
      searchInputbrainstorm_buffer: null,
      validBrainstormSetup: null,

      myZoneName: DateTime.local().zoneName,
      myOffsetName: DateTime.local().offsetNameShort,
      myOffsetNameLong: DateTime.local().offsetNameLong,
    }),
    components: {},
    computed: {
      ...mapState(['system', 'academy', 'xpert']),
    },
    created() {
      store.dispatch('academy/bindData')
    },
    mounted() {},

    methods: {
      validateBrainstormSetup() {
        // validate time intervals

        var updateBrainstormSetup = {}

        console.log(this.academy.data.brainstorm_complex)

        if (this.$refs.formBrainstormSetup.validate()) {
          if (this.academy.data.brainstorm_complexity) {
            console.log(this.system.data.academy)
            console.log(this.academy.data.brainstorm_weekdays)

            updateBrainstormSetup = {
              brainstorm_availability: [],
              brainstorm_complex: this.academy.data.brainstorm_complex,
              brainstorm_complexity: this.academy.data.brainstorm_complexity,
              brainstorm_timezone: this.myZoneName,
              brainstorm_timezone_offset: this.myOffsetName,
              brainstorm_duration: this.academy.data.brainstorm_duration,
              brainstorm_hour_start: {},
              // brainstorm_start: {},
              brainstorm_hour_end: {},
              // brainstorm_end: {},
              brainstorm_buffer: this.academy.data.brainstorm_buffer,
              brainstorm_weekdays: this.academy.data.brainstorm_weekdays,
              brainstorm_default_message:
                this.academy.data.brainstorm_default_message,
              // bio: this.safeData(this.xpert.data.profile.bio, sanitizeOptions),
            }

            this.academy.data.brainstorm_weekdays.forEach((element) => {
              updateBrainstormSetup.brainstorm_availability.push({
                brainstorm_weekday: element,
                brainstorm_start: DateTime.fromISO(
                  this.system.data.template.academy.brainstorm_complex[
                    element.code
                  ].hour_start.name,
                  { zone: this.myZoneName }
                ),
                brainstorm_hour_start:
                  this.system.data.template.academy.brainstorm_complex[
                    element.code
                  ].hour_start,
                brainstorm_end: DateTime.fromISO(
                  this.system.data.template.academy.brainstorm_complex[
                    element.code
                  ].hour_end.name,
                  { zone: this.myZoneName }
                ),
                brainstorm_hour_end:
                  this.system.data.template.academy.brainstorm_complex[
                    element.code
                  ].hour_end,
              })
            })

            console.log(updateBrainstormSetup)

            // return false
          } else {
            var start = DateTime.fromISO(
              this.academy.data.brainstorm_hour_start.name
            )
            var end = DateTime.fromISO(this.academy.data.brainstorm_hour_end.name)

            if (start > end) {
              store.dispatch('triggerNotification', {
                type: 'error',
                message: 'Hour interval is invalid',
              })
              return false
            }

            updateBrainstormSetup = {
              brainstorm_availability: [],
              brainstorm_complex: this.academy.data.brainstorm_complex,
              brainstorm_complexity: this.academy.data.brainstorm_complexity,
              brainstorm_timezone: this.myZoneName,
              brainstorm_timezone_offset: this.myOffsetName,
              brainstorm_duration: this.academy.data.brainstorm_duration,
              brainstorm_hour_start: this.academy.data.brainstorm_hour_start,
              // brainstorm_start: DateTime.fromISO(
              //   this.academy.data.brainstorm_hour_start.name,
              //   { zone: this.myZoneName }
              // ),
              brainstorm_hour_end: this.academy.data.brainstorm_hour_end,
              // brainstorm_end: DateTime.fromISO(
              //   this.academy.data.brainstorm_hour_end.name,
              //   { zone: this.myZoneName }
              // ),
              brainstorm_buffer: this.academy.data.brainstorm_buffer,
              brainstorm_weekdays: this.academy.data.brainstorm_weekdays,
              brainstorm_default_message:
                this.academy.data.brainstorm_default_message,
              // bio: this.safeData(this.xpert.data.profile.bio, sanitizeOptions),
            }

            this.academy.data.brainstorm_weekdays.forEach((element) => {
              updateBrainstormSetup.brainstorm_availability.push({
                brainstorm_weekday: element,
                brainstorm_start: DateTime.fromISO(
                  this.academy.data.brainstorm_hour_start.name,
                  { zone: this.myZoneName }
                ),
                brainstorm_hour_start: this.academy.data.brainstorm_hour_start,
                brainstorm_end: DateTime.fromISO(
                  this.academy.data.brainstorm_hour_end.name,
                  { zone: this.myZoneName }
                ),
                brainstorm_hour_end: this.academy.data.brainstorm_hour_end,
              })
            })
          }

          store.dispatch('academy/updatePublicDataAction', {
            data: JSON.parse(JSON.stringify(updateBrainstormSetup)),
            collection: 'xpublic',
            path: 'brainstorm',
          })

          store
            .dispatch('academy/backendUpstreamUpdateAction', {
              data: JSON.parse(JSON.stringify(updateBrainstormSetup)),
              collection: 'academy',
            })
            .then(function () {
              store.dispatch('triggerNotification', {
                type: 'success',
                message: 'Brainstorm Settings Updated',
              })
            })
        }
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