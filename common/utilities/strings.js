import _ from 'lodash'

export const matches = (query, string) => {
  const lowerCaseQuery = _.toLower(query)
  const whitespaceSeperatedQuery = _.split(lowerCaseQuery, ' ')
  const lowerCaseString = _.toLower(string)

  return _.every(whitespaceSeperatedQuery, seperatedQuery => _.includes(lowerCaseString, seperatedQuery))
}
