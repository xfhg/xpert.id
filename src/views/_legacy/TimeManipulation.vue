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
      @click="slots(2)"
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

    <v-row no-gutters>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      <v-col class="px-5" sm="12" md="8" xl="6">
        <v-card class="elevation-0 mx-1 mb-5 pa-1" color="#fff">
          <v-row no-gutters>
            <v-col class cols="12" sm="12" md="12">
              <div class="d-flex align-center">
                <v-avatar size="64" class="elevation-6">
                  <v-img alt="" src="https://i.imgur.com/0Hk1Uye.jpg"></v-img>
                </v-avatar>

                <v-divider class="mx-5"></v-divider>
                <div class="text-button text-right ml-2">STORM</div>
                <v-divider class="mx-5"></v-divider>
                <v-avatar size="64" class="elevation-6">
                  <v-img alt="" src="https://i.imgur.com/dSJvdtu.jpg"></v-img>
                </v-avatar>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="0" sm="0" md="2" xl="3"></v-col>
    </v-row>

    <v-sheet height="50px" width="100%" color="transparent"> </v-sheet>
    <vue-diagonal :deg="-2" background="#39444b" space-before>
      <v-row no-gutters>
        <v-col class="" sm="12" md="12">
          <v-sheet
            class="d-flex mb-10"
            color="transparent"
            min-height="125px"
          ></v-sheet>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
        <v-col class="px-5" sm="12" md="8" xl="6">
          <v-card class="elevation-0 mx-1 mb-5 pa-1" color="transparent">
            <v-row no-gutters>
              <v-col class cols="12" sm="12" md="12">
                <div class="d-flex align-center">
                  <div class="text-button text-left white--text">ye</div>
                  <v-divider class="mx-2"></v-divider>
                  <Logo
                    lwidth="32px"
                    lheight="32px"
                    lfill="#fff"
                    lstroke="#fff"
                    class="mx-2"
                  />
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="0" sm="0" md="2" xl="3"></v-col>
      </v-row>

      <div class="mt-15 mb-5 text-button text-center">
        Choose a slot duration
      </div>

      <v-row no-gutters>
        <v-col class cols="12" sm="12" md="12">
          <v-item-group
            class="my-5 d-flex flex-wrap align-center justify-center"
          >
            <v-item v-slot="{ active, toggle }">
              <v-chip
                :color="active ? '#f6f9fc' : '#ffffff'"
                class="ma-2 px-5 d-flex align-center"
                @click="toggle"
              >
                <check-icon v-if="active"></check-icon>
                <div class="pa-3 text-overline">15 minutes</div>
              </v-chip>
            </v-item>

            <v-item v-slot="{ active, toggle }">
              <v-chip
                :color="active ? '#f6f9fc' : '#ffffff'"
                class="ma-2 px-5 d-flex align-center"
                @click="toggle"
              >
                <check-icon v-if="active"></check-icon>
                <div class="pa-3 text-overline">30 minutes</div>
              </v-chip>
            </v-item>

            <v-item v-slot="{ active, toggle }">
              <v-chip
                :color="active ? '#f6f9fc' : '#ffffff'"
                class="ma-2 px-5 d-flex align-center"
                @click="toggle"
              >
                <check-icon v-if="active"></check-icon>
                <div class="pa-3 text-overline">45 minutes</div>
              </v-chip>
            </v-item>

            <v-item v-slot="{ active, toggle }">
              <v-chip
                :color="active ? '#f6f9fc' : '#ffffff'"
                class="ma-2 px-5 d-flex align-center"
                @click="toggle"
              >
                <check-icon v-if="active"></check-icon>
                <div class="pa-3 text-overline">60 minutes</div>
              </v-chip>
            </v-item>
          </v-item-group>
        </v-col>
      </v-row>

      <v-row no-gutters class="mt-5">
        <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
        <v-col class="pa-5" cols="12" sm="12" md="8" xl="6">
          <v-row no-gutters class="my-5">
            <template v-for="item in days">
              <v-col :key="item.id" class cols="4" sm="2" md="2" xl="2">
                <div class="text-button text-center white--text">
                  {{ item.dayname }}
                </div>
                <div class="text-button text-center white--text">
                  {{ item.datename }}
                </div>
                <template v-for="slot in item.slots">
                  <v-card :key="slot.id" class="pa-1 mx-3 my-3">
                    <div class="text-overline text-center">
                      {{ slot.short }}
                    </div>
                  </v-card>
                </template>
              </v-col>
            </template>
          </v-row>

          <v-skeleton-loader
            class="mx-auto"
            height="200px"
            type="paragraph@3"
            width="100%"
            boilerplate
          ></v-skeleton-loader>
        </v-col>

        <v-col class cols="12" sm="0" md="2" xl="3"></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="" sm="12" md="12">
          <v-sheet
            class="d-flex mb-10"
            color="transparent"
            min-height="125px"
          ></v-sheet>
        </v-col>
      </v-row>
    </vue-diagonal>
    <vue-diagonal :deg="-2" background="#f7fafc" space-after> </vue-diagonal>
    <v-row no-gutters>
      <v-col class="" sm="12" md="12">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="325px"
        ></v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import Logo from '@/components/main/Logo'

  import { mapState } from 'vuex'

  import { DateTime } from 'luxon'

  export default {
    data: () => ({
      days: [],
    }),
    computed: {
      ...mapState(['system', 'talent', 'academy', 'xpert']),
    },
    components: { Logo },

    methods: {
      slots() {
        // console.log(DateTime.local().startOf('week').startOf('day').toISO())

        // console.log(
        //   DateTime.local()
        //     .startOf('week')
        //     .startOf('day')
        //     .plus({ weeks: 1 })
        //     .toISO()
        // )

        // console.log(slot_size)

        // console.log(DateTime.fromISO('10:00').setZone('America/Los_Angeles').zone)
        // console.log(DateTime.fromISO('10:00').zone)
        var saved_slot = DateTime.fromISO('10:00')
          .setZone('America/Los_Angeles')

          .toISO()

        console.log(saved_slot)
        console.log(DateTime.fromISO(saved_slot).toISO())

        // var slot_duration = [
        //   Duration.fromMillis(900000),
        //   Duration.fromMillis(1800000),
        //   Duration.fromMillis(2700000),
        //   Duration.fromMillis(3600000),
        // ]

        var xpert_config = {
          hour_start: DateTime.fromISO('08:00'),
          hour_end: DateTime.fromISO('10:00'),
        }

        var period = {
          startTime: DateTime.local().set({
            hour: xpert_config.hour_start.hour,
            minutes: 0,
            seconds: 0,
            millisecond: 0,
          }),
          endTime: DateTime.local().set({
            hour: xpert_config.hour_end.hour,
            minutes: 0,
            seconds: 0,
            millisecond: 0,
          }),
        }
        var days = []
        var slotCount = Math.trunc(
          (period.endTime.toMillis() - period.startTime.toMillis()) / 1800000
        )

        for (var d = 0; d < 6; d++) {
          period.startTime = period.startTime.plus({ days: 1 })
          period.endTime = period.endTime.plus({ days: 1 })
          days[d] = {
            id: d,
            slots: [],
            day: period.startTime.toISO(),
            weekday: period.startTime.weekday,
            dayname: period.startTime.toFormat('EEE'),
            datename: period.startTime.toFormat('dd LLL'),
          }

          for (var i = 0; i < slotCount; i++) {
            days[d].slots[i] = {
              id: d + i,
              short: period.startTime
                .plus(i * 1800000)
                .toLocaleString(DateTime.TIME_24_SIMPLE),
              startTime: period.startTime.plus(i * 1800000),
              endTime: period.startTime.plus((i + 1) * 1800000),
            }
          }
        }
        // var daySlots = slots.map((x) => ({
        //   startHour: x.startTime.hour,
        //   startMinutes: x.startTime.minute,
        //   endHour: x.endTime.hour,
        //   endMinutes: x.endTime.minute,
        //   weekDay: x.startTime.weekday,
        //   iso: x.startTime.toISO(),
        //   utc: x.startTime.toUTC().toISO(),
        //   obj: x.startTime.toObject(),
        // }))

        this.days = days
        console.log(days)
        // Prints out:
        // 0: {startHour: 8, startMinutes: 30, endHour: 9, endMinutes: 0}
        // 1: {startHour: 9, startMinutes: 0, endHour: 9, endMinutes: 30}
        // 2: {startHour: 9, startMinutes: 30, endHour: 10, endMinutes: 0}
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