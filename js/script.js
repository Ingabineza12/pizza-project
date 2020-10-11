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

        /////////////////////////////////////////

    });
})

// constructor and prototypes of total price calculations
function Orderprice( sizeCharges, crustCharges,toppingsCharges){
    
    this.size = sizeCharges;
    this.crust = crustCharges;
    this.toppings= toppingsCharges;
}
Orderprice.prototype.output = function(temp)
{
   $(".total-price").text( "RWF " + temp);

};
////////////////////////////////////////////////////
