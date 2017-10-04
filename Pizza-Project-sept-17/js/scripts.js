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

//var orderExtraPizza = new Pizza (toppings, size, crust);
//user interface logic
$(document).ready(function() {
  $("#pizzaUserInput").submit(function(event) {
    event.preventDefault();
    var userToppings = [];
    var pizzaSize = $("#size").val();
    var crust = $("#crust").val();


    $("input:checkbox[name=toppings]:checked").each(function() {
       //$("#toppings").each(function() {
      //var userToppings = pizza.toppings.append("#toppings").val();
      var topping = $(this).val();
      console.log(topping);
      userToppings.push(topping);
  });

  console.log(userToppings);

  var orderedPizza = new Pizza (userToppings, pizzaSize, crust);
  console.log(orderedPizza.toppings);
  console.log(orderedPizza.size);
  console.log(orderedPizza.crust);
  console.log(orderedPizza);
  console.log(orderedPizza.getPrice());

    // var getPrice = pizza.getPrice();
    $("#orderDetails").append(orderedPizza.getPrice());

    // console.log(orderedPizza.crust);
    // console.log(orderedPizza.size);
      $("#output").text(orderedPizza.getPrice());
      //   $("#size").append(userSize);
      //     $("#crust").append(crust);
  });
});
// });
