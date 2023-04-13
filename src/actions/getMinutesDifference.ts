export function getMinutesDifference(date: Date): number {
  const now = new Date();
  const diffMilliseconds = Math.abs(now.getTime() - date.getTime());
  const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
  return diffMinutes;
}
