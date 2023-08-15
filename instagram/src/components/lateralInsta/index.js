import Portifolio from '../../assets/images/logoPortifolio.png'
import Home from '../../assets/images/home.png'
import Pesquisa from '../../assets/images/lupa.png'
import Reels from '../../assets/images/videos.png'
import Mensagens from '../../assets/images/mensagens.png'
import Notificacao from '../../assets/images/coracao.png'
import Criar from '../../assets/images/criar.png'

import './index.scss'

export default function Lateral(){

    return(
        <div className='lateral'>
            <div className="logo">
                <img src={Portifolio} alt='port'/>
                <h3>Potifolio.me</h3>
            </div>
            <div className='opcoes'>
                <div className='home'>
                    <img src={Home} alt='port'/>
                    <p>Página Inicial</p>
                </div>
                <div className='pesquisa'>
                    <img src={Pesquisa} alt='port'/>
                    <p>Pesquisa</p>
                </div>
                <div className='reels'>
                    <img src={Reels} alt='port'/>
                    <p>Reels</p>
                </div>
                <div className='mensagens'>
                    <img src={Mensagens} alt='port'/>
                    <p>Mensagens</p>
                </div>
                <div className='notificacao'>
                    <img src={Notificacao} alt='port'/>
                    <p>Notificações</p>
                </div>
                <div className='criar'>
                    <img src={Criar} alt='port'/>
                    <p>Criar</p>
                </div>
            </div>
        </div>
    )
}