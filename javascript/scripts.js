var prices = [];


$( document ).ready(function() {
    console.log( "ready" );

    

    $(".FoodSelection").click(function() {

	// console.log("Name is " + this.dataset.name);
	// console.log("Prijs is " + this.dataset.price);

	var name = this.dataset.name;
	var price = this.dataset.price;
	price = parseFloat(price.substring(1));

	prices.push(price);
	// console.log("de array : " + prices);
	var sum = 0;
	for (var i = 0; i < prices.length; i++) {
		 sum += prices[i];

	}
	console.log(sum);
	sum = Math.round(sum * 100) / 100;
	console.log(sum);
	document.getElementById("Total").innerHTML = "€" + sum;
	$("#WinkelItems").append("<p>" + name + " : " + price + "</p>");



	



	// console.log("tottaal" + prices.reduce(getSum));
	});



});
