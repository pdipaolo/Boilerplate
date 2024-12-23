import { createSelector } from '@reduxjs/toolkit';

import { type PropsTypes } from './types';
import { RootState } from './store';

const selectorGlobal = (state: RootState) => state.config;

const selectorConfig = createSelector(
  selectorGlobal,
  (substate: PropsTypes) => substate.config,
);

export { selectorConfig };
