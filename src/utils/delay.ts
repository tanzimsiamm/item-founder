export const delay = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });
};
