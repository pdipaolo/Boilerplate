import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import TabBar from '../';
import {
  BottomTabsNavigator,
  BottomTabsScreen,
  routes,
} from '../../../navigators/BottomTabs/constants';
import { store } from '../../../redux';
import theme from '../../../theme';
import { ICON } from '../../Icon/constants';

describe('TabBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    render(
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabsNavigator tabBar={TabBar}>
            {routes.map((route) => (
              <BottomTabsScreen key={route.name} {...route} />
            ))}
          </BottomTabsNavigator>
        </NavigationContainer>
      </Provider>,
    );
  });

  it('should match snapshot', () => {
    expect(screen).toMatchSnapshot();
  });

  describe('shadow props', () => {
    it('should have stretch: true', () => {
      const { root } = screen;
      const shadow = root.children[1];

      const received = shadow.props.stretch;
      const expected = true;

      expect(received).toBe(expected);
    });

    it('should have distance: 8', () => {
      const { root } = screen;
      const shadow = root.children[1];

      const received = shadow.props.distance;
      const expected = 8;

      expect(received).toBe(expected);
    });

    it(`should have startColor: ${theme.palette.common.black}12`, () => {
      const { root } = screen;
      const shadow = root.children[1];

      const received = shadow.props.startColor;
      const expected = `${theme.palette.common.black}12`;

      expect(received).toBe(expected);
    });
  });

  describe('view style', () => {
    it('should have flexDirection: row', () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;

      const received = view.props.style.flexDirection;
      const expected = 'row';

      expect(received).toBe(expected);
    });

    it('should have height: 56', () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;

      const received = view.props.style.height;
      const expected = 56;

      expect(received).toBe(expected);
    });

    it(`should have backgroundColor: ${theme.palette.common.white}`, () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;

      const received = view.props.style.backgroundColor;
      const expected = theme.palette.common.white;

      expect(received).toBe(expected);
    });
  });

  describe('pressable style', () => {
    it('should have flex: 1', () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;
      const pressable = view.props.children[0];

      const received = pressable.props.style.flex;
      const expected = 1;

      expect(received).toBe(expected);
    });

    it('should have gap: 1', () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;
      const pressable = view.props.children[0];

      const received = pressable.props.style.gap;
      const expected = 1;

      expect(received).toBe(expected);
    });

    it('should have alignItems: center', () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;
      const pressable = view.props.children[0];

      const received = pressable.props.style.alignItems;
      const expected = 'center';

      expect(received).toBe(expected);
    });

    it('should have marginTop: 8', () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;
      const pressable = view.props.children[0];

      const received = pressable.props.style.marginTop;
      const expected = 8;

      expect(received).toBe(expected);
    });

    // TODO: add navigation test
  });

  describe('icon props', () => {
    it(`should have id: ${ICON.HOME_FILLED}`, () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;
      const pressable = view.props.children[0];
      const icon = pressable.props.children[0];

      const received = icon.props.id;
      const expected = ICON.HOME_FILLED;

      expect(received).toBe(expected);
    });

    it(`should have primaryColor: ${theme.palette.primary.main}`, () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;
      const pressable = view.props.children[0];
      const icon = pressable.props.children[0];

      const received = icon.props.primaryColor;
      const expected = theme.palette.primary.main;

      expect(received).toBe(expected);
    });
  });

  describe('text style', () => {
    it(`should have color: ${theme.palette.primary.main}`, () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;
      const pressable = view.props.children[0];
      const text = pressable.props.children[1];

      const received = text.props.style[0].color;
      const expected = theme.palette.primary.main;

      expect(received).toBe(expected);
    });

    it(`should have fontSize: ${theme.typography.fontSize.s}`, () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;
      const pressable = view.props.children[0];
      const text = pressable.props.children[1];

      const received = text.props.style[0].fontSize;
      const expected = theme.typography.fontSize.s;

      expect(received).toBe(expected);
    });

    it(`should have fontFamily: ${theme.typography.fontFamily.extraBold}`, () => {
      const { root } = screen;
      const shadow = root.children[1];
      const view = shadow.props.children;
      const pressable = view.props.children[0];
      const text = pressable.props.children[1];

      const received = text.props.style[1].fontFamily;
      const expected = theme.typography.fontFamily.extraBold;

      expect(received).toBe(expected);
    });
  });
});
