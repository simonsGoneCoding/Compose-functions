const user = {
  name: 'Marika',
  active: true,
  cart: [],
  purchases: []
}

const compose = (f, g) => (...args) => f(g(...args)) // compose function 

const purchaseItem = (...fns) => fns.reduce(compose) // functions as arguments 

function itmesToCart(user, item) {
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, user, {
    cart: updatedCart
  })
}

function applyTaxToItems(user) {
  const cart = user.cart
  const taxRate = 1.21
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate
    }
  })
  return Object.assign({}, user, {
    cart: updatedCart
  })
}

function buyItem(user) {
  return Object.assign({}, user, {
    purchases: user.cart
  })
}

function emptyCart(user) {
  return Object.assign({}, user, {
    cart: []
  })
}

// using compose we're going right to left
const endShopping = purchaseItem(emptyCart, buyItem, applyTaxToItems, itmesToCart)

console.log(endShopping(user, {
  name: 'laptop',
  price: 599
}))