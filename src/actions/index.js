import { EXAMPLE_ACTION } from '../actions/types';


export const createExample = () => {
  return (dispatch) => {
    dispatch({'type': EXAMPLE_ACTION});
  }
};
