import Pessoa from '../../assets/images/pessoa.png'
import './index.scss'

export default function Story(){
    return(
        <div className='story'>
            <img src={Pessoa} alt="Minha imagem" />
        </div>

    )
}