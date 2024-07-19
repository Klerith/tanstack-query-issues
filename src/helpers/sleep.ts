export const sleep = (milliseconds: number) => {
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, milliseconds);
  });
};
