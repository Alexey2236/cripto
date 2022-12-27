export const loadTicker = (tickerName) => {
  try {
    return fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=02c4841bd6065d7d3c1eaaad3ee4834a3d251f61ee44545bad3141968e472d3f`
    ).then((r) => r.json());
  } catch (e) {
    console.log(e.message);
  }
};

export const getCoins = () => {
  try {
    return fetch(
      `https://min-api.cryptocompare.com/data/all/coinlist?summary=true`
    ).then((r) => r.json());
  } catch (e) {
    console.log(e.message);
  }
};

// (() => {
//   let delay = 0;
//   const j = document.querySelectorAll(
//     ".bloko-button bloko-button_kind-primary bloko-button_scale-small"
//   );
//   j.forEach((item) => {
//     setInterval(() => {
//       item.click();
//     }, delay);
//     delay += 2000;
//   });
// })();
