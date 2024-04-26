import React from 'react';
import {Text} from 'react-native';
import {translate} from '../../translations/translate';

function Example() {
  return (
    <>
      <Text>{translate('example:helloUser', {name: 'User'})}</Text>
    </>
  );
}

export default Example;
