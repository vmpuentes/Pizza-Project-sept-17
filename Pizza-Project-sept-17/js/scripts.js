//business logic
function Pizza (toppings,size,crust) {
  this.toppings = " ";
  this.size = " ";
  this.crust - " ";
}

function Customer (name, order, finalPrice) {
  this.name = name;
  this.orger = order;
  this.finalPrice = price;
}

Pizza.prototype.getPrice = function () {

}

var orderExtraPizza = new Pizza (toppings, size, crust);
//user interface logic
$(document).ready(function() {
  $("#pizzaUserInput").submit(function(event) {
    event.preventDefault();
    $("#input:checkbox[name=toppings]:checked").each(function() {
    var userToppings = $(this).val();
    var userSize = $("#size").val();
    var crust = $("#crust").val();
    var Pizza = new Pizza ();
    $("#toppings").each(function() {
      var userToppings = pizza.toppings.append("#toppings").val();
  });
    var getPrice = pizza.getPrice();
    $("#orderDetails").append(pizza.getPrice);
      $("#toppings").append(userToppings);
        $("#size").append(userSize);
          $("#crust").append(crust);  
        });
      });
