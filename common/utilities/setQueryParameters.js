import Router from 'next/router'

export default queries => {
  if(!process.browser){
    return
  }
  const filteredQueries = _.pickBy(queries, query => query !== null && query !== undefined && query !== '')

  Router.push({
    pathname: '/',
    query: filteredQueries,
  })
}
