class Rate {
  constructor(base, rate) {
    this.base = base
    this.buy = (rate * .95).toFixed(4);
    this.sell = (rate * 1.05).toFixed(4);
  }
}
