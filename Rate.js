class Rate {
  constructor(currency, rate) {
    this.currency = currency
    this.buy = (rate * .95).toFixed(4);
    this.sell = (rate * 1.05).toFixed(4);
  }
}
