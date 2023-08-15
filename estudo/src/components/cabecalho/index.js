import Log from '../../assets/images/logo.svg'
import './index.scss'

export default function  Cabecalho (){
    return(
        <div className='cabecalho'>
         <img src={Log}/>
         <h3>Portifolio.me</h3>
        </div>
    )
}