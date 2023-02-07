import { makeStyles } from '@mui/styles';

export const useStyles: any = makeStyles(() => ({
  tickerWrapper: {
    position: 'fixed' as 'fixed',
    bottom: '0',
    width: '100%',
    overflow: 'hidden' as 'hidden',
    height: '4rem',
    backgroundColor: 'rgba(#000, 0.9)',
    paddingLeft: '100%',
    boxSizing: 'content-box' as 'content-box',
  },
  ticker: {
    display: 'inline-block' as 'inline-block',
    height: '4rem',
    lineHeight: '4rem',
    whiteSpace: 'nowrap' as 'nowrap',
    paddingRight: '100%',
    boxSizing: 'content-box' as 'content-box',
    animationName: '$ticker',
    animationDuration: '30s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  text: {
    display: 'inline-block' as 'inline-block',
    padding: '0 2rem',
    fontSize: '1.5rem',
    color: '#fff' as '#fff',
  },
  '@keyframes ticker': {
    '0%': {
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      visibility: 'visible',
    },
    '100%': {
      '-webkit-transform': 'translate3d(-100%, 0, 0)',
      transform: 'translate3d(-100%, 0, 0)',
    },
  },
}));
