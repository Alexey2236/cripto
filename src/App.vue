<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div class="container">
      <div class="w-full my-4"></div>
      <section>
        <div class="flex gap-5 items-center">
          <div class="max-w-xs">
            <label for="wallet" class="block text-sm font-medium text-gray-700"
              >Тикер
            </label>

            <div class="mt-1 relative rounded-md shadow-md">
              <input
                ref="inpittop"
                v-model="ticker"
                @keydown.enter="add"
                type="text"
                name="wallet"
                id="wallet"
                class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                placeholder="Например DOGE"
              />
            </div>

            <div
              v-if="ticker !== '' && hints.length !== 0"
              class="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap mt-2"
            >
              <span
                @click="addHint(hint)"
                v-for="hint in hints.slice(0, 4)"
                :key="hint.Id"
                class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
                >{{ hint.Symbol }}</span
              >
            </div>

            <div v-if="presenceCoinList" class="text-sm text-red-600 mt-2">
              Такой тикер уже добавлен
            </div>
          </div>
          <select
            v-model="selectedCurrency"
            class="h-10 mt-6 pr-10 flex items-center shadow-lg border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
          >
            <option v-for="currency in currencyList.sort()" :key="currency">
              {{ currency }}
            </option>
          </select>
        </div>
        <button
          @click="add"
          type="button"
          class="shadow-lg my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <plus-sign-icon />
          Добавить
        </button>
      </section>
      <input
        v-if="filterFavoritFn.length || tickers.length"
        v-model="filterFavorites"
        type="text"
        name="search"
        id="wallet"
        class="block w-full shadow-lg pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
        placeholder="Найти в избранном"
      />
      <template v-if="tickers.length">
        <hr class="w-full border-t border-gray-600 my-4" />

        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <transition-group name="card-list">
            <div
              v-for="t in paginatedTickers"
              :class="{
                'border-4': sel === t,
              }"
              :key="t.name"
              @click="sel = t"
              class="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
            >
              <div
                class="px-4 py-5 sm:p-6 text-center"
                :class="{
                  'bg-red-100': t.error === true,
                }"
              >
                <dt class="text-sm font-medium text-gray-500 truncate">
                  {{ t.name.toUpperCase() }} - {{ selectedCurrency }}
                </dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">
                  {{ t.price }}
                </dd>
              </div>
              <div class="w-full border-t border-gray-200"></div>
              <button
                @click.stop="handleDelete(t)"
                class="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#718096"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path></svg
                >Удалить
              </button>
            </div>
          </transition-group>
        </dl>
        <div v-if="tickers.length" class="flex gap-5 justify-center mt-2">
          <button
            v-if="page > 1"
            @click="page = page - 1"
            class="shadow-2xl my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Назад
          </button>
          <button
            v-if="hasNextPage"
            @click="page = page + 1"
            class="shadow-2xl my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Вперед
          </button>
        </div>

        <hr class="w-full border-t border-gray-600 my-4" />
      </template>
      <h1 class="text-center text-red-600 text-2xl mt-5" v-else>Монет нет</h1>
      <section class="relative" v-if="sel">
        <h3 class="text-lg leading-6 font-medium text-gray-900 my-8">
          {{ sel.name.toUpperCase() }} - {{ selectedCurrency }}
        </h3>
        <div
          class="flex items-end border-gray-600 border-b border-l h-64"
          ref="graphRef"
        >
          <div
            v-for="(graph, index) in normalizedGraph"
            :key="index"
            :style="{
              height: `${graph}%`,
              width: `${this.widthGraphElement}px`,
            }"
            class="bg-purple-800 border"
          ></div>
        </div>
        <button
          @click="sel = null"
          type="button"
          class="absolute top-0 right-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="30"
            height="30"
            x="0"
            y="0"
            viewBox="0 0 511.76 511.76"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
                fill="#718096"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import { loadTicker, getCoins, getListCurrency } from "./api";
