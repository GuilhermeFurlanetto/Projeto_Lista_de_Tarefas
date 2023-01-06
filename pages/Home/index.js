import { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

import {auth} from '../../firebaseConnection'
import {signInWithEmailAndPassword} from 'firebase/auth'

export default function Home(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleLogin(e){
        e.preventDefault()

        if(email !== '' && password !== ''){
            
            await signInWithEmailAndPassword(auth, email, password)
            .then(()=>{
                //Navegar para a pagina admin
                toast.success('Usuario logado com Sucesso!')
                navigate('/admin', {replace: true})
            })
            .catch(()=>{
                toast.warn('Erro ao fazer o Login!')
            })

        } else{
            toast.warn('Preencha todos os campos...')
        }
    }

    return(
        <div className='home-container'>
            <h1>Lista de Tarefas</h1>
            <span>Gerencie sua agenda de forma fácil.</span>

            <form className='form' onSubmit={handleLogin}>
                <input
                    type='text'
                    placeholder='Digite seu E-mail...'
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                /> 
                <input
                    type='password'
                    placeholder='Digite sua Senha...'
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />

                <button type='submit'>Acessar</button>
            </form>

            <Link className='button-link' to='/register'>
                Não possui uma conta? Cadastre-se agora.
            </Link>
        </div>
    )
}