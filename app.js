
let price = prompt('What is Bitcoin price today?');
let amountDolar = prompt('How much $ do you have?');
let amountBitcoin = amountDolar/price;

if(isNaN(price) || isNaN(amountDolar)){
   alert('Only numbers is allowed')
}
else {
   alert(`You can buy ${amountBitcoin} BTC`);
}