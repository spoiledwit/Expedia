export const totTitleCase = (s: string): string =>
  s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => " " + c.toUpperCase());

export const getServerURL = (path = ""): string => {
  return `${process.env.NEXT_PUBLIC_BASE_URI}/${path}`;
};
