// feito na sala e mostrado na sala :)



import './avaliacaoCarro.scss'

import './index.scss'

import './cabecalho'

import Cabecalho from './cabecalho'

import { useState } from 'react'



export default function AvaliacaoCarro () {
   
   const [capital, setCapital] = useState(0);
   const [montante, setMontante] = useState(0);
   const [taxaJuros, setTaxaJuros] = useState(0);
   const [qtdParcela, setQtdParcela] = useState(0);
   const [valorParcela, setValorParcela] = useState(0);
   
   
  
   function Calcular () {

        const calculoMontante = capital * ((1+(taxaJuros/100))**qtdParcela);    
        setValorParcela(calculoMontante/qtdParcela)
        setMontante(calculoMontante)        
    
   }

      

    const valorParcelaFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valorParcela)
    const montanteFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(montante) 
   
    return(
        <div className='page_avalicao'>
            <Cabecalho/>
            <div className='container'>
                <h2>Simulador de Compras de Veículo</h2>
                <div className='sub-container'>
                    <div className='cont-imgCarro'>
                        <img src='/carro 2.png'/>
                    </div>
                    <div className='cont-conteudo'>

                        <div>
                            <h3>Valor Total</h3>
                            <div>
                                <input type='number' value={capital}  onChange={(e) => setCapital(e.target.value)}/>
                            </div>  
                        </div>

                        <div className='cont-inputs'>
                            <div>
                                <h3>Parcelas</h3>
                                <div>
                                    <input type='number' value={qtdParcela}  onChange={(e) => setQtdParcela(e.target.value)}/>
                                </div>  
                            </div>

                            <div>
                                <h3>Juros Mensal (%)</h3>
                                <div>
                                    <input type='number'  value={taxaJuros}  onChange={(e) => setTaxaJuros(e.target.value)}/>
                                </div>  
                            </div>
                        </div>
                        
                        <button onClick={Calcular}>Calcular</button>

                        <div>
                            
                            Parcela: {valorParcelaFormatado}
                        </div>

                        <div>
                            Valor Total: {montanteFormatado}
                        </div>
                    
                    </div>
                </div>
            </div>
            
        </div>
    )
}