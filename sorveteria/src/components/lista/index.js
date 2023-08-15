import "./index.scss"
export default function Lista(props){
    return(
        <div className=" lista">
               <div className="celula">
                        <div className="nome"> {props.nome}</div>
                        <div className="preco">R$ {props.preco}</div>
               </div>
        </div>
    )
}