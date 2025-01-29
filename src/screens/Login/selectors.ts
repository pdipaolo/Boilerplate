import { createSelector } from '@reduxjs/toolkit';

import { type RootState } from '../../redux/store';

import { type PropsTypes } from './types';

const selectorGlobal = (state: RootState) => state.login;

const selectorUser = createSelector(
  selectorGlobal,
  (substate: PropsTypes) => substate.user,
);

export { selectorUser };
