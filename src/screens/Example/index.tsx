import React from 'react';
import {Text, View} from 'react-native';
import {translate} from '../../translations/translate';
import Icon from '../../components/Icon';
import { ICON } from '../../components/Icon/constants';

function Example() {
  console.log('Example');
  return (
    <View style={{backgroundColor: 'red', height: '100%', width: '100%'}}>
      {/* <Text>{translate('example:helloUser', {name: 'User'})}</Text> */}
      {/* <Icon id={ICON.CHEVRON_LEFT}/> */}
    </View>
  );
}

export default Example;
