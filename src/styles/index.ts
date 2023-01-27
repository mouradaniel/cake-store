import { createStitches } from '@stitches/react';

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      black: '#000',
      white: '#FFF',

      gray100: '#F2F2F2',
      gray300: '#A6A6A6',
      gray500: '#717171',
      gray700: '#3E3E3E',

      pink: '#FBC0BF',
      
      coral: '#FB7673'
    },

    fontSizes: {
      sm: '0.75 rem',
      md: '1 rem',
      lg: '1.35 rem',
      xl: '2 rem'
    }
  }
})