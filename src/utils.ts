export const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);

export const getter = (url: string) => () =>
  fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(error);
    });
