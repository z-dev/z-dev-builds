import Router from 'next/router'
import isBrowser from './isBrowser'
import convertStringToBoolean from './convertStringToBoolean'

export default query => {
  if(!isBrowser()){
    return
  }

  const previousQuery = Router.router.query
  const filteredQuery = _.pickBy(query, query => !_.isNil(query) && query !== '')
  const parsedPreviousQuery = _.mapValues(previousQuery, query => query === 'true' || query === 'false' ? convertStringToBoolean(query) : query)

  if(_.isEqual(parsedPreviousQuery, filteredQuery)){
    return
  }

  Router.push({
    pathname: '/',
    query: filteredQuery,
  })
}
