export const GAME_ECONOMY = {
  adRewardCoins: 30,
  levelBaseReward: 20,
  levelRewardStep: 5,
  levelRewardCap: 40,
  addTubeCost: 100,
  undoCost: 20,
};

export function getLevelReward(level) {
  const reward = GAME_ECONOMY.levelBaseReward + Math.floor((Math.max(1, level) - 1) / 3) * GAME_ECONOMY.levelRewardStep;
  return Math.min(reward, GAME_ECONOMY.levelRewardCap);
}

export function canAfford(coins, cost) {
  return Number(coins || 0) >= Number(cost || 0);
}
