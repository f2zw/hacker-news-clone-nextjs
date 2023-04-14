export const fetcher = (url: string) =>
  fetch(url, {
    cache: 'default'
  }).then(res => res.json());
