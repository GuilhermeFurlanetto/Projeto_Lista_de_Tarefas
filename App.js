import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes/index'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function app(){
  return(
    <div>
      <ToastContainer autoClose={3000}/>
      <BrowserRouter>
        <RoutesApp/>
      </BrowserRouter>
    </div>
  )
}