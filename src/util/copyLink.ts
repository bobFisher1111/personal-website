export const copyLink = (link: string | undefined) => {
  if (link !== undefined) {
    const copy = navigator.clipboard.writeText(link);
    return copy;
  }
};

export default copyLink;