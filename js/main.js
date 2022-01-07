var names = ['Stack of money', 'Island', 'PC', 'Pair of jordans', 'My will to live', 'Some Yasuo skin']

var prices = [100, 200000000, 1000, 300, 0, 15]
var products = []

var display = ''

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const price = prices[i]
    
    var product = {
        id: i,
        name: name,
        price: price,
        quantity: 1
    }

    products.push(product);

    display += `<div class="col-4">
            <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Get scammed</a>
  </div>
  <p class="card-text">${price}$</p>
  </div>
  </div>`
}
var container = document.querySelector('.row')
container.insertAdjacentHTML('afterbegin', display)


var cart = document.getElementById('cart')
var cartList = []

cart.addEventListener('click', (e) =>{

})