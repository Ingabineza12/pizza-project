////////////////////////////// delivery button
$(function(){
    $("#delivery").click(function(event){
        event.preventDefault();
      
        prompt("Enter the location to deliver to:");
    });
})


////////////////////////////// add another order button
$(function(){
    $("#add-order").click(function(event){
        event.preventDefault();

    });
})



////////////////////////////// To see order button

$(function(){
    $("#see-order").click(function(event){
        event.preventDefault();

         // calculating the total price.

        var chargesOfPizzaSize = parseInt($("#size-charges").val());
        if(isNaN(chargesOfPizzaSize)){
            chargesOfPizzaSize = 0;
        }
        var chargesOfCrust = parseInt($("#crust-charges").val());
        if(isNaN(chargesOfCrust)){
            chargesOfCrust = 0;
        }
        var chargesOfToppings = parseInt($("#toppings-charges").val());
        if(isNaN(chargesOfToppings)){
            chargesOfToppings = 0;
        }
        
        var temp = chargesOfPizzaSize + chargesOfCrust + chargesOfToppings;


        var newPrice = new Orderprice(chargesOfPizzaSize,chargesOfCrust,chargesOfToppings);
        newPrice.output(temp);

          
        //// outputting the orders made by the 
        
        var inputtedPizzaSize = $("#pizza-size").val();
        var inputtedPizzaCrust = $("#pizza-crust").val();
        var inputtedPizzaTopping = $("#pizza-topping").val();
        var inputtedPizzaFlavour = $("#pizza-flavour").val();

        var inputtedOrder = new Order(inputtedPizzaSize,inputtedPizzaCrust,inputtedPizzaTopping,inputtedPizzaFlavour);
        inputtedOrder.inputted(); 
        
        // reset the fields
        resetFields()

    });
})

// constructor and prototypes of total price calculations
function Orderprice( sizeCharges, crustCharges,toppingsCharges){
    
    this.sizeC = sizeCharges;
    this.crustC = crustCharges;
    this.toppingsC= toppingsCharges;
}
Orderprice.prototype.output = function(temp)
{

   $(".total-price").text(temp + " RWF");

};


// constructor and prototypes of the add new order
function Order(pizzaSize, pizzaCrust, pizzaTopping , pizzaFlavour) {

    this.size = pizzaSize;
    this.crust = pizzaCrust;
    this.toppings = pizzaTopping;
    this.flavour = pizzaFlavour;
}
Order.prototype.inputted = function()
{

    var inputtedPizzaSize = $("#pizza-size").val();
    var inputtedPizzaCrust = $("#pizza-crust").val();
    var inputtedPizzaTopping = $("#pizza-topping").val();
    var inputtedPizzaFlavour = $("#pizza-flavour").val();
    var inputtedOrder = new Order(inputtedPizzaSize,inputtedPizzaCrust,inputtedPizzaTopping,inputtedPizzaFlavour);

    $("#show-your-order").show();
    $(".size").text(inputtedOrder.size);
    $(".crust").text(inputtedOrder.crust);
    $(".topping").text(inputtedOrder.toppings);
    $(".flavour").text(inputtedOrder.flavour);
}

function resetFields() {
    $("#pizza-size").val("");
    $("#pizza-crust").val("");
    $("#pizza-topping").val("");
    $("#pizza-flavour").val("");
    $("#size-charges").val("");
    $("#crust-charges").val("");
    $("#toppings-charges").val("");

}