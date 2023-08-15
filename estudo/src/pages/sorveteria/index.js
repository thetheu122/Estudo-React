import './index.scss'
import Cabecalho from '../../components/cabecalho'
import { useState } from 'react'
import Lista from '../../components/lista'


export default function Soveteria() {

    // feito e mostrei na sala 


    const [produto, setProduto] = useState('')
    const [valor, setValor] = useState()
    const [resultado, setResultado] = useState(0)
    const [lista, setLista] = useState([])



    function listar() {

        if (produto !== '' && valor > 0) {  // só pra voce não falar que consegue colocar o valor em 0, adicionei hoje com os meninos
            let itens = {
                nome: produto,
                preco: valor
            }

            setLista([...lista, itens])

            setResultado(resultado + valor)
        }


    }

    return (
        <div className='pagina-sorvete'>
            <Cabecalho />

            
            <div className='card-1'>

                <div className='texto1'>
                    <div><h2>Sorveteria</h2></div>
                </div>

                <div className='secao-01'>
                    <h3>Novo item</h3>

                    <div className='secao-01-input'>

                        Nome    <input type='text' placeholder='Casquinha'
                            value={produto}
                            onChange={(e) => setProduto(e.target.value)} />

                        R$ <input type='number' placeholder='0' value={valor}
                            onChange={(e) => setValor(Number(e.target.value))} />
                        <button onClick={listar}> Adicionar</button>
                    </div>
                </div>


                <div className='secao-02'>


                    <div className='texto'>
                        <h3>Lista de compras</h3>
                        <p>Total :R$ {resultado}</p>
                    </div>

                    <div className='listaa'>
                        {lista.map(item =>
                            <Lista nome={item.nome} preco={item.preco} />
                        )}
                    </div>

                </div>

            </div>
        </div>
    )

}