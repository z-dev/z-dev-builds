import Router from 'next/router'
import { isBrowser } from './browserChecks'

const formatQuery = query => {
  return _.chain(query)
    .mapValues(query => _.toString(query))
    .pickBy(query => !_.isNil(query) && query !== '')
    .value()
}

export const setQueryParameters = query => {
  if(!isBrowser()){
    return
  }

  const previousQuery = Router.router.query
  const formattedQuery = formatQuery(query)

  if(_.isEqual(previousQuery, formattedQuery)){
    return
  }

  Router.push({
    pathname: '/',
    query: formattedQuery,
  })
}
