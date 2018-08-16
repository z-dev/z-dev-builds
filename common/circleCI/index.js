import CircleCI from 'circleci'

let circleCI
let circleCIInitialised = false

if(!circleCIInitialised){
  circleCIInitialised = true
  circleCI = new CircleCI({
    auth: process.env.CIRCLE_TOKEN
  })
}

export default circleCI

