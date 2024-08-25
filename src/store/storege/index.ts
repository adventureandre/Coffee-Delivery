import { CardState } from '../slices/card'
import { OrderState } from '../slices/order'

// Função para obter  no localStorage
export function getCardStorage(): CardState | null {
  const storedData = localStorage.getItem('cardCoffe:1.0.0')
  return storedData ? JSON.parse(storedData) : null
}

// Função para adicionar no localStorage
export function addCardStorage(cardItems?: CardState) {
  if (cardItems) {
    localStorage.setItem('cardCoffe:1.0.0', JSON.stringify(cardItems))
  } else {
    localStorage.removeItem('cardCoffe:1.0.0')
  }
}

// Função para adicionar ao localStorage
export function addOrderStorage(order: OrderState) {
  const existingOrdersJSON = localStorage.getItem('orderCaffe:1.0.0')

  const existingOrders: OrderState[] = existingOrdersJSON
    ? JSON.parse(existingOrdersJSON)
    : []

  existingOrders.push(order)

  localStorage.setItem('orderCaffe:1.0.0', JSON.stringify(existingOrders))
}

// Função para obter no localStorage
export function getOrderStorege(): OrderState[] {
  const storedData = localStorage.getItem('orderCaffe:1.0.0')
  return storedData ? JSON.parse(storedData) : []
}
