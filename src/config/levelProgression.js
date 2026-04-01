export function getLevelConfig(levelIdx) {
  const n = levelIdx + 1;
  if (n <= 5) return { colors: 2 + Math.floor((n - 1) / 3), empty: 1 };
  if (n <= 25) return { colors: 3 + Math.floor((n - 6) / 10), empty: 1 };
  if (n <= 40) return { colors: 3 + Math.floor((n - 26) / 7), empty: 1 };
  if (n <= 75) return { colors: 4 + Math.floor((n - 41) / 18), empty: 1 };
  if (n <= 160) return { colors: 5 + Math.floor((n - 76) / 43), empty: 1 };
  if (n <= 1500) return { colors: 6 + Math.floor((n - 161) / 447), empty: 1 };
  if (n <= 3000) return { colors: 7 + Math.floor((n - 1501) / 750), empty: 1 };
  return { colors: Math.min(10, 8 + Math.floor((n - 3001) / 667)), empty: 1 };
}
