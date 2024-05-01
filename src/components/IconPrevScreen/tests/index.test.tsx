import React from 'react';

import { render } from '@testing-library/react-native';

import IconPrevScreen from '../';
import { ICON } from '../../Icon/constants';

describe('IconPrevScreen', () => {
  it('should match snapshot', () => {
    const screen = render(<IconPrevScreen canGoBack />);

    expect(screen).toMatchSnapshot();
  });

  describe('pressable style', () => {
    it('should have padding: 10', () => {
      const { root } = render(<IconPrevScreen canGoBack />);

      const received = root.props.style.padding;
      const expected = 10;

      expect(received).toBe(expected);
    });
  });

  // TODO: add navigation test

  describe('icon', () => {
    it('should have icon', () => {
      const { root } = render(<IconPrevScreen canGoBack />);

      const icon = root.props.children;
      const received = icon;

      expect(received).toBeDefined();
    });

    describe('icon props', () => {
      it(`should have id: ${ICON.CHEVRON_LEFT}`, () => {
        const { root } = render(<IconPrevScreen canGoBack />);

        const icon = root.props.children[0];

        const received = icon.props.id;
        const expected = ICON.CHEVRON_LEFT;

        expect(received).toBe(expected);
      });
    });
  });
});
