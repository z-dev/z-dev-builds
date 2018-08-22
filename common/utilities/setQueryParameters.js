import Router from 'next/router'
import isBrowser from './isBrowser'
import convertStringToBoolean from './convertStringToBoolean'

export default query => {
  const previousQuery = Router.router.query
  const filteredQuery = _.pickBy(query, query => query !== null && query !== undefined && query !== '')
  const parsedPreviousQuery = _.mapValues(previousQuery, query => convertStringToBoolean(query))

  if(!isBrowser() || _.isEqual(parsedPreviousQuery, filteredQuery)){
    return
  }

  Router.push({
    pathname: '/',
    query: filteredQuery,
  })
}
