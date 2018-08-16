import _ from 'lodash'

export const repeat = (toRepeat, delay) => {
  toRepeat()
  _.delay(() => repeat(toRepeat, delay), delay)
}
