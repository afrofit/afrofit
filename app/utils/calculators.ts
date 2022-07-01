export const calculatePercentageCompleted = (
  partial: number,
  total: number
) => {
  if (partial > total) return null;
  const result = (100 * partial) / total;
  return Math.floor(result);
};
