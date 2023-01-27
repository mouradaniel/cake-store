import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },

  body: {
    backgroundColor: '$white',
    color: '$gray500',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontWeight: 700
  }
})