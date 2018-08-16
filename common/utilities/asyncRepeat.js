import _ from 'lodash'

export const asyncRepeat = async (toRepeat, delay) => {
  await toRepeat()
  _.delay(async() => await asyncRepeat(toRepeat, delay), delay)
}
