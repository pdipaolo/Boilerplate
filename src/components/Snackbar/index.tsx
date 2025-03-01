import React, { useEffect } from 'react';

import { View } from 'react-native';

import { useAppDispatch, useAppSelector } from '../../redux';
import { RootState } from '../../redux/store';

import { dismissSnackbar } from './slices';

import Text from '../../ui/Text';
import { translate } from '../../translations/translate';
import styles from './styles';
import Icon from '../../ui/Icon';
import { ICON } from '../../ui/Icon/constants';
export function Snackbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isVisible, snackbarType} = useAppSelector(
    (state: RootState) => state.snackbar,
  );

  useEffect(() => {
    isVisible && setTimeout(() => {
      dispatch(dismissSnackbar());
    }, 5000);
  }, [isVisible]);

  if (!isVisible) {
    return null;
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>{translate('components.snackbar.title', {context: snackbarType})}</Text>
        <Icon id={ICON.CLOSE} onPress={() => dispatch(dismissSnackbar())} width={20} height={20} />
      </View>
  );
}
