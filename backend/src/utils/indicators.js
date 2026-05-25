/**
 * Technical Indicators Calculator
 * ⚠️ For educational purposes only
 */

// RSI (Relative Strength Index)
function calculateRSI(prices, period = 14) {
  if (prices.length < period + 1) return null;

  let gains = 0;
  let losses = 0;

  for (let i = prices.length - period; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];
    if (diff > 0) gains += diff;
    else losses += Math.abs(diff);
  }

  const avgGain = gains / period;
  const avgLoss = losses / period;
  const rs = avgGain / avgLoss;
  const rsi = 100 - (100 / (1 + rs));

  return {
    value: rsi.toFixed(2),
    signal: rsi > 70 ? 'OVERBOUGHT' : rsi < 30 ? 'OVERSOLD' : 'NEUTRAL',
    disclaimer: 'RSI is a momentum indicator. Not a standalone trading signal.'
  };
}

// Simple Moving Average
function calculateSMA(prices, period = 20) {
  if (prices.length < period) return null;
  const sum = prices.slice(-period).reduce((a, b) => a + b, 0);
  return (sum / period).toFixed(2);
}

// Exponential Moving Average
function calculateEMA(prices, period = 20) {
  if (prices.length < period) return null;
  
  const multiplier = 2 / (period + 1);
  let ema = prices.slice(0, period).reduce((a, b) => a + b, 0) / period;

  for (let i = period; i < prices.length; i++) {
    ema = prices[i] * multiplier + ema * (1 - multiplier);
  }

  return ema.toFixed(2);
}

// Moving Average Convergence Divergence
function calculateMACD(prices) {
  const ema12 = calculateEMA(prices, 12);
  const ema26 = calculateEMA(prices, 26);
  
  if (!ema12 || !ema26) return null;

  const macd = parseFloat(ema12) - parseFloat(ema26);
  return {
    macd: macd.toFixed(2),
    signal: macd > 0 ? 'BULLISH' : 'BEARISH',
    disclaimer: 'MACD is a momentum indicator. Requires confirmation from other indicators.'
  };
}

// Bollinger Bands
function calculateBollingerBands(prices, period = 20, stdDev = 2) {
  const sma = parseFloat(calculateSMA(prices, period));
  const squaredDiffs = prices.slice(-period).map(p => Math.pow(p - sma, 2));
  const variance = squaredDiffs.reduce((a, b) => a + b, 0) / period;
  const std = Math.sqrt(variance);

  return {
    upper: (sma + std * stdDev).toFixed(2),
    middle: sma.toFixed(2),
    lower: (sma - std * stdDev).toFixed(2),
    disclaimer: 'Bollinger Bands show volatility. Price touching bands does not guarantee reversal.'
  };
}

module.exports = {
  calculateRSI,
  calculateSMA,
  calculateEMA,
  calculateMACD,
  calculateBollingerBands
};
