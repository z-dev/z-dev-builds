import _ from 'lodash'

export const poll = (toRepeat, delay) => {
  toRepeat()
  _.delay(() => poll(toRepeat, delay), delay)
}

export const asyncPoll = async (toRepeat, delay) => {
  await toRepeat()
  _.delay(() => asyncPoll(toRepeat, delay), delay)
}
