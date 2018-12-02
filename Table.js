class Table {
  
  constructor() {
    this.rates = [];
    this.sorted = null;
  }
  
  render() {
    const main_currencies = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY']
    let table = document.getElementById('rates-table');
    table.innerHTML = ""

    function renderRow(col1, col2, col3, isFirstRow=false) {
      let row = document.createElement('tr');
      let currency = document.createElement('td');
      let buy = document.createElement('td');
      let sell = document.createElement('td');

      isFirstRow ? currency.addEventListener('click', () => {
        exchangeTable.sortTable();
      }) : null;

      currency.innerHTML = col1;
      buy.innerHTML = col2;
      sell.innerHTML = col3;

      if (isFirstRow == false && main_currencies.indexOf(col1) > -1) {
        row.style.color = 'red';
      }
      
      if (document.getElementById('base-rate').value != col1) {
        row.appendChild(currency)
        row.appendChild(buy)
        row.appendChild(sell)
        table.appendChild(row)
      }
    }
    
    renderRow("Currency <span id=\"sort\">⥮</span>", "Buy", "Sell", true);

    for (let [key, rate] of Object.entries(this.rates)) {      
      renderRow(rate.currency, rate.buy, rate.sell)
    }
  }

  sortTable() {
    if (this.sorted == null || this.sorted == "desc") {
    this.rates.sort(function(a,b) {
      if (a.currency < b.currency) {
      return -1
      } else return 1
    })
      this.sorted = "asc";
    }
    else 
    {
    this.rates.sort(function(a,b) {
      if (a.currency < b.currency) {
      return 1
      } else return -1
    })
      this.sorted = "desc"}
    
    this.render()
  }

}

  