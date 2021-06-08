import Axios from 'axios'
export function getDishes () {
  return Axios.get('https://meal-shopping-assistant.herokuapp.com/dishes')
}

export function getProducts () {
  return Axios.get('https://meal-shopping-assistant.herokuapp.com/products')
}

export function getProductsLabels () {
  return Axios.get('https://meal-shopping-assistant.herokuapp.com/labels/products')
}

export function getDishesLabels () {
  return Axios.get('https://meal-shopping-assistant.herokuapp.com/labels/dishes')
}

export function removeProductLabel (id) {
  return Axios.post('https://meal-shopping-assistant.herokuapp.com/labels/products/delete/', { id })
}

export function removeDishLabel (id) {
  return Axios.post('https://meal-shopping-assistant.herokuapp.com/labels/dishes/delete/', { id })
}

export function addDishLabel (name) {
  return Axios.post('https://meal-shopping-assistant.herokuapp.com/labels/dishes/add/', { name })
}

export function addProductLabel (name) {
  return Axios.post('https://meal-shopping-assistant.herokuapp.com/labels/products/add/', { name })
}

export function addProduct (product) {
  console.log(product)
  return Axios.post('https://meal-shopping-assistant.herokuapp.com/products/add/', product)
}

export function updateProduct (product) {
  console.log(product)
  return Axios.post('https://meal-shopping-assistant.herokuapp.com/products/update/', product)
}

export function deleteProduct (id) {
  return Axios.post('https://meal-shopping-assistant.herokuapp.com/products/delete/', { id })
}
