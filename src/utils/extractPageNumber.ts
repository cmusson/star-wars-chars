export const extractPageNumber = (url: string | null): number => {
  if (!url) return 1;

  const match = url.match(/page=(\d+)/);
  return match ? parseInt(match[1], 10) : 1;
};
