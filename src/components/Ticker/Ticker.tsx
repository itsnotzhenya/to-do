import React from 'react';
import { useStyles } from './styles';

export const Ticker = () => {
  const classes: any = useStyles();
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante elit, faucibus et pellentesque id, aliquam a augue. Proin scelerisque nisl vel fringilla vulputate.';

  return (
    <div className={classes.tickerWrapper}>
      <div className={classes.ticker}>
        <div className={classes.text}>{text}</div>
      </div>
    </div>
  );
};
