<template>
  <FullCalendar :options="calendarOptions" :events="events" class="md:h-full md:w-1/3 w-full h-full" />
</template>
<script>
import FullCalendar from '@fullcalendar/vue3'
import listPlugin from '@fullcalendar/list'

const eventData = [
  {
    title: 'City of Mist: New Ravenloft',
    start: '2023-11-26T20:00:00',
  },
  {
    title: 'City of Mist: New Ravenloft',
    start: '2023-12-10T20:00:00',
  },
  {
    title: 'City of Mist: New Ravenloft',
    start: '2024-01-07T20:00:00',
  },
  {
    title: 'City of Mist: New Ravenloft',
    start: '2024-01-21T20:00:00',
  },
  {
    title: 'City of Mist: New Ravenloft',
    start: '2024-02-04T20:00:00',
  },
  {
    title: 'City of Mist: New Ravenloft',
    start: '2024-02-18T20:00:00',
  },
  {
    title: 'City of Mist: New Ravenloft',
    start: '2024-03-03T20:00:00',
  },
  {
    title: 'Grimwood City: Long Winter Night',
    start: '2023-12-08T20:00:00',
  },
  {
    title: 'Grimwood City: Long Winter Night',
    start: '2023-12-15T20:00:00',
  },
  {
    title: 'Grimwood City: Long Winter Night',
    start: '2023-12-22T20:00:00',
  },
  {
    title: 'Grimwood City: Long Winter Night',
    start: '2023-12-29T20:00:00',
  },
  {
    title: 'Grimwood City: Long Winter Night',
    start: '2024-01-05T20:00:00',
  },
  {
    title: 'World Building Days',
    start: '2023-11-29T20:00:00',
  },
  {
    title: 'World Building Days',
    start: '2023-12-06T20:00:00',
  },
  {
    title: 'World Building Days',
    start: '2023-12-13T20:00:00',
  },
  {
    title: 'World Building Days',
    start: '2023-12-20T20:00:00',
  },
  {
    title: 'World Building Days',
    start: '2023-12-27T20:00:00',
  },
  {
    title: 'World Building Days',
    start: '2024-01-03T20:00:00',
  },
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