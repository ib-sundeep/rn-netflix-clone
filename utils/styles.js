const DARK_COLOR = '#151515';

export function getPaddingFromAspectRatio(ar) {
  return `${100 / ar}%`;
}

export default {
  mainBackgroundColor: DARK_COLOR,
  primaryColor: '#e50914',
  tabBarIconSize: 18,
  borderRadius: 3,
  headerHeight: 60,
  contrastColor: '#ffffff',
  contrastFontColor: DARK_COLOR,
  gradientDarkColor: DARK_COLOR,
  gradientLightColor: 'rgba(0, 0, 0, 0)',
  posterAspectRatio: 2 / 3,
  cardWidth: 120,

  defaultFontColor: '#ffffff',
  darkFontColor: DARK_COLOR,

  smallFontSize: 12,
  defaultFontSize: 16,
  largeFontSize: 20,
  xLargeFontSize: 24,

  normalFontWeight: '400',
  boldFontWeight: '600',
  bolderFontWeight: '800',
};
