import _ from 'lodash'

export const repeat = async (toRepeat, delay) => {
  await toRepeat()
  _.delay(async() => await repeat(toRepeat, delay), delay)
}
