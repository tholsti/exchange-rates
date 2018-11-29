document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rate-date').valueAsDate = new Date();

  document.getElementById('display').addEventListener('click', () => {
    let base = document.getElementById('base-rate').value;
    let date = document.getElementById('rate-date').value;
        
    getRates(date, base);
    
  })
  
  // populate default list on page load
  let base = document.getElementById('base-rate').value;
  let date = document.getElementById('rate-date').value;
  getRates(date, base);

})

function getRates(date, base) {
  const main_currencies = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY']
  let table = document.getElementById('rates-table'); table.innerHTML = `
  <tr class >
  <td>Currency <span onClick="sortTable()" id="sort">SORT</span></td>
  <td>Buy</td>
  <td>Sell</td>
  </tr>
  `;

  fetch(`https://api.exchangeratesapi.io/${date}?base=${base}`)
    .then(response => response.json())
    .then(json => {
      for (let [key, value] of Object.entries(json.rates)) {
        rate = new Rate(key, value)
        // console.log(rate);

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

        row.appendChild(base)
        row.appendChild(buy)
        row.appendChild(sell)
        table.appendChild(row)
      }

    })
}

function sortTable() {
  console.log("sort")
}

