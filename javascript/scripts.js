$( document ).ready(function() {
    console.log( "ready" );

    $(".FoodSelection").click(function() {

	// console.log("Name is " + this.dataset.name);
	// console.log("Prijs is " + this.dataset.price);

	var name = this.dataset.name;
	var price = this.dataset.price;

	console.log(name + price);
	});

});
