import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [Products, setProducts] = useState([])
  
  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8011/api/find')
    setProducts(response.data.products)
  }

  useEffect(() => {
    fetchProducts();
  },[])

  return (
  <>
    {
      Products.map((product) => {
        return(
          <div key={product._id}>
            <span>{product.name}</span>
            <br />
            <span>R${product.price},00</span>
          </div>
        )
      })
    }
  </>
  )
}

export default App