import PlusSignIcon from "./components/PlusSignIcon.vue";
export default {
  components: {
    PlusSignIcon,
  },
  data() {
    return {
      ticker: "",
      tickers: [],
      sel: null,
      graphList: [],
      maxGraphElements: 1,
      widthGraphElement: 38,
      coinsList: [],
      hints: [],
      presenceCoinList: false,
      filterFavorites: "",
      page: 1,
      clearId: null,
      currencyList: [],
      selectedCurrency: "RUB",
    };
  },

  mounted() {
    this.$refs.inpittop.focus();

    if (localStorage.getItem("tickers")) {
      try {
        this.tickers = JSON.parse(localStorage.getItem("tickers"));
      } catch (e) {
        localStorage.removeItem("tickers");
      }
    }
    if (localStorage.selectedCurrency) {
      this.selectedCurrency = localStorage.selectedCurrency;
    }
    this.getPriceCript();
    this.getListCoins();
    this.getCurrency();

    window.addEventListener("resize", this.calculateMaxGraphElements);
  },

  unmounted() {
    clearInterval(this.clearId);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.calculateMaxGraphElements);
  },

  methods: {
    saveTickers() {
      const parsed = JSON.stringify(this.tickers);
      localStorage.setItem("tickers", parsed);
    },

    add() {
      this.isIncludesItemOfList();
      if (!this.ticker || this.presenceCoinList) {
        return;
      }

      const newTicker = {
        name: this.ticker,
        price: "...",
        prevPrice: [],
        error: false,
      };

      this.tickers.unshift(newTicker);
      this.filterFavorites = "";
      this.getPriceCript();
      this.saveTickers();
      this.ticker = "";
    },

    select(ticker) {
      this.sel = ticker;
      this.$nextTick(() => {
        this.calculateMaxGraphElements();
      });
    },

    isIncludesItemOfList() {
      const even = (element) =>
        element.name.toLocaleLowerCase() === this.ticker.toLocaleLowerCase();
      this.presenceCoinList = this.tickers.some(even);
    },

    addHint(hint) {
      this.ticker = hint.Symbol;
      this.add();
    },

    getPriceCript() {
      try {
        this.tickers.forEach((item) => {
          this.clearId = setInterval(async () => {
            const data = await loadTicker(item.name, this.selectedCurrency);
            if (data[this.selectedCurrency] > 1) {
              item.price = data[this.selectedCurrency].toFixed(2);

              item.error = false;
            } else if (data[this.selectedCurrency] < 1) {
              item.price = data[this.selectedCurrency].toPrecision(2);
              item.error = false;
            } else {
              item.price = "- - -";
              item.error = true;
            }

            if (this.sel?.name === item.name) {
              this.graphList.push(data[this.selectedCurrency]);
            }

            while (this.graphList.length > this.maxGraphElements) {
              this.graphList.shift();
            }
          }, 4000);
        });
      } catch (e) {
        console.log(e.message);
      }
    },

    async getListCoins() {
      try {
        const data = await getCoins();
        this.coinsList.push(...Object.values(data.Data));
      } catch (e) {
        console.log(e.message);
      }
    },

    async getCurrency() {
      try {
        const data = await getListCurrency();
        this.currencyList.push(...Object.keys(data.rates), "RUB");
      } catch (e) {
        console.log(e.message);
      }
    },

    handleDelete(tickerToRemove) {
      this.tickers = this.tickers.filter((t) => t !== tickerToRemove);
      this.saveTickers();
      if (this.sel === tickerToRemove) {
        this.sel = null;
      }
    },

    filtered(arr, name, current) {
      return arr.filter((item) =>
        item[name].toLocaleLowerCase().includes(current.toLocaleLowerCase())
      );
    },

    calculateMaxGraphElements() {
      if (!this.$refs.graphRef) {
        return;
      }
      this.maxGraphElements =
        this.$refs.graphRef.clientWidth / this.widthGraphElement;
    },
  },
  watch: {
    sel() {
      this.graphList = [];
    },

    ticker() {
      this.presenceCoinList = false;
      this.hints = this.filtered(this.coinsList, "Symbol", this.ticker);
    },
    filterFavorites() {
      this.page = 1;
    },
    paginatedTickers() {
      if (this.paginatedTickers.length === 0 && this.page > 1) {
        this.page -= 1;
      }
    },
    selectedCurrency(newName) {
      localStorage.selectedCurrency = newName;
      this.graphList = [];
    },
  },

  computed: {
    normalizedGraph() {
      const maxValue = Math.max(...this.graphList);
      const minValue = Math.min(...this.graphList);
      if (maxValue === minValue) {
        return this.graphList.map(() => 50);
      }
      return this.graphList.map(
        (price) => 10 + ((price - minValue) * 90) / (maxValue - minValue)
      );
    },
    startIndex() {
      return (this.page - 1) * 6;
    },
    endIndex() {
      return this.page * 6;
    },

    filterFavoritFn() {
      return this.filtered(this.tickers, "name", this.filterFavorites);
    },
    paginatedTickers() {
      return this.filterFavoritFn.slice(this.startIndex, this.endIndex);
    },
    hasNextPage() {
      return this.filterFavoritFn.length > this.endIndex;
    },
  },
};
</script>
<style scoped>
.card-list-enter-active,
.card-list-leave-active {
  transition: all 0.5s ease;
}

.card-list-enter-from,
.card-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.card-list-move {
  transition: transform 0.4s ease;
}
</style>
