const font = {
  mulishLight: 'Mulish-Light' as 'Mulish-Light', // 300 of fontWeight
  mulishRregular: 'Mulish-Regular' as 'Mulish-Regular', // 400 of fontWeight
  mulishMedium: 'Mulish-Medium' as 'Mulish-Medium', // 500 of fontWeight
  mulishSemiBold: 'Mulish-SemiBold' as 'Mulish-SemiBold', // 600 of fontWeight
  mulishBold: 'Mulish-Bold' as 'Mulish-Bold', // 700 of fontWeight
  mulishExtraBold: 'Mulish-ExtraBold' as 'Mulish-ExtraBold', // 800 of fontWeight
  mulishBlack: 'Mulish-Black' as 'Mulish-Black', // 900 of fontWeight
};

const size = {
  7: 7 as 7,
  12: 12 as 12,
  14: 14 as 14,
  16: 16 as 16,
  18: 18 as 18,
  20: 20 as 20,
  24: 24 as 24,
  30: 30 as 30,
};

const typography = {
  fontFamily: {
    light: font.mulishLight,
    regular: font.mulishRregular,
    medium: font.mulishMedium,
    semiBold: font.mulishSemiBold,
    bold: font.mulishBold,
    extraBold: font.mulishExtraBold,
    black: font.mulishBlack,
  },
  fontSize: {
    xs: size[7],
    s: size[12],
    m: size[14],
    l: size[16],
    xl: size[18],
    xxl: size[20],
    xxxl: size[24],
    xxxxl: size[30],
  },
};

export { typography };
