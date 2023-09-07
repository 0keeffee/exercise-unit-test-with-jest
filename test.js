test("One euro should be 1.206 dollars", function(){
    const app = require('./app.js');  
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
      


    const dollars = app.fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.206;

   
    expect(dollars).toBe(expected);  // Compare calculated dollars with expected value
});
