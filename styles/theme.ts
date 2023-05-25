import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {},
  fonts: {
    heading: 'Didact Gothic',
    body: 'Didact Gothic',
  },
  styles: {
    global: {
      h1: {
        fontSize: ['2.1rem', '2.8rem', '4rem', '2.8rem', '3.8rem', '4rem'],
        lineHeight: ['3.25rem', '3.55rem', '4.75rem', '5.05rem', '5.25rem'],
      },
      h2: {
        fontSize: [
          '2.75rem',
          '2.95rem',
          '3.25rem',
          '3.55rem',
          '3.55rem',
          '3.75rem',
        ],
        lineHeight: ['3.2rem', '3.4rem', '3.5rem', '3.8rem', '4rem'],
      },
      h3: {
        fontSize: ['1.5rem', '1.2rem', '1.5rem', '1.2rem', '1.5rem', '2rem'],
        lineHeight: ['1.6rem', '1.8rem', '2rem', '2.0rem', '2.3rem', '2.5rem'],
      },
      h4: {
        fontSize: [
          '1.0rem',
          '1.0rem',
          '1.0rem',
          '1.0rem',
          '1.125rem',
          '1.5rem',
        ],
        lineHeight: [
          '1.3rem',
          '1.3rem',
          '1.3rem',
          '1.6rem',
          '1.9rem',
          '2.2rem',
        ],
      },
      p: {
        fontSize: [
          '0.625rem',
          '0.625rem',
          '0.625rem',
          '0.925rem',
          '1rem',
          '1rem',
        ],
        lineHeight: [
          '1.5rem',
          '1.5rem',
          '1.5rem',
          '1.8rem',
          '1.5rem',
          '1.7rem',
        ],
      },
      span: {
        fontSize: ['1rem', '1rem', '1rem', '1rem', '0.8rem', '1rem'],
        lineHeight: [
          '1.5rem',
          '1.5rem',
          '1.5rem',
          '1.5rem',
          '1.0rem',
          '1.5rem',
        ],
      },
      sub: {
        fontSize: ['0.875rem'],
        lineHeight: ['1.375rem'],
      },
      section: {
        fontSize: ['0.75rem'],
        lineHeight: ['1.125rem'],
      },
      'body, input, textarea, button': {
        overflow: 'overlay',
      },
      '*: focus': {
        outline: 'none',
        backgroundColor: 'transparent',
      },
      /* '[disabled]': {
        opacity: '0.5',
        cursor: 'not-allowed',
      }, */
      '::-webkit-scrollbar': {
        width: '1rem',
      },
      '::-webkit-scrollbar-thumb': {
        borderRadius: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backgroundClip: 'content-box',
        border: '0.3rem solid transparent',
      },
      '::-webkit-scrollbar-track': {
        color: 'rgba(0, 0, 0, 0)',
      },
      /* '.Toastify__toast--success': {
        background: 'var(--toastify-color-success)';
      } */
    },
  },
});
