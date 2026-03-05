export const copyLink = (link?: string): Promise<void> => {
  if (!link) {
    return Promise.resolve();
  }

  return navigator.clipboard.writeText(link);
};

export default copyLink;
