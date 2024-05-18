import React, { useEffect } from 'react';

import { View } from 'react-native';

import Lottie from '../Lottie';
import { ANIMATION } from '../Lottie/constants';
import { useAppDispatch, useAppSelector } from '../../redux';
import { RootState } from '../../redux/store';

import { dismissLoading } from './slices';
import styles from './styles';

export function Loader(): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(
    (state: RootState) => state.loading.isLoading,
  );

  useEffect(() => {
    isLoading && setTimeout(() => dispatch(dismissLoading()), 10000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (!isLoading) {
    return <></>;
  }

  return (
    <View style={styles.loading}>
      <Lottie id={ANIMATION.LOADER} style={styles.animation} />
    </View>
  );
}
