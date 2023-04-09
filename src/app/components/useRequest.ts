const fetcher = (url: string) => fetch(url).then(res => res.json());

export async function getStories() {
  const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';

  const topStories = await fetcher(url);
  return topStories;
}

export async function getTopic(itemId: number) {
  const url = `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;

  const storyById = await fetcher(url);
  return storyById;
}
