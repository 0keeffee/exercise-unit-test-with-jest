const oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8
  };
  
  function fromDollarToYen(dollarAmount) {
    const yenAmount = dollarAmount * oneEuroIs["JPY"];
    return yenAmount;
  }
  
  function fromEuroToDollar(euroAmount) {
    const dollarAmount = euroAmount * oneEuroIs["USD"];
    return dollarAmount;
  }
  
  function fromYenToPound(yenAmount) {
    const poundAmount = yenAmount * oneEuroIs["GBP"];
    return poundAmount;
  }
  