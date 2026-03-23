import { useState, useEffect } from 'react'
import axios from 'axios'
import './login.css'

function App() {

  const [products, setProducts] = useState<any[]>([])

  const[users, setUSers] = useState<any[]>([])
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [password, setPAssword] = useState("")


//   const fetchData = async () => {
//     const response = await axios.get("http://localhost:8080/api/products/find")
//     console.log(response.data)
//     setProducts(response.data.users)
//   }

  const createProduct = async () => {
    // try {
    //   await axios.post("http://localhost:8080/api/products/create", {
    //     name,
    //     description,
    //     category,
    //     stock,
    //     price
    //   })

    //   fetchData()
    // } catch (error) {
    //   console.error(error)
    // }
  }

  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <>
    <div className='out'>

      <div className='container-inputs'>
        <div className='container-input'>
          <p>Nome: </p>
          {/* <input className='input' onChange={(e) => setName(e.target.value)}></input> */}
        </div>
        
        <div className='container-input'>
          <p>Email</p>
          <input className='input' type='number' ></input>
        </div>
        {/* onChange={(e) => setStock(Number(e.target.value))} */}
        <div className='container-input'>
          <p>Senha</p>
          <input className='input' type='number'></input>
        </div>
      </div>
    </div>

      
      <button onClick={createProduct}>Criar Usuario</button>

      <div className='container-card'>
        {products.map((product: any) => (
          <div key={product.id}>
            <div className='card'>
              <p>Nome: {product.name}</p>
              <p>Email: {product.category}</p>
              <p>Senha: {product.category}</p>
            </div>
          </div>
        ))}
      </div>
      
    </>
  )
}

export default login