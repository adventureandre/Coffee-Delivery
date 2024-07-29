import { Minus, Plus } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { TotalItens } from './styles'

interface QuantityButtonProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityButton({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityButtonProps) {
  const theme = useTheme()

  return (
    <TotalItens>
      <button onClick={onDecrease}>
        <Minus weight="bold" color={theme.colors.purple} />
      </button>
      {quantity}
      <button onClick={onIncrease}>
        <Plus weight="bold" color={theme.colors.purple} />
      </button>
    </TotalItens>
  )
}
