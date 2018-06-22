var prices = [];
var foodproducts = [];
var selected = [];

$( document ).ready(function() {
    console.log( "ready" );

    $(".BestelText").click(function() {

		console.log("klik");

		var name = this.dataset.name;
		var price = this.dataset.price;

		price = parseFloat(price.substring(1));

		prices.push(price);
		foodproducts.push(name);
		var sum = 0;

		for (var i = 0; i < prices.length; i++) {
			 sum += prices[i];
		}
		sum = Math.round(sum * 100) / 100;

		console.log(foodproducts);
		foodproducts.forEach(function(product) {
			// console.log(product);
			
			console.log("product is " + product + "geklikt");
			if (product > 2) {
				console.log("Meer van dit product dan 2");
			}
			else{
			
			$("#WinkelItems").append("<p>" + name + " : " + " € " + price + "</p>");
			}
		});
		document.getElementById("Total").innerHTML ="Totale Prijs= " + "€" + sum;
	});

	$("#BestelActie").click(function(){
		
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

  



 
// Email categorysatie, zelfde volgorde navigatie,

// USB Fotos op stickie zetten

// Groter letter type EMAIL

// Breder letter type EMAIL

// Duidelijk maken van EMAIL

// Product opties zoals: geen sla of tomaat, wit brood bruin brood.

// Uitleg gebruik van oude site

// Logo bovenin formulier en in navigatie

// Lijst vanuit email duidelijk is en geen stukken tussen zit

// Hotmail email: Studiowestpoortbestellingen@


