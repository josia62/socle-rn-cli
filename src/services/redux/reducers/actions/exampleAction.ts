import {
  updateAge,
  updateToken,
} from '../slices/exampleSlice';
import { selectAge, selectToken } from '../selectors/exampleSelectors';

export const exampleAction =
  (valueToken: string, valueAge: number) => async (dispatch: any, getState: any) => {
    const state = getState();
    const age = selectAge(state);
    const token = selectToken(state);
    const anotherAge = state.example[`age`];
    const anotherToken = state.example[`token`];
    dispatch(updateAge(valueAge));
    dispatch(updateToken(valueToken));
  };
