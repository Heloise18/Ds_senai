import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")


    const handleLogin = async () => {
       try {
           const response = await axios.post('http://localhost:8080/api/auth/login', {email, password})
            console.log(response.data)

            sessionStorage.setItem('token',response.data.token)

            Swal.fire({
            title: "Sucesso!",
            text: "Logado com sucesso!",
            icon: "success"
            });
            
            return navigate('/home')
       } catch (error) {
            Swal.fire({
            title: "Error!",
            text: "Não foi possivel entrar por esse usuario",
            icon: "error"
            });
       }
       setEmail("")
       setPassword("")
    }

    return(
        <> 
         <div className="h-screen w-screen flex items-center justify-center bg-black">
            <div className="w-2/6 h-72 shadow-md bg-white rounded-2xl">
                <div className="flex flex-col items-center justify-center h-full">
                    <h3 >Register</h3>
                    <input onChange={(e) => setEmail(e.target.value)} className="m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email..."/>
                    <input onChange={(e) => setPassword(e.target.value)} className="m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Senha..."/>
                    <button onClick={handleLogin} className="m-3 w-20 h-20 rounded-sm bg-gray-500">Entrar</button>
                </div>
            </div>
        </div>
        </>
    )
}