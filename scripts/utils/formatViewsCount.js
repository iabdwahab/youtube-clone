export function formatViewsCount(count) {
  // Sure that count will be number
  count = Number(count);

  const stringCount = count.toString();

  if (count >= 1_000_000_000) {
    return `${stringCount.slice(0, -9)}B`;

  } else if (count >= 1_000_000) {
    return `${stringCount.slice(0, -6)}M`;

  } else if (count >= 1_000) {

    return `${stringCount.slice(0, -3)}K`;
  } 

  return count;
}