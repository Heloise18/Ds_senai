import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  // const [products, setProducts] = useState<any[]>([])

//   const[users, setUSers] = useState<any[]>([])
//   const [userName, setUserName] = useState("")
//   const [userEmail, setUserEmail] = useState("")
//   const [password, setPAssword] = useState("")


//   const [name, setName] = useState("")
//   const [description, setDescription] = useState("")
//   const [category, setCategory] = useState("")
//   const [stock, setStock] = useState(0)
//   const [price, setPrice] = useState(0)

//   const fetchData = async () => {
//     const response = await axios.get("http://localhost:8080/api/products/find")
//     console.log(response.data)
//     setProducts(response.data.users)

  const createProduct = async () => {
    try {
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <div className='out'>
      <div className='background'>
        <h1>Cheese</h1>
        <div className='buttao'>
          <button>Cadastro</button>
          <button>Login</button>
        </div>
      </div>
    </div>


  
      
    </>
  )
}

export default App






  //     await axios.post("http://localhost:8080/api/products/create", {
  //       name,
  //       description,
  //       category,
  //       stock,
  //       price
  //     })

  //     fetchData()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])


  // <div className='out'>

  //     {/* <div className='container-inputs'>
  //       <div className='container-input'>
  //         <p>Nome: </p>
  //         <input className='input' onChange={(e) => setName(e.target.value)}></input>
  //       </div>
        
  //       <div className='container-input'>
  //         <p>Email</p>
  //         <input className='input' type='number' onChange={(e) => setStock(Number(e.target.value))}></input>
  //       </div>
        
  //       <div className='container-input'>
  //         <p>Senha</p>
  //         <input className='input' type='number' onChange={(e) => setPrice(Number(e.target.value))}></input>
  //       </div>
  //     </div>
  //   </div>

      
  //     <button onClick={createProduct}>Criar Produto</button>

  //     <div className='container-card'>
  //       {products.map((product: any) => (
  //         <div key={product.id}>
  //           <div className='card'>
  //             <p>Nome: {product.name}</p>
  //             <p>Email: {product.category}</p>
  //             <p>Senha: {product.category}</p>
  //           </div>
  //         </div>
  //       ))}*/}
  //     </div> 