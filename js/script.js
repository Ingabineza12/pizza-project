var totalPrice = "";

$(function(){
    $("#form-order").submit(function(event){
        event.preventDefault();
        
    })
})


















function Order(pizzaSize, sizeCharges, crust, crustCharges, toppings, toppingsCharges, pizzaType, pizzaNumber){
    this.pizzaSize = pizzaSize;
    this.sizeCharges = sizeCharges;
    this.crust = crust;
    this.crustCharges = crustCharges;
    this.toppings = toppings;
    this.toppingsCharges = toppingsCharges;
    this.pizzaType = pizzaType;
    this.pizzaSize = pizzaSize;
}
