<template>
  <FullCalendar :options="calendarOptions" :events="events" class="md:h-full md:w-1/3 w-full h-full" />
</template>
<script>
import FullCalendar from '@fullcalendar/vue3'
import listPlugin from '@fullcalendar/list'

const eventData = [
  {
    title: 'PAX East',
    start: '2024-03-21T09:00:00',
    end: '2024-03-24T22:00:00'
  },
  {
    title: 'https://ecclesicon.com/',
    start: '2024-04-12T16:00:00',
    end: '2024-04-14T22:00:00'
  },
  {
    title: 'Grimwood City',
    start: '2024-03-29T20:00:00',
  },
   {
    title: 'Grimwood City',
    start: '2024-04-05T20:00:00',
  },
   {
    title: 'Grimwood City',
    start: '2024-04-19T20:00:00',
  },
   {
    title: 'Grimwood City',
    start: '2024-04-26T20:00:00',
  },
   {
    title: 'Grimwood City',
    start: '2024-05-03T20:00:00',
  },
   {
    title: 'Grimwood City',
    start: '2024-05-10T20:00:00',
  },
   {
    title: 'Grimwood City',
    start: '2024-05-17T20:00:00',
  },
   {
    title: 'Grimwood City',
    start: '2024-05-24T20:00:00',
  },
   {
    title: 'Grimwood City',
    start: '2024-05-31T20:00:00',
  },
   {
    title: 'Grimwood City',
    start: '2024-06-07T20:00:00',
  },
   {
    title: 'Grimwood City',
    start: '2024-06-14T20:00:00',
  },
  {
    title: 'Delta Green',
    start: '2024-03-27T20:00:00',
  },
  {
    title: 'Delta Green',
    start: '2024-04-10T20:00:00',
  },
  {
    title: 'Delta Green',
    start: '2024-04-24T20:00:00',
  }
]


export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [listPlugin],
        initialView: 'listMonth',
        initialEvents: [],
        events: eventData,
        eventClick: this.handleEventClick,
        editable: false,
      }
    }
  },
  methods: {
    handleEventClick() {
      document.location.href = 'https://www.twitch.tv/grimwood_games'
    }
  }
} 
</script>
<style>
:root {
  --fc-list-event-hover-bg-color: rgb(200 75 49);
}
.fc-theme-standard {

  & .fc-list {
    border: 1px solid var(--fc-border-color);
  }

}
.fc {
  & .fc-list-empty {
    background-color: var(--fc-neutral-bg-color);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  & .fc-list-empty-cushion {
    margin: 5em 0;
  }
}
.fc-toolbar-title{
  font-size: 1em !important;

}
.fc-theme-standard {

  & .fc-list-day-cushion {
    background-color: #346751;
  }

}
</style>