import _ from 'lodash'

export const asyncRepeat = async (toRepeat, delay) => {
  await toRepeat()
  _.delay(() => asyncRepeat(toRepeat, delay), delay)
}
