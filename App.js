class App {

  static getRates(date, base) {
    exchangeTable.rates = []
    let table = document.getElementById('rates-table'); table.innerHTML = `
      <tr class >
      <td>Currency <span id="sort">SORT</span></td>
      <td>Buy</td>
      <td>Sell</td>
      </tr>
    `;

    fetch(`https://api.exchangeratesapi.io/${date}?base=${base}`)
      .then(response => response.json())
      .then(json => {
        for (let [key, value] of Object.entries(json.rates)) {
          let rate = new Rate(key, value)
          exchangeTable.rates.push(rate);
        }
        exchangeTable.render();
      })
  }
}