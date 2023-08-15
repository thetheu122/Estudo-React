import Coracao from '../../assets/images/coracao.png'
import Mensagens from '../../assets/images/mensagens.png'

import './index.scss'

export default function Postagem(props){


    return(
        <div className="corpinho">
            <div className="cabecalho">
                <img src={props.avatar} alt='p'/>
                <div>
                    <p>{props.usuario} <span style={{ color: 'gray' }}>• {props.tempo}</span></p>
                </div>
            </div>
            <img src={props.post}/>
            <div className="rodape">
                <div>
                    <img src={Coracao} alt='p'/>
                    <img src={Mensagens} alt='p'/>
                </div>
                <p>{props.curtidas} curtidas</p>
                <p>
                    {props.usuario} <span style={{ color: 'gray' }}>{props.descricao}</span>
                </p>
            </div>
            <div className='linha'></div>
        </div>
    )
}