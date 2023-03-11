import {DateTime} from 'luxon'

  export const useFormatTime = (time) => {
    const date = new Date(time)
    const luxDate = DateTime.fromJSDate(date)
    return {
        time: luxDate.toFormat('hh:mm a')
    }
  }