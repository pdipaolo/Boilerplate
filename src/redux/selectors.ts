import { createSelector } from '@reduxjs/toolkit';

import { type Config } from './types';
import { RootState } from './store';

const selectorGlobal = (state: RootState) => state.config;

const selectorConfig = createSelector(
  selectorGlobal,
  (substate: Config) => substate.config,
);

export { selectorConfig };
