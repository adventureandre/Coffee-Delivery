import { createGlobalStyle } from 'styled-components'

import { mixins } from './mixins.ts'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.white};
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;


        gap: 20px;
    }
  }

  body, input, textarea, button {
    ${mixins.fonts.textM};
  }
`
