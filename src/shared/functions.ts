export const notEmpty = <T>(obj: T | null | undefined): obj is T => {
  return obj !== null && obj !== undefined;
};

export const classNames = (classes: Record<string, boolean>) => {
  return Object.entries(classes)
    .map(([className, check]) => (check ? className : undefined))
    .filter(notEmpty)
    .join(" ");
};
