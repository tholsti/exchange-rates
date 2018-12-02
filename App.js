class App {

  static getRates(date, base) {
    exchangeTable.rates = []
    let today = new Date()
    let validate = document.getElementById('validate')
    validate.innerHTML = ""
  
    if (today.toISOString() < date || date.substring(0,4) < 1999) {
      validate.innerHTML = `<div>Please choose a date between 1.1.1999 and ${today.getDate()}. ${today.getMonth() +1}. ${today.getFullYear()}</div>`
    }

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