import React from 'react';

import { Pressable } from 'react-native';

import { useNavigation } from '../../navigators/Stack/hooks';
import Icon from '../Icon';
import { ICON } from '../Icon/constants';

import styles from './styles';
import { type PropsTypes } from './types';

function IconPrevScreen(props: PropsTypes): JSX.Element {
  const { canGoBack } = props;

  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.goBack();
  };

  if (!canGoBack) {
    return <></>;
  }

  return (
    <Pressable style={styles.container} onPress={handleOnPress}>
      <Icon id={ICON.CHEVRON_LEFT} />
    </Pressable>
  );
}

export default IconPrevScreen;
