import {useDispatch, useSelector, type TypedUseSelectorHook} from 'react-redux';

import {type RootState, type AppDispatch} from './store';

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {useAppDispatch, useAppSelector};
