export const rest = (url: string) => fetch(url).then((res) => res.json());
