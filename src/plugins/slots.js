// import { DateTime, Duration, Interval } from 'luxon'

import { DateTime, Duration } from 'luxon'

var slots = [
  Duration.fromMillis(900000),
  Duration.fromMillis(1800000),
  Duration.fromMillis(2700000),
  Duration.fromMillis(3600000),
]

var calc = {
  day_start: DateTime.local().plus({ days: 1 }).startOf('day'),
  day_end: DateTime.local().plus({ days: 15 }).endOf('day'),
  weekday_start: DateTime.local().plus({ days: 1 }).weekday,
}

var config = {
  hour_start: null,
  hour_end: null,
  iso_start: calc.day_start.toISO(),
  iso_end: calc.day_end.toISO(),
}

var output = {
  slots: slots,
  calc: calc,
  config: config,
}

// const period = {
//   startTime: DateTime.local(2020, 2, 1, 8, 30),
//   endTime: DateTime.local(2020, 2, 3, 10, 0),
// }

// const date1 = DateTime.fromISO('2020-09-06T12:00')
// const date2 = DateTime.fromISO('2019-06-10T14:00')

// const diff = date1.diff(date2, ['years', 'months', 'days', 'hours'])

// console.log(diff.toObject())

// var slots = []

// var generated = []

// var slotCount = Math.trunc(
//   (period.endTime.toMillis() - period.startTime.toMillis()) / slot.milliseconds
// )

// i = Interval.fromDateTimes(period.startTime, period.endTime)
// console.log(i.length('days'))

// for (var i = 0; i < slotCount; i++) {
//   slots[i] = {
//     startTime: period.startTime.plus(i * slot.milliseconds),
//     endTime: period.startTime.plus((i + 1) * slot.milliseconds),
//   }

//   generated[i] = {
//     date: period.startTime.plus(i * slot.milliseconds),
//   }
// }

// var daysI = Interval.fromDateTimes(
//   period.startTime.startOf('day'),
//   period.endTime.endOf('day')
// )
//   .splitBy({ days: 1 })
//   .map((d) => d.start)

// var output = []
// daysI.forEach((element) => {
//   var dslots = []

//   for (var i = 0; i < slotCount; i++) {
//     dslots[i] = {
//       date: element.plus(i * slot.milliseconds),
//     }
//   }

//   var newday = {
//     date: element.toISO(),
//     slots: dslots,
//   }

//   output.push(newday)
// })

// console.log(output)
// // var formattedSlots = slots.map((x) => ({
// //   startHour: x.startTime.hour,
// //   startMinutes: x.startTime.minute,
// //   endHour: x.startTime.plus(slot).hour,
// //   endMinutes: x.startTime.plus(slot).minute,
// // }))

// console.log(generated)
// // Prints out:
// // 0: {startHour: 8, startMinutes: 30, endHour: 9, endMinutes: 0}
// // 1: {startHour: 9, startMinutes: 0, endHour: 9, endMinutes: 30}
// 2: {startHour: 9, startMinutes: 30, endHour: 10, endMinutes: 0}

function generateDays() {
  return output
}

export default generateDays
