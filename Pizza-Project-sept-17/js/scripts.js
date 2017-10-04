//business logic
function Pizza (toppings,size,crust) {
  this.toppings = toppings;
  this.size = size;
  this.crust = crust;
  this.basePrice = 10;
}

function Customer (name, order, finalPrice) {
  this.name = name;
  this.order = order;
  this.finalPrice = price;
}

Pizza.prototype.getPrice = function () {
  return (this.basePrice + this.toppings.length * .5);
}


$(document).ready(function() {
  $("#pizzaUserInput").submit(function(event) {
    event.preventDefault();
    var userToppings = [];
    var pizzaSize = $("#size").val();
    var crust = $("#crust").val();


    $("input:checkbox[name=toppings]:checked").each(function() {
      var topping = $(this).val();
      userToppings.push(topping);
  });

  var orderedPizza = new Pizza (userToppings, pizzaSize, crust);
    $("#orderDetails").append(orderedPizza.getPrice());
      $("#output").text(orderedPizza.getPrice());
  });
});
