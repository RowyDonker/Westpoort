var prices = [];
var foodproducts = [];
var selected = [];

$( document ).ready(function() {
    console.log( "ready" );

    $(".BestelText").click(function() {

	console.log("Dit werkt");
	// console.log("Prijs is " + this.dataset.price);

	var name = this.dataset.name;
	var price = this.dataset.price;

	// $('.FoodSelection input:checked').each(function() {
 //    selected.push($(this).attr('name'));
 //    console.log(selected);
// });
	price = parseFloat(price.substring(1));
	
	if (foodproducts.includes(name)) {
		countInArray(foodproducts, name); // returns 2
		
	}
	

	prices.push(price);
	foodproducts.push(name);
	console.log("de array prijs : " + prices);
	console.log("de array food : " + foodproducts);
	var sum = 0;
	for (var i = 0; i < prices.length; i++) {
		 sum += prices[i];
	}
	sum = Math.round(sum * 100) / 100;

	// console.log(sum);
	document.getElementById("Total").innerHTML ="Totale Prijs= " + "€" + sum;
	$("#WinkelItems").append("<p>" + name + " : " + " € " + price + "</p>");
	// console.log("tottaal" + prices.reduce(getSum));
	});

	$("#BestelActie").click(function(){
		console.log("werkt");
		document.location.href = "http://localhost/bewijzenmap/jaar3/Westpoort/index.php?page=Form";

	});
	function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    console.log(count + 1);
	}

});

  


