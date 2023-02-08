import React, { createContext, useState, useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getter } from '../../utils';

type Props = {
  children: JSX.Element;
};

type NewsContextType = {
  isNewsShown: boolean;
  changeNewsDisplay: () => void;
};

export const NewsContext = createContext<NewsContextType>({
  isNewsShown: true,
  changeNewsDisplay: () => {},
});

const TOP_NEWS_URL =
  'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

const GET_STORY_URL = (id: string | number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

export const NewsContextProvider = ({ children }: Props) => {
  const [isNewsShown, setIsNewsShown] = useState(true);

  const topStoriesQuery = useQuery('topnews', getter(TOP_NEWS_URL));

  const storyUrl = GET_STORY_URL(topStoriesQuery.data?.[0] ?? '1');
  const { data } = useQuery('story', getter(storyUrl), {
    enabled: !topStoriesQuery.isFetching,
  });

  const changeNewsDisplay = useCallback(
    () => setIsNewsShown(!isNewsShown),
    [isNewsShown, setIsNewsShown]
  );

  return (
    <NewsContext.Provider value={{ isNewsShown, changeNewsDisplay }}>
      {children}
    </NewsContext.Provider>
  );
};
