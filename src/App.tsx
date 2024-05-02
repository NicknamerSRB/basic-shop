import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/pages/HomePage'
import ShopPage from './components/pages/ShopPage'
import ConsolePage from './components/pages/ConsolePage'
import { useEffect } from 'react'
import { getProducts } from './services/products'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts()
        console.log(products)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Layout type={'cart'} />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>
      <Route path="console" element={<Layout type="noCart" />}>
        <Route index element={<ConsolePage />} />
      </Route>
    </Routes>
  )
}

export default App
