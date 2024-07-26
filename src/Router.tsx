import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { CheckoutPage } from './pages/Ckeckout'
import { HomePage } from './pages/Home'
import { SucessoPage } from './pages/Success'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/order/:orderId/success" element={<SucessoPage />} />
          <Route path="/ckeckout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
