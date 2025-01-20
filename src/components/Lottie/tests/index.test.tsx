import React from 'react';

import { render, screen } from '@testing-library/react-native';

import Lottie from '..';

describe('Lottie', () => {
  it('should match snapshot', () => {
    render(<Lottie id="example" />);

    expect(screen).toMatchSnapshot();
  });
});
