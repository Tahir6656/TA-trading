/**
 * Risk Management Calculator
 * ⚠️ For position sizing and risk management purposes only
 */

function calculatePositionSize(accountBalance, riskPercentage, entryPrice, stopLossPrice) {
  const riskAmount = accountBalance * (riskPercentage / 100);
  const priceDistance = Math.abs(entryPrice - stopLossPrice);
  
  if (priceDistance === 0) return null;
  
  const positionSize = riskAmount / priceDistance;
  
  return {
    riskAmount: riskAmount.toFixed(2),
    positionSize: positionSize.toFixed(4),
    unit: 'contracts/shares',
    disclaimer: 'This is a calculation tool only. Verify with your broker.'
  };
}

function calculateRiskRewardRatio(entryPrice, takeProfitPrice, stopLossPrice) {
  const profit = Math.abs(takeProfitPrice - entryPrice);
  const loss = Math.abs(entryPrice - stopLossPrice);
  
  if (loss === 0) return null;
  
  const rrRatio = profit / loss;
  
  return {
    potentialProfit: profit.toFixed(2),
    potentialLoss: loss.toFixed(2),
    riskRewardRatio: rrRatio.toFixed(2),
    recommendation: rrRatio >= 2 ? 'GOOD (2:1 or better)' : 'FAIR (Below 2:1)',
    disclaimer: 'This calculation assumes execution at specified prices. Slippage may occur.'
  };
}

function calculateStopLoss(entryPrice, percentage = 2) {
  const stopLoss = entryPrice * (1 - percentage / 100);
  return stopLoss.toFixed(2);
}

function calculateTakeProfit(entryPrice, percentage = 5) {
  const takeProfit = entryPrice * (1 + percentage / 100);
  return takeProfit.toFixed(2);
}

module.exports = {
  calculatePositionSize,
  calculateRiskRewardRatio,
  calculateStopLoss,
  calculateTakeProfit
};
