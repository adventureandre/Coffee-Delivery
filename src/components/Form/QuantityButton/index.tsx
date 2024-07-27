import { Minus, Plus } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { TotalItens } from './styles'

export function QuantityButton() {
  const theme = useTheme()

  return (
    <TotalItens>
      <button>
        <Minus weight="bold" color={theme.colors.purple} />
      </button>
      2
      <button>
        <Plus weight="bold" color={theme.colors.purple} />
      </button>
    </TotalItens>
  )
}
