import bodyParser from 'body-parser'

export default (expressApp, nextApp) => {
  const handle = nextApp.getRequestHandler()
  expressApp.use(bodyParser.json())

  expressApp.get('*', (request, response) => {
    return handle(request, response)
  })
}
