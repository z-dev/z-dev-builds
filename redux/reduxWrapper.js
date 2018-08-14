import withRedux from 'next-redux-wrapper'
import store from '~/redux/store'
import rootReducer from './rootReducer'

export default mapStateToProps => {
  return withRedux((initialState, options) => {
    return store
  }, mapStateToProps)
}
