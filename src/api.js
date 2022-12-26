export const loadTicker = (tickerName) => {
  return fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=02c4841bd6065d7d3c1eaaad3ee4834a3d251f61ee44545bad3141968e472d3f`
  ).then((r) => r.json());
};

export const getCoins = () => {
  return fetch(
    `https://min-api.cryptocompare.com/data/all/coinlist?summary=true`
  ).then((r) => r.json());
};
