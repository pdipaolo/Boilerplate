import React from 'react';

import { TextInput as RNTextInput, View } from 'react-native';

import { styles } from './styles';
import { type PropsTypes } from './types';
import Icon from '../Icon';
import { translate } from '../../translations/translate';
import Text from '../Text';

function TextInput({ containerStyle: propStyles, icon, handlePressIcon, error, ...rest }: PropsTypes): JSX.Element {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, propStyles]}>
        <RNTextInput style={styles.textInput} {...rest}/>
        {icon && <Icon id={icon} width={20} height={20} onPress={handlePressIcon}/>}
      </View>
      {error && <Text style={styles.error}>{translate('ui.textInput.error', {context: error})}</Text>}
    </View>
  );
}

export default TextInput;
