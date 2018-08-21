import { createSelector } from 'reselect-change-memoize'
import setQueryParameters from 'common/utilities/setQueryParameters'

export default createSelector(
  'filters',
  state => state.filters,
  filtersState => {
    setQueryParameters({ showFailed: filtersState.showFailed, projectQuery: filtersState.projectQuery })

    return filtersState
  },
)
