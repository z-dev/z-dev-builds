import Router from 'next/router'
import isBrowser from './isBrowser'
import convertStringToBoolean from './convertStringToBoolean'

export default (previousQueries, queries) => {
  const filteredQueries = _.pickBy(queries, query => query !== null && query !== undefined && query !== '')
  const parsedPreviousQueries = _.mapValues(previousQueries, query => convertStringToBoolean(query))

  if(!isBrowser() || _.isEqual(parsedPreviousQueries, filteredQueries)){
    return
  }

  Router.push({
    pathname: '/',
    query: filteredQueries,
  })
}
