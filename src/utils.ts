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

export const dateToEpoch = (d: Date) => d.setHours(0, 0, 0, 0);

export const getFormattedDate = (dateInMs: number) => {
  const date = new Date(dateInMs);
  const rawMonth = date.getMonth() + 1;
  const month = rawMonth < 10 ? `0${rawMonth}` : rawMonth;
  const day = date.getDate();

  return `${day}/${month}`;
};
