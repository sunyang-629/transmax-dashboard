import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)

/**
 * * Retrieves the current weather time.
 * @returns {string} Formatted string(AbbreviatedDateTimeFormat) representing the current weather time.
 */
export const getWeatherTime = () => dayjs().format('ddd Do \xa0\xa0h:mm A')
