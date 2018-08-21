const initialState = {
  showFailed: false,
  projectQuery: '',
}

export default function filters(state = initialState, action) {
  switch (action.type) {
    case 'filters/UPDATE_SHOW_FAILED':
      return { ...state, showFailed: action.payload }
    case 'filters/UPDATE_PROJECT_QUERY':
      return { ...state, projectQuery: action.payload }
    default:
      return state
  }
}
