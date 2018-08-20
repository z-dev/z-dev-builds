import CircleCI from 'circleci'

const circleCI = new CircleCI({
  auth: process.env.CIRCLE_TOKEN
})

export default circleCI
