import { CardState } from '../slices/card'

export async function getCardStorege() {
  const storedData = await localStorage.getItem('cardCoffe:1.0.0')
  if (storedData) {
    return JSON.parse(storedData)
  }
}

export async function addCardStorege(cardItens: CardState) {
  await localStorage.setItem('cardCoffe:1.0.0', JSON.stringify(cardItens))
}
