import { GET_TASKS, LOADING, ERROR } from '../types/tasksTypes'

const INITIAL_STATE = {
  tasks: [],
  isLoading: false,
  error: null,
  description: '',
  createDate: '',
  active: '',
  redirect: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, tasks: action.payload, isLoading: false, error: null }
    case LOADING:
      return { ...state, isLoading: true }
    case ERROR:
      return { ...state, error: action.payload, isLoading: false }
    case 'CHANGE_DESCRIPTION':
      return { ...state, description: action.payload }
    case 'CHANGE_CREATEDATE':
      return { ...state, createDate: action.payload }
    case 'CHANGE_ACTIVE':
      return { ...state, active: action.payload }
    case 'AGGREGATED':
      return {
        ...state,
        tasks: {},
        isLoading: false,
        error: '',
        redirect: true
      }
    default:
      return state
  }
}