import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export const RegisterProducts = () => {
    const[name, setName] = useState("")
    const[description, setDescription] = useState("")
    const[price, setPrice] = useState(0)
    const[stock, setStock] = useState(0)
    const[category, setCategory] = useState("")
    // const[criatedAt, setCriatedAt] = useState() ??
    const navigate = useNavigate()
    const handleProductRegister = async () => {
       try {
           await axios.post('http://localhost:8080/api/products/create', {name, description, price, stock, category})
            Swal.fire({
            title: "Sucesso!",
            text: "Produto cadastrado!",
            icon: "success"
            });

            navigate("/home")
       } catch (error) {
        console.log(error)
            Swal.fire({
            title: "Error!",
            text: "Não foi possivel cadastrar o produto",
            icon: "error"
            });
       }
       setName("")
       setDescription("")
       setPrice(0)
       setStock(0)
       setCategory("")
    }


    return(
        <> 
         <div className="h-screen w-screen flex items-center justify-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzeJXZCLS_D2Wk-zdtm0mlh2d8H7BE1mUIQ&s')] bg-repeat bg-[length:40px]">
            <div className="w-80 h-120 shadow-md bg-white rounded-2xl">
                <div className="flex flex-col items-center justify-center h-full">
                    <h3>Cadastro de produtos</h3>
                    <input onChange={(e) => setName(e.target.value)} className=" m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Nome do produto..."/>
                    <input onChange={(e) => setDescription(e.target.value)} className="m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Descrição..."/>
                    <input step={0.01} type='number' onChange={(e) => setPrice(Number(e.target.value))} className="m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Preço..."/>
                    <input type='number' onChange={(e) => setStock(Number(e.target.value))} className="m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Estoque..."/>
                    <input onChange={(e) => setCategory(e.target.value)} className="m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Categoria..."/>
                    <button onClick={handleProductRegister} className="m-3 w-20 h-10 rounded-sm bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzeJXZCLS_D2Wk-zdtm0mlh2d8H7BE1mUIQ&s')] bg-repeat bg-[length:40px] text-white">Registrar</button>
                </div>
            </div>
        </div>
        </>
    )
}      