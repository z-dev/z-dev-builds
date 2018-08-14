export const getAllBuilds = () => dispatch => {
  dispatch({ type: 'builds/GET_ALL_BUILDS_REQUEST' })
}
