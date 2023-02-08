import React, { useContext } from 'react';
import { NewsContext } from '../NewsContextProvider';
import { useStyles } from './styles';

export const Ticker = () => {
  const { isNewsShown, news, url } = useContext(NewsContext);

  const classes: any = useStyles();
  const fallbackText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante elit, faucibus et pellentesque id, aliquam a augue. Proin scelerisque nisl vel fringilla vulputate.';

  return isNewsShown ? (
    <div className={classes.tickerWrapper}>
      <div className={classes.ticker}>
        <div className={classes.text}>
          <a className={classes.link} target="_blank" href={url ?? '#'}>
            {news || fallbackText}
          </a>
        </div>
      </div>
    </div>
  ) : null;
};
