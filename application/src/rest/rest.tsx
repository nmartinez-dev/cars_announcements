export const rest = (url: string) =>
  fetch(url, { cache: 'force-cache' }).then((res) => res.json());
