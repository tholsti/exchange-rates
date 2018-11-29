class Table {
  
  constructor() {
    this.rates = [];
  }
  
  render(baseSelection) {
    const main_currencies = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY']
    let table = document.getElementById('rates-table');
    table.innerHTML = `
      <tr class >
      <td>Currency <span id="sort">SORT</span></td>
      <td>Buy</td>
      <td>Sell</td>
      </tr>
    `;

    for (let [key, rate] of Object.entries(this.rates)) {

      let row = document.createElement('tr');
      let base = document.createElement('td');
      let buy = document.createElement('td');
      let sell = document.createElement('td');

      base.innerHTML = rate.base;
      buy.innerHTML = rate.buy;
      sell.innerHTML = rate.sell;

      if (main_currencies.indexOf(rate.base) > -1) {
        row.style.color = 'red';
      }
      
      if (baseSelection != rate.base) {
        row.appendChild(base)
        row.appendChild(buy)
        row.appendChild(sell)
        table.appendChild(row)
      }
    }
  }

  sortTable() {
    console.log("sort alphabetically")

  }
}