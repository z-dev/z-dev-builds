import withRedux from 'next-redux-wrapper'
import store from '~/redux/store'

export default mapStateToProps => {
  return withRedux(() => {
    return store
  }, mapStateToProps)
}
