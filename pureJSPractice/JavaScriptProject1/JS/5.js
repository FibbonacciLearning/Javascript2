function lokesh(){
var deliveryCity = document.getElementById("deliveryCity").value;
var orderPrice = document.getElementById("orderPrice").value;
var deliveryCharge = 1;
if((deliveryCity === "Delhi")&(orderPrice > 10)){deliveryCharge = 0;}else{deliveryCharge = 5;}
document.getElementById("result").innerHTML = deliveryCharge;
}
