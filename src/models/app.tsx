import initialState from '../store/app';

import { createModel } from '@rematch/core';
import { RootModel } from './index';

export const app = createModel<RootModel>()({
  state: initialState,
  reducers: {
    // handle state changes with pure functions
    // increment(state, payload: number) {
    //     return state + payload
    // },
  },
  // effects: (dispatch) => ({
  //     // handle state changes with impure functions.
  //     // use async/await for async actions
  //     async incrementAsync(payload: number, state) {
  //         console.log('This is current root state', state);
  //         await new Promise(resolve => setTimeout(resolve, 1000))
  //         dispatch.count.increment(payload)
  //     },
  // }),
});
