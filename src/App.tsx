import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router.tsx'
import { store } from './store/index.ts'
import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'

export function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </ReduxProvider>
  )
}
