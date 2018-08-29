import Router from 'next/router'
import _ from 'lodash'
import { isBrowser } from './browserChecks'

const formatQuery = unformattedQuery => {
  return _.chain(unformattedQuery)
    .mapValues(query => _.toString(query))
    .pickBy(query => !_.isNil(query) && query !== '')
    .value()
}

export const setQueryParameters = query => {
  if (!isBrowser()) {
    return
  }

  const previousQuery = Router.router.query
  const formattedQuery = formatQuery(query)

  if (!_.isEqual(previousQuery, formattedQuery)) {
    Router.replace({
      pathname: '/',
      query: formattedQuery,
    })
  }
}
