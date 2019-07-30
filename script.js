//amazon shoping 

const user = {
  name: 'Marika',
  active: true,
  cart: [],
  purchases: []
}

// purchaseItem(  // using compose we're going right to left
//   emptyCart
//   buyItem
//   applyTaxToItems
//   itmesToCart
// )

const compose = (f, g) => (...args) => f(g(...args))

const purchaseItem = (...fns) => fns.reduce(compose)

function itmesToCart(user, item) {
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, )
}

function applyTaxToItems() {}

function buyItem() {}

function emptyCart() {}


//implement a cart feature 
// 1. Add items to cart.
// 2. Add 8% tax to item in cart
// 3. buy item \: cart --> purchases
// 4. Empty cart  