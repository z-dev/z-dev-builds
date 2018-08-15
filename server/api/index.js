import bodyParser from 'body-parser'

export default (expressApp, handle) => {
  expressApp.use(bodyParser.json())

  expressApp.get('*', (request, response) => {
    return handle(request, response)
  })
}
