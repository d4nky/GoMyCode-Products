var names = ['Stack of money', 'Island', 'PC', 'Pair of jordans', 'My will to live', 'Some Yasuo skin']

var prices = [100, 200000000, 2500, 300, 0, 15]
var descriptions = ['ouuuu money :)', 'Epstein style (yes offensive jokes, not for the faint hearted)', 'Latest specs desktop computer', 'Self explanatory', 'yes yes', 'Yasuo > literally every lol legend']
var products = []

var display = ''




var addBtn = document.querySelectorAll('addItem')
var cart = document.getElementById('cart')
var cartList = []
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const price = prices[i]
    const description = descriptions[i];
    
    var product = {
        id: i,
        name: name,
        price: price,
        description: description,
        quantity: 1
    }

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
            </div>`
}
        
    var container = document.querySelector('.row')    
    container.insertAdjacentHTML('afterbegin', display)



    
    function addItem(i){
        const name = products[i].name
        const price = products[i].price
        var cart = {
        id: i,
        name: name,
        price: price,
        quantity: 1
    }
    cartList.push(cart)
        var quantity = cartList.length

        document.getElementById('quantity').innerHTML = quantity

        const CartContent = document.getElementById('cart-content')
        CartContent.innerHTML += `
        <tr>
        <td>${name}</td>
        <td>$${price}</td>
        <a id="remove" type="button" class="btn btn-danger">Remove</a></tr>`
    }
    