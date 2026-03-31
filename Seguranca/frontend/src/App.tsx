import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register } from './Pages/Register'
import { Login } from './Pages/login'
import { RegisterProducts } from './Pages/RegisterProducts'
import { Home } from './Pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/create/product' element={<RegisterProducts></RegisterProducts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
    
    

  
      
    </>
  )
}

export default App


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
  //     
  // await axios.post("http://localhost:8080/api/products/create", {
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