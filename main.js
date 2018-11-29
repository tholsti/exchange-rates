document.addEventListener('DOMContentLoaded', () => {
  exchangeTable = new Table();
  document.getElementById('rate-date').valueAsDate = new Date();

  document.getElementById('display').addEventListener('click', () => {
    let base = document.getElementById('base-rate').value;
    let date = document.getElementById('rate-date').value;
    App.getRates(date, base);
    
  })
  
  // populate default list on page load
  let base = document.getElementById('base-rate').value;
  let date = document.getElementById('rate-date').value;
  App.getRates(date, base);

  document.getElementById('sort').addEventListener('click', () => exchangeTable.sortTable())
})
