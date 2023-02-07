import React, { createContext, useState, useCallback } from 'react';

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

export const NewsContextProvider = ({ children }: Props) => {
  const [isNewsShown, setIsNewsShown] = useState(true);

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
