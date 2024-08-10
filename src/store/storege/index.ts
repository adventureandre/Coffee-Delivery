import { CardState } from '../slices/card'

export function getCardStorege() {
  const storedData = localStorage.getItem('cardCoffe:1.0.0')
  if (storedData) {
    return JSON.parse(storedData)
  }
}

export function addCardStorege(cardItens: CardState) {
  localStorage.setItem('cardCoffe:1.0.0', JSON.stringify(cardItens))
}
