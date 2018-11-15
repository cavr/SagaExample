import {
  EXAMPLE_ACTION,
  SAGA_ACTION
} from '../actions/types'

export const ExampleReducer = (state = 100, action) => {
  console.log(action)
  switch (action.type) {
    case EXAMPLE_ACTION:
      return state + 1
    case SAGA_ACTION:
      return action.payload
    default:
      return state
  }
}
