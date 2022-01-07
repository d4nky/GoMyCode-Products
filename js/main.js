var names = ['Stack of money', 'Island', 'PC', 'Pair of jordans', 'My will to live', 'Some Yasuo skin']

var prices = [100, 200000000, 2500, 300, 0, 15]
var descriptions = ['ouuuu money :)', 'Epstein style (yes offensive jokes, not for the faint hearted)', 'Latest specs desktop computer', 'Self explanatory', 'yes yes', 'Yasuo > literally every lol legend']
var products = []

var display = ''

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
                        <a id="addItem" href="#" class="btn btn-primary">Get scammed</a>
                        <p class="font-weight-bold">${price}$</p>
                    </div>
                </div>
            </div>`
}
var container = document.querySelector('.row')
container.insertAdjacentHTML('afterbegin', display)
var addBtn = document.querySelectorAll('addItem')
var testDiv = document.getElementById(test)

var cart = document.getElementById('cart')
var cartList = []
for (let i = 0; i < addBtn.length; i++) {
    const clickedAddBtn = addBtn[i];
    clickedAddBtn.addEventListener('click', (e) =>{
        console.log('works')
    })
}

