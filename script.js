// Declare function to calculate Timmy's subtotal
const timmyTotal = (num1, num2, num3) => {
  return num1 * num2 - num3;

}
// Timmy has no subscription, but coupon = $10 discount
const timmySum = timmyTotal(25, 3, 10);
console.log(`Your total is $${timmySum}`);
// const newTimmySum = timmyTotal (timmySum, -10)
// Declare function to calculate Sarah's subtotal
const sarahTotal = (num1, num2) => {
// Sarah has subscription but no coupon = 25% off
  return (num1 * num2)*0.75;

}
const sarahSum = sarahTotal(50,1);
console.log(`Your total is $${sarahSum}`);

// Declare function to calculate Rocky's subtotal
const rockyTotal = (num1, num2, num3) => {
// Rocky has a subscription & a coupon = $10 off + 25% off
  return (num1*num2*0.75)-num3;

}
const rockySum = rockyTotal(30, 5, 10);
console.log(`Your total is $${rockySum}`);