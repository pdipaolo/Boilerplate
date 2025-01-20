import { createSelector } from '@reduxjs/toolkit';

import { type RootState } from '../../redux/store';

import { type PropsTypes } from './types';

const selectorGlobal = (state: RootState) => state.loading;

const selectorLoading = createSelector(
  selectorGlobal,
  (substate: PropsTypes) => substate.isLoading,
);

export { selectorLoading };
