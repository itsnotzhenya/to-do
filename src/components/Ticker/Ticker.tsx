import React, { useContext } from 'react';

import { NewsContext } from '../NewsContextProvider';
import { useStyles } from './styles';

export const Ticker = () => {
  const { isNewsShown } = useContext(NewsContext);

  const classes: any = useStyles();
  const fallbackText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante elit, faucibus et pellentesque id, aliquam a augue. Proin scelerisque nisl vel fringilla vulputate.';

  return isNewsShown ? (
    <div className={classes.tickerWrapper}>
      <div className={classes.ticker}>
        <div className={classes.text}>{fallbackText}</div>
      </div>
    </div>
  ) : null;
};
