import React from 'react';

import { Modal, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '../../redux';
import { RootState } from '../../redux/store';

import { dismissError } from './slices';
import styles from './styles';
import Button from '../../ui/Button';
import Text from '../../ui/Text';
import { translate } from '../../translations/translate';

export function ErrorBoundary(): JSX.Element {
  const dispatch = useAppDispatch();
  const { hasError, errorType} = useAppSelector(
    (state: RootState) => state.error,
  );

  if (!hasError) {
    return null;
  };

  return (
    <Modal
      animationType='none'
      transparent={true}
      visible={hasError}
    >
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>{translate('components.errorBoundary.title', {context: errorType})}</Text>
        <Text style={styles.description}>{translate('components.errorBoundary.description', {context: errorType})}</Text>
        <Button
          style={styles.button}
          textColor='white'
          onPress={() => dispatch(dismissError())}
        >
          {translate('components.errorBoundary.close')}
        </Button>
      </View>
    </View>
    </Modal>
  );
}
