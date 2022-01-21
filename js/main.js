var names = [
  "Stack of money",
  "Island",
  "PC",
  "Pair of jordans",
  "My will to live",
  "Some Yasuo skin",
];

var prices = [100, 200000000, 2500, 300, 0, 15];
var descriptions = [
  "ouuuu money :)",
  "Epstein style (yes offensive jokes, not for the faint hearted)",
  "Latest specs desktop computer",
  "Self explanatory",
  "yes yes",
  "Yasuo > literally every lol legend",
];
var products = [];

var display = "";

var addBtn = document.querySelectorAll("addItem");
var cartList = [];
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  const price = prices[i];
  const description = descriptions[i];

  var product = {
    id: i,
    name: name,
    price: price,
    description: description,
    quantity: 1,
  };

  products.push(product);

  display += `<div class="col-5">
                <div class="card mb-4 box-shadow" style="width: 18rem;">
                    <div class="card-body p-4">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${description}.</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-4">
                        <a onclick="addItem(${i})"  id="addItem" href="#" class="btn btn-primary">Get scammed</a>
                        <p class="font-weight-bold">${price}$</p>
                    </div>
                </div>
            </div>`;
}

var container = document.querySelector(".row");
container.insertAdjacentHTML("afterbegin", display);

function addItem(i) {
  const currentProduct = products[i];
  var CartContent = document.getElementById("cart-content");
  const found = cartList.find((product) => product.id == currentProduct.id);

  if (found) {
    cartList.forEach((product) => {
      if (product.id == found.id) {
        product.quantity++;
        document.getElementById("Quantity" + product.id).innerHTML =
          product.quantity;
        product.price += product.price * product.quantity;
        document.getElementById(
          "Price" + product.id
        ).innerHTML = `$${product.price}`;
      }
    });
  } else {
    cartList.push(currentProduct);
    CartContent.innerHTML += `
        <tr id="prod-${currentProduct.id}">
        <td>${currentProduct.name}</td>
        <td id="Quantity${currentProduct.id}">${currentProduct.quantity}</td>
        <td id="Price${currentProduct.id}">$${currentProduct.price}</td>
        <td <button onclick="remove(${i})" id="remove" type="button" class="btn btn-danger">Remove</button></td>
        </tr>`;
  }
  document.getElementById("quantity").innerHTML = cartList.length;
}
function remove(i) {
  const currentProduct = products[i];
  const element = document.getElementById(`prod-${currentProduct.id}`);
  cartList.pop(element);
  element.remove();
}
