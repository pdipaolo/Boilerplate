import React from 'react';
import {Text} from 'react-native';
import {translate} from '../../translations/translate';
import Icon from '../../components/Icon';
import { ICON } from '../../components/Icon/constants';

function Example() {
  return (
    <>
      <Text>{translate('example:helloUser', {name: 'User'})}</Text>
      <Icon id={ICON.BONUS}/>
    </>
  );
}

export default Example;
