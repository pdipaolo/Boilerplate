const white = '#FFFFFF' as '#FFFFFF';
const black = '#000000' as '#000000';
const darkestGrey = '#212121' as '#212121';

const lightGreen = '#BFD630' as '#BFD630';
const green = '#0E8669' as '#0E8669';
const red = '#E63238' as '#E63238';
const yellow = '#FFF2CC';
const transparent = 'transparent' as 'transparent';
const ripple = 'rgba(0, 0, 0, 0.2)' as 'rgba(0, 0, 0, 0.2)';
const boxShadow = '0 2 4 rgba(100, 100, 100, 0.25)' as '0 2 4 rgba(100, 100, 100, 0.25)';

const palette = {
  primary: {
    main: green,
    light: `${green}80`, // 50% opacity (https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
    lighter: `${green}33`, // 20% opacity (https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
  },
  secondary: {
    main: lightGreen,
    light: `${lightGreen}80`, // 50% opacity (https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
    lighter: `${lightGreen}33`, // 20% opacity (https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
  },
  alpha: {
    black: {
      50: `${black}80`, // 50% opacity (https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
      80: `${black}CC`, // 80% opacity (https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
    },
  },
  common: {
    white,
    black,
    red,
    yellow,
    transparent,
    ripple,
  },
  grey: {
    50: '#FAFAFA' as '#FAFAFA',
    100: '#F5F5F5' as '#F5F5F5',
    200: '#EEEEEE' as '#EEEEEE',
    300: '#E0E0E0' as '#E0E0E0',
    400: '#BDBDBD' as '#BDBDBD',
    500: '#9E9E9E' as '#9E9E9E',
    600: '#757575' as '#757575',
    700: '#616161' as '#616161',
    800: '#424242' as '#424242',
    900: darkestGrey,
  },
  green: {
    300: '#F2F7D6' as '#F2F7D6',
  },
  text: {
    primary: darkestGrey,
  },
  boxShadow: boxShadow
};

export { palette };
