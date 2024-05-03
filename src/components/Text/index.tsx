import React from 'react';

import { Text as RNText } from 'react-native';

import { Trans } from 'react-i18next';

import { styles } from './styles';
import { type PropsTypes } from './types';

function Text(props: PropsTypes): JSX.Element {
  const { style: propStyles, children, onPress } = props;

  return (
    <RNText
      style={[styles.text, propStyles]}
      adjustsFontSizeToFit={true}
    >
      {typeof children === 'string' ? (
        <Trans
          components={{
            b: <RNText style={[styles.text, propStyles, styles.bold]} />,
            i: <RNText style={[styles.text, propStyles, styles.italic]} />,
            u: <RNText style={[styles.text, propStyles, styles.underline]} />,
            strong: (
              <RNText style={[styles.text, propStyles, styles.extraBold]} />
            ),
            mainColor: (
              <RNText style={[styles.text, propStyles, styles.mainColor]} />
            ),
            a: (
              <RNText
                style={[styles.text, propStyles, styles.link]}
                onPress={onPress}
                
              />
            ),
          }}
        >
          {children}
        </Trans>
      ) : (
        children
      )}
    </RNText>
  );
}

export default Text;
