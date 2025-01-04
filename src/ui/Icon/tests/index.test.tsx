import React from 'react';

import { render, screen } from '@testing-library/react-native';

import Icon from '../';
import theme from '../../../theme';
import { ICON } from '../constants';

describe('Icon', () => {
  it('should match snapshot', () => {
    render(<Icon src="https://placehold.co/600x400" />);

    expect(screen).toMatchSnapshot();
  });

  it('should render as link with width: 600', () => {
    const width = 600;

    const { root } = render(
      <Icon src="https://placehold.co/600x400" width={width} />,
    );

    const received = root.props.children.props.width;
    const expected = width;

    expect(received).toBe(expected);
  });

  it('should render as link with minHeight: 24', () => {
    const { root } = render(<Icon src="https://placehold.co/600x400" />);

    const received = root.props.style.minHeight;
    const expected = 24;

    expect(received).toBe(expected);
  });

  it('should render as id with width: 600', () => {
    const width = 600;

    const { root } = render(<Icon id={ICON.USER_CIRCLE} width={width} />);

    const received = root.props.width;
    const expected = width;

    expect(received).toBe(expected);
  });

  it(`should render as id with primaryColor: ${theme.palette.grey[900]} as default`, () => {
    const { root } = render(<Icon id={ICON.USER_CIRCLE} />);

    const received = root.props.primaryColor;
    const expected = theme.palette.grey[900];

    expect(received).toBe(expected);
  });

  it(`should render as id with primaryColor: ${theme.palette.primary.main} when prop passed`, () => {
    const { root } = render(
      <Icon id={ICON.USER_CIRCLE} primaryColor={theme.palette.primary.main} />,
    );

    const received = root.props.primaryColor;
    const expected = theme.palette.primary.main;

    expect(received).toBe(expected);
  });
});
