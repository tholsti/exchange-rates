class App {

  static getRates(date, base) {
    exchangeTable.rates = []

    fetch(`https://api.exchangeratesapi.io/${date}?base=${base}`)
      .then(response => response.json())
      .then(json => {
        for (let [key, value] of Object.entries(json.rates)) {
          let rate = new Rate(key, value)
          exchangeTable.rates.push(rate);
        }
        exchangeTable.render(base);
      })
  }
}