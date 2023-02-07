import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { NewsContext } from '../NewsContextProvider';
import { getter } from '../../utils';
import { useStyles } from './styles';

const TOP_NEWS_URL =
  'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

const GET_STORY_URL = (id: string | number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

export const Ticker = () => {
  const topStoriesQuery = useQuery('topnews', getter(TOP_NEWS_URL));

  const storyUrl = GET_STORY_URL(topStoriesQuery.data?.[0] ?? '1');
  const { data } = useQuery('story', getter(storyUrl), {
    enabled: !topStoriesQuery.isFetching,
  });

  const { isNewsShown } = useContext(NewsContext);

  const classes: any = useStyles();
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante elit, faucibus et pellentesque id, aliquam a augue. Proin scelerisque nisl vel fringilla vulputate.';

  return isNewsShown ? (
    <div className={classes.tickerWrapper}>
      <div className={classes.ticker}>
        <div className={classes.text}>{data && data.title}</div>
      </div>
    </div>
  ) : null;
};
