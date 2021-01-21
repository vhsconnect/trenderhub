export const lastWeeksDate = () =>
  new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7).toISOString().split('T')[0];
