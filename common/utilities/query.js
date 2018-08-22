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

  const formattedQuery = formatQuery(query)

  if(_.isEqual(Router.router.query, formattedQuery)){
    return
  }

  Router.push({
    pathname: '/',
    query: formattedQuery,
  })
}
