export const toUrl = (value: string): string => {
  return value.trim().replace(/\s/g, "-");
};
