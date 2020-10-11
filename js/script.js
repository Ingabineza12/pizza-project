////////////////////////////// delivery button
$(function(){
    $("#delivery").click(function(event){
        event.preventDefault();
      
        prompt("Enter the location to deliver to:");
    });
})


////////////////////////////// add another order button
$(function(){
    $("#add-order").click(function(){
        $("#new-pizzas").append('<div id="new-pizzas">' +
        '<div class="form-group">' + 
        '<label for="size"><strong>Pizza Size: </strong></label>' + 
        '<select class="form-control newsize" id="pizza-size" value="size" style="background:transparent" >' + 
        '<option >choose size...</option>' + 
        '<option  id="la">Large   4000rwf</option>' +
        '<option  id="med">Medium   2000rwf</option>' +
        '<option  id="sma">Small   1000rwf</option>'+
        ' </select>'+
        '</div> </br> '+
        '<div>'+
        '<label for="size-charges"> Charges of the choosen size</label>'+
        '<input id="size-charges" type="number" min="0" style="background:transparent">'+
        '</div></br>'+
        '<div class="form-group">'+
        '<label for="new-crust"><strong>Choose your Crust:</strong></label>'+
        '<select class="form-control new-crust" id="pizza-crust"  style="background:transparent" >'+
        '<option>choose crust...</option>'+
        'option  id="crust">crispy   10000rwf</option>'+
        '<option  id="crust">Cheese stuffed Crust   6000 rwf </option>'+
        '<option  id="crust">Gluten-free Crust   7000rwf</option>'+
        '<option  id="crust">Thin Crust   8000rwf</option>'+
        '<option  id="crust">Flat bread Crust   9000rwf</option>'+
        '</select>'+
        '</div></br>'+
        '<div>'+
        '<label for="crust-charges"> Charges of the choosen crust</label>'+
        '<input id="crust-charges" type="number" min="0" style="background:transparent" >'+
        '</div></br>'+
        '<div class="form-group">'+
        '<label for="new-topping"><strong>The Toppings :</strong></label><br>'+
        '<input type="checkbox" id="crust" name="crust1" value="mushrooms">'+
        '<label for="crust1"> mushrooms 1000rwf</label><br>'+
        '<input type="checkbox" id="crust" name="crust2" value="Sausage">'+
        '<label for="crust2"> Sausage 4000rwf</label><br>'+
        '<input type="checkbox" id="crust" name="crust3" value="Onions">'+
        '<label for="crust3"> Onions 500rwf</label><br>'+
        '<input type="checkbox" id="crust" name="crust4" value="Green pepper">'+
        '<label for="crust4"> Green pepper 1000rwf</label><br>'+
        '<input type="checkbox" id="crust" name="crust5" value="Cheese">'+
        '<label for="crust5"> cheese 2000rwf</label><br>'+
        '</div>  </br>'+
        '<div>'+
        '<label for="toppings-charges"> Charges of the choosen Toppings</label>'+
        '<input id="toppings-charges" type="number" min="0" style="background:transparent" >'+
        ' </div></br>'+
        '<div class="form-group">'+
        '<label for="type-pizza"><strong>Types of pizza flavour :   </strong></label>'+
        '<select class="form-control newType" id="pizza-flavour" value="type" style="background:transparent" >'+
        '<option>choose flavour...</option>'+
        '<option  id="berry">Berry pizza </option>'+
        '<option  id="macaroni">Macaroni pizza </option>'+
        '<option  id="buffalo">Buffalo pizza </option>'+
        '<option id="brown">Brown butter pizza </option>'+
        '<option  id="turkish">turkish pizza </option>'+
        '<option  id="sushi">sushi rice pizza </option>'+
        '<option  id="burrata">Burrata pizza </option>'+
        '<option  id="italiana">italiana pizza</option>'+
        '</select>'+
        '</div>'+
        '<div class="deliver"> '+
        '<label for="delivery"><strong>Want it to be delivered:</strong></label>'+
        '<input type="radio" id="Yes" name="Deliver" value="Yes" onclick="alert("Charges on delivery are 1000Rwf")" >'+
        '<label for="yes">Yes</label>'+
        '<input type="radio" id="No " name="Deliver" value="No">'+
        '<label for="no">No</label><br>'+
        '</div>'+
        ' </div>');
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


// constructor and prototypes to display the entered order
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