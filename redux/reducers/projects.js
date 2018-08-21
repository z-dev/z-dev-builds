const initialState = {
  projects: null,
}

export default function projects(state = initialState, action) {
  switch (action.type) {
    case 'projects/UPDATE_PROJECTS':
      return { ...state, projects: action.payload.projects }
    default:
      return state
  }
}
