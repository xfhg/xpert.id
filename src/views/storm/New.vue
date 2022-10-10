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
      @click="calculateSlots(2)"
    >
      <v-icon dark>mdi-calendar</v-icon>
    </v-btn> -->
    <v-row no-gutters>
      <v-col class="" sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="25px"
        ></v-sheet>
      </v-col>
    </v-row>

    <vue-diagonal :deg="-2" background="#f7fafc" space-before> </vue-diagonal>
    <vue-diagonal :deg="-2" background="#CFD8DC">
      <v-row no-gutters>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
        <v-col class="px-5" sm="12" md="8" xl="6">
          <v-card class="elevation-0 my-5 pa-1" color="transparent">
            <v-row no-gutters>
              <v-col class cols="12" sm="6" md="6">
                <div class="d-flex align-center justify-center">
                  <v-avatar rounded size="128" class="elevation-10">
                    <v-img
                      alt=""
                      :src="xpert.data.profile.displayPicture"
                    ></v-img>
                  </v-avatar>
                  <div class="text-h5 px-5 hidden-sm-and-up">
                    <v-icon color="#52616b" size="24">mdi-chevron-left</v-icon
                    >{{ truncateName(xpert.data.profile.displayName) }}
                  </div>
                </div>
              </v-col>
              <v-col class cols="12" sm="6" md="6">
                <div class="d-flex align-center justify-center">
                  <!-- <v-icon color="#32e0c4" style="z-index: 10" size="64"
                  >mdi-flash</v-icon
                >
                <v-icon color="#39444b" class="ml-n11" size="64"
                  >mdi-hexagon</v-icon
                > -->

                  <div class="text-h5 px-5 hidden-sm-and-up">
                    {{ truncateName(global.bit.xpert.profile.displayName) }}
                    <v-icon color="#52616b" size="24">mdi-chevron-right</v-icon>
                  </div>
                  <v-avatar rounded size="128" class="elevation-10">
                    <v-img
                      alt=""
                      :src="global.bit.xpert.profile.displayPicture + 4"
                    ></v-img>
                  </v-avatar>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      </v-row>

      <v-row no-gutters>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
        <v-col class="px-5" sm="12" md="8" xl="6">
          <v-card class="elevation-0 mx-1 mb-5 pa-1" color="transparent">
            <v-row no-gutters>
              <v-col class cols="12" sm="6" md="6">
                <div class="text-h3 text-center hidden-xs-only">
                  {{ truncateName(xpert.data.profile.displayName) }}
                </div>
                <!-- <div
                class="text-caption text-left ml-1 hidden-xs-only"
                v-html="xpert.data.profile.bio"
              ></div> -->
              </v-col>

              <v-col class cols="12" sm="6" md="6">
                <div class="text-h3 text-center hidden-xs-only">
                  {{ truncateName(global.bit.xpert.profile.displayName) }}
                </div>
                <!-- <div
                class="text-caption text-right mr-1 hidden-xs-only"
                v-html="global.bit.xpert.profile.bio"
              ></div> -->
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      </v-row>
    </vue-diagonal>

    <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon color="primary" dark v-bind="attrs" v-on="on">
          mdi-home
        </v-icon>
      </template>
      <span>Tooltip</span>
    </v-tooltip> -->

    <vue-diagonal :deg="-2" background="#f7fafc">
      <v-sheet class="mb-10" color="transparent" min-height="650px">
        <v-row no-gutters>
          <v-col cols="0" sm="0" md="2" xl="3"></v-col>
          <v-col class="px-5" sm="12" md="8" xl="6">
            <!-- <v-sheet class="mt-15" width="100%" color="transparent"> </v-sheet> -->

            <div class="text-h3 text-center my-15">
              brainstorm<v-icon size="28px" color="#32e0c4">mdi-flash</v-icon>ng
            </div>

            <v-card
              style="box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px"
              class="mb-5 mx-5 pa-10 mb-5"
              color="#fff"
            >
              <div class="d-flex align-center justify-space-around"></div>

              <div class="text-h4 mb-5 text-center">
                <v-icon>mdi-hexagon</v-icon> {{ global.bit.title }}
              </div>
              <div class="text-overline text-center">
                {{ global.bit.description }}
              </div>
            </v-card>

            <div class="text-center">
              <v-icon size="64px" color="#1d2226">mdi-flash</v-icon>
            </div>

            <ValidationObserver
              ref="validBrainstormSetup"
              immediate
              v-slot="{ invalid, valid, handleSubmit }"
            >
              <v-form
                ref="formBrainstormSetup"
                v-model="validBrainstormSetup"
                v-on:submit.prevent
              >
                <v-card class="elevation-0 mb-0 pa-5" color="transparent">
                  <div class="mt-5 mb-5 text-button text-center">
                    Available storm duration
                  </div>

                  <v-row no-gutters>
                    <v-col class cols="12" sm="12" md="12">
                      <v-item-group
                        mandatory
                        class="
                          my-5
                          d-flex
                          flex-wrap
                          align-center
                          justify-center
                        "
                        v-model="slot_selected"
                        @change="selectMatrix()"
                      >
                        <v-item
                          v-if="
                            global.bit.xpert.brainstorm.brainstorm_duration
                              .index >= 0
                          "
                          :value="0"
                          active
                          v-slot="{ active, toggle }"
                        >
                          <v-chip
                            :color="active ? '#32e0c4' : '#ffffff'"
                            class="ma-3 px-5 d-flex align-center"
                            @click="toggle"
                          >
                            <check-icon v-if="active"></check-icon>
                            <div class="pa-3 text-overline">15 minutes</div>
                          </v-chip>
                        </v-item>

                        <v-item
                          v-if="
                            global.bit.xpert.brainstorm.brainstorm_duration
                              .index >= 1
                          "
                          :value="1"
                          v-slot="{ active, toggle }"
                        >
                          <v-chip
                            :color="active ? '#32e0c4' : '#ffffff'"
                            class="ma-3 px-5 d-flex align-center"
                            @click="toggle"
                          >
                            <check-icon v-if="active"></check-icon>
                            <div class="pa-3 text-overline">30 minutes</div>
                          </v-chip>
                        </v-item>

                        <v-item
                          v-if="
                            global.bit.xpert.brainstorm.brainstorm_duration
                              .index >= 2
                          "
                          :value="2"
                          v-slot="{ active, toggle }"
                        >
                          <v-chip
                            :color="active ? '#32e0c4' : '#ffffff'"
                            class="ma-3 px-5 d-flex align-center"
                            @click="toggle"
                          >
                            <check-icon v-if="active"></check-icon>
                            <div class="pa-3 text-overline">45 minutes</div>
                          </v-chip>
                        </v-item>

                        <v-item
                          v-if="
                            global.bit.xpert.brainstorm.brainstorm_duration
                              .index >= 3
                          "
                          :value="3"
                          v-slot="{ active, toggle }"
                        >
                          <v-chip
                            :color="active ? '#32e0c4' : '#ffffff'"
                            class="ma-3 px-5 d-flex align-center"
                            @click="toggle"
                          >
                            <check-icon v-if="active"></check-icon>
                            <div class="pa-3 text-overline">60 minutes</div>
                          </v-chip>
                        </v-item>
                      </v-item-group>
                    </v-col>
                  </v-row>

                  <div class="mt-10 mb-10 text-button text-center">
                    Pick a slot below
                  </div>

                  <v-row no-gutters class="">
                    <template v-for="item in days">
                      <v-col
                        :key="item.id"
                        class="text-center"
                        cols="4"
                        sm="2"
                        md="2"
                        xl="2"
                      >
                        <v-card class="elevation-5 ma-3 pa-1" color="#39444b">
                          <div class="text-button text-center white--text">
                            {{ item.dayname }}
                          </div>
                          <div class="text-button text-center white--text">
                            {{ item.datename }}
                          </div>
                        </v-card>
                        <ValidationProvider
                          name="Slot"
                          rules="required"
                          v-slot="{ errors, valid }"
                        >
                          <v-item-group
                            :error-messages="errors"
                            :valid="valid"
                            v-model="storm_slot"
                          >
                            <template v-for="(slot, index) in item.slots">
                              <v-item
                                :value="slot"
                                :key="slot.id"
                                v-slot="{ active, toggle }"
                                v-if="index < 10 || showAll"
                              >
                                <v-card
                                  @click="toggle"
                                  :color="active ? '#32e0c4' : '#ffffff'"
                                  class="pa-1 mx-3 my-3"
                                  :disabled="isBlocked(slot)"
                                >
                                  <div
                                    v-if="isBlocked(slot)"
                                    class="text-overline text-center"
                                  >
                                    ---
                                  </div>
                                  <div v-else class="text-overline text-center">
                                    {{ slot.short }}
                                  </div>
                                </v-card>
                              </v-item>
                            </template>
                          </v-item-group>

                          <v-btn
                            @click="showAll = !showAll"
                            class="pa-1 mx-3 my-3 elevation-0"
                            color="#f7fafc"
                            v-if="item.slots.length > 9 && !showAll"
                          >
                            <plus-icon></plus-icon>
                          </v-btn>
                        </ValidationProvider>
                      </v-col>
                    </template>
                  </v-row>
                </v-card>

                <div class="mt-5 mb-2 text-overline text-center">
                  All time slots are shown on your timezone
                </div>
                <div class="mb-15 text-overline text-center">
                  {{ myZoneName }} - {{ myOffsetName }} -
                  {{ myOffsetNameLong }}
                </div>

                <v-row no-gutters>
                  <v-col class="mb-5" cols="12" sm="12" md="12">
                    <div class="mb-5 pl-5 text-overline text-left">
                      Private Message to
                      {{ global.bit.xpert.profile.displayName }}
                    </div>
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
                        placeholder="Private message"
                        hint="Use this message to set expectations, share FAQs, any brainstorm preparation info or disclaimers about the 1 on 1 with you."
                        :error-messages="errors"
                        :valid="valid"
                        maxlength="250"
                        counter
                        v-model="
                          system.data.template.academy
                            .brainstorm_private_message
                        "
                      >
                      </v-textarea>
                    </ValidationProvider>
                  </v-col>
                </v-row>

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
                      @click="handleSubmit(createStorm)"
                      block
                      rounded
                      x-large
                    >
                      Reserve Brainstorm Slot
                      <v-icon right>mdi-flash</v-icon>
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
    </vue-diagonal>
    <v-sheet class="mb-10" color="transparent" min-height="350px"></v-sheet>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import store from '@/store'

  import { DateTime } from 'luxon'

  import _ from 'lodash'

  export default {
    data: () => ({
      days: [],
      myZoneName: DateTime.local().zoneName,
      myOffsetName: DateTime.local().offsetNameShort,
      myOffsetNameLong: DateTime.local().offsetNameLong,

      showAll: false,
      storm_slot: [],
      validBrainstormSetup: false,

      blocked_start: 1624203000000,
      blocked_end: 1624204800000,

      slot_selected: 0,
      slot_matrix: [],
      block_matrix: [],
    }),
    computed: {
      ...mapState(['system', 'global', 'academy', 'xpert']),
    },
    mounted() {
      this.calculateSlots()
      this.selectMatrix()
    },
    methods: {
      truncateName(name) {
        return _.truncate(name, {
          length: 16,
          separator: ' ',
          omission: '',
        })
      },
      isBlocked(slot) {
        // return (
        //   _.inRange(
        //     slot.startTime.valueOf(),
        //     this.blocked_start,
        //     this.blocked_end - 1
        //   ) ||
        //   _.inRange(
        //     slot.endTime.valueOf(),
        //     this.blocked_start + 1,
        //     this.blocked_end
        //   )
        // )

        return (
          _.max([slot.startTime.valueOf(), this.blocked_start]) <
          _.min([slot.endTime.valueOf(), this.blocked_end])
        )
        //
      },

      createStorm() {
        if (this.$refs.validBrainstormSetup.validate()) {
          // console.log(this.storm_slot)
          // console.log(this.storm_slot.startTime.valueOf())
          // console.log(this.storm_slot.startTime.toString())

          // this.blocked_start = this.storm_slot.startTime.valueOf()
          // this.blocked_end = this.storm_slot.endTime.valueOf()
          const new_storm = {
            accepted: false,
            bit: this.global.bit.id,
            bit_graph: this.global.bit.graph_id,
            red: this.global.bit.owner,
            blue: '',
            slot: this.storm_slot,
            message: this.system.data.template.academy.brainstorm_private_message,
          }

          store.dispatch('storm/createStormAction', new_storm)
        }
      },
      selectMatrix() {
        this.days = this.block_matrix[this.slot_selected]
      },
      calculateSlots() {
        // console.log(this.global.bit.xpert.brainstorm.brainstorm_start)
        // console.log(this.global.bit.xpert.brainstorm.brainstorm_end)
        // console.log(this.global.bit.xpert.brainstorm.brainstorm_timezone)

        //todo needs to be based on the availability array and not the common hour_start and end
        console.log(this.global.bit.xpert.brainstorm)
        console.log('COMECA A FRUTA')

        // this is static
        // this.global.bit.xpert.brainstorm.brainstorm_duration.code
        // this.global.bit.xpert.brainstorm.brainstorm_buffer.code

        // foreach availability

        var day_period = []
        var day_slots_count = []
        var weekday_slots = []

        this.global.bit.xpert.brainstorm.brainstorm_availability.forEach(
          (element) => {
            // retrieve all periods
            day_period[element.brainstorm_weekday.code] = {
              startTime: DateTime.fromISO(element.brainstorm_start),
              endTime: DateTime.fromISO(element.brainstorm_end),
            }

            day_slots_count[element.brainstorm_weekday.code] = []
            // calculate number of slots for each day type

            for (
              var dur = this.global.bit.xpert.brainstorm.brainstorm_duration.code;
              dur > 0;
              dur = dur - 900
            ) {
              day_slots_count[element.brainstorm_weekday.code][dur] = Math.trunc(
                (day_period[element.brainstorm_weekday.code].endTime.toMillis() -
                  day_period[
                    element.brainstorm_weekday.code
                  ].startTime.toMillis()) /
                  (dur * 1000)
              )
              // TODO da pa ajeitar o start time e enfiar mais um block quando isto nao e' zero :
              // console.log(
              //   ((period.endTime.toMillis() - period.startTime.toMillis()) /
              //     (dur * 1000)) %
              //     1
              // )
            }

            day_slots_count[element.brainstorm_weekday.code] = _.compact(
              day_slots_count[element.brainstorm_weekday.code]
            )

            // this.slot_matrix = _.compact(slot_matrix)

            // add 6 or seven days and calculate orderly each slot per day
          }
        )
        console.log(day_period)
        day_slots_count.forEach((slots, weekday) => {
          weekday_slots[weekday] = {}
          var days = []

          slots.forEach((slots_number, slot_code) => {
            weekday_slots[weekday] = Object.assign(
              weekday_slots[weekday],
              day_period[weekday]
            )

            weekday_slots[weekday].startTime = weekday_slots[
              weekday
            ].startTime.plus({
              days: this.global.bit.xpert.brainstorm.brainstorm_buffer.code,
            })
            weekday_slots[weekday].endTime = weekday_slots[weekday].endTime.plus({
              days: this.global.bit.xpert.brainstorm.brainstorm_buffer.code,
            })

            // console.log(weekday_slots[weekday])

            for (var d = 0, k = 6, kmax = 0; d < k; d++) {
              if (weekday_slots[weekday].startTime.weekday == weekday) {
                kmax = 0
                days[d] = {
                  id: d,
                  slots: [],
                  day: weekday_slots[weekday].startTime.toISO(),
                  weekday: weekday_slots[weekday].startTime.weekday,
                  dayname: weekday_slots[weekday].startTime.toFormat('EEE'),
                  datename: weekday_slots[weekday].startTime.toFormat('dd LLL'),
                }

                //todo ta a fazer overwrite do ultimo dia , precisa dum array

                for (var i = 0; i < slots_number; i++) {
                  days[d].slots[i] = {
                    id: weekday + d + i,
                    duration: weekday,
                    short: weekday_slots[weekday].startTime
                      .plus(
                        i *
                          this.system.data.academy.slot_seconds[slot_code] *
                          1000
                      )
                      .toLocaleString(DateTime.TIME_24_SIMPLE),
                    startTime: weekday_slots[weekday].startTime.plus(
                      i * this.system.data.academy.slot_seconds[slot_code] * 1000
                    ),
                    endTime: weekday_slots[weekday].startTime.plus(
                      (i + 1) *
                        this.system.data.academy.slot_seconds[slot_code] *
                        1000
                    ),
                  }
                }
              } else {
                if (kmax == 8) {
                  return false
                } else {
                  k++
                  kmax++
                }
              }
              weekday_slots[weekday].startTime = weekday_slots[
                weekday
              ].startTime.plus({
                days: 1,
              })
              weekday_slots[weekday].endTime = weekday_slots[
                weekday
              ].endTime.plus({
                days: 1,
              })
            }

            if (this.block_matrix[slot_code]) {
              this.block_matrix[slot_code] = _.slice(
                _.orderBy(
                  _.union(this.block_matrix[slot_code], _.compact(days)),
                  ['id']
                ),
                0,
                6
              )
            } else {
              this.block_matrix[slot_code] = _.slice(
                _.orderBy(_.union([], _.compact(days)), ['id']),
                0,
                6
              )
            }
          })
        })

        console.log('ACABA A FRUTA')

        // if (!this.global.bit.xpert.brainstorm.brainstorm_complexity) {
        //   //! ESTE PERIOD TEM DE SER ITERATIVO VINDO DE DENTRO DA AVAILABILITY
        //   //todo independentemente da complexidade tem o mesmo algoritmo
        //   //todo foreach na availability , replace do weekdays(ou addon)

        //   const period = {
        //     startTime: DateTime.fromISO(
        //       this.global.bit.xpert.brainstorm.brainstorm_start
        //     ),
        //     endTime: DateTime.fromISO(
        //       this.global.bit.xpert.brainstorm.brainstorm_end
        //     ),
        //   }

        //   var slot_matrix = []
        //   for (
        //     var dur = this.global.bit.xpert.brainstorm.brainstorm_duration.code;
        //     dur > 0;
        //     dur = dur - 900
        //   ) {
        //     slot_matrix[dur] = Math.trunc(
        //       (period.endTime.toMillis() - period.startTime.toMillis()) /
        //         (dur * 1000)
        //     )
        //     // TODO da pa ajeitar o start time e enfiar mais um block quando isto nao e' zero :
        //     // console.log(
        //     //   ((period.endTime.toMillis() - period.startTime.toMillis()) /
        //     //     (dur * 1000)) %
        //     //     1
        //     // )
        //   }

        //   this.slot_matrix = _.compact(slot_matrix)

        //   slot_matrix = []

        //   console.log(this.slot_matrix)

        //   this.slot_matrix.forEach((element, index) => {
        //     var days = []
        //     var slot = {}

        //     console.log(element) // numero de slots
        //     console.log(index) // codigo da duracao

        //     slot = Object.assign(slot, period)

        //     slot.startTime = slot.startTime.plus({
        //       days: this.global.bit.xpert.brainstorm.brainstorm_buffer.code,
        //     })
        //     slot.endTime = slot.endTime.plus({
        //       days: this.global.bit.xpert.brainstorm.brainstorm_buffer.code,
        //     })

        //     for (var d = 0, k = 6, kmax = 0; d < k; d++) {
        //       if (
        //         _.some(this.global.bit.xpert.brainstorm.brainstorm_weekdays, {
        //           code: slot.startTime.weekday,
        //         })
        //       ) {
        //         kmax = 0
        //         days[d] = {
        //           id: d,
        //           slots: [],
        //           day: slot.startTime.toISO(),
        //           weekday: slot.startTime.weekday,
        //           dayname: slot.startTime.toFormat('EEE'),
        //           datename: slot.startTime.toFormat('dd LLL'),
        //         }

        //         for (var i = 0; i < element; i++) {
        //           days[d].slots[i] = {
        //             id: index + d + i,
        //             duration: index,
        //             short: slot.startTime
        //               .plus(
        //                 i * this.system.data.academy.slot_seconds[index] * 1000
        //               )
        //               .toLocaleString(DateTime.TIME_24_SIMPLE),
        //             startTime: slot.startTime.plus(
        //               i * this.system.data.academy.slot_seconds[index] * 1000
        //             ),
        //             endTime: slot.startTime.plus(
        //               (i + 1) *
        //                 this.system.data.academy.slot_seconds[index] *
        //                 1000
        //             ),
        //           }
        //         }
        //       } else {
        //         if (kmax == 8) {
        //           return false
        //         } else {
        //           k++
        //           kmax++
        //         }
        //       }
        //       slot.startTime = slot.startTime.plus({
        //         days: 1,
        //       })
        //       slot.endTime = slot.endTime.plus({
        //         days: 1,
        //       })
        //     }

        //     this.block_matrix[index] = _.compact(days)
        //   })
        // }
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
</style>