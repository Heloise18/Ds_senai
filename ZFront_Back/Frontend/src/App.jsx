import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [Products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState(0)

  const find = async () => {
    const response = await axios.get('http://localhost:8011/api/find')
    console.log(response.data)
    setProducts(response.data.products)
  }
  
  const create = async () => {
    try {
      await axios.get('http://localhost:8011/api/post'), {
        name,
        description,
        category,
        stock,
        price  
      }      
      find()
    } catch (error) {
        console.error(error)
    }
    
  }

  useEffect(() => {
    find();
  },[])

  return (
  <>

      <div className='background'>
        <div className='container'>
          <h1 className='titulo'>Cadastrar</h1>
          <div className='cadastro'> 
              
              <h3 className='titulo'>Nome</h3>
              <input className='input' onChange={(e) => setName(e.target.value)} ></input>
              
              <h3 className='titulo'>Descrção</h3>
              <input className='input'></input>
              
              <h3 className='titulo'>Estoque</h3>
              <input className='input'></input>
              
              <h3 className='titulo'>Categoria</h3>
              <input className='input'></input>
              
              <h3 className='titulo'>Data de Criação</h3>
              <input className='input'></input>
              <div className='align'>
                <button className='botao' onClick={create}>Cadastrar </button>
              </div>
          </div>
          
          <h1 className='titulo'>Produtos</h1>
          
          <div className='cadastro '>
            {Products.map((product) => {
              <div key={product.id}>
            
                <p>Produto: {product.name}</p>
                <p>Descrição: {product.description}</p>
                <p>Categoria: {product.category}</p>
                <p>Quantidade em Estoque: {product.stock}</p>
                <p>Data de Criação: {product.stock}</p>
              
              </div>
            })}
          </div>

        </div>
      </div>
        
  </>
  )
}


export default App