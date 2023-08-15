import { useState } from "react";
import Lateral from "../../components/lateralInsta";
import Story from "../../components/pessoasInsta";

import './index.scss'
import Postagem from "../../components/postagemInsta";

export default function Instagram() {
    const [usuario, setUsuario] = useState('')
    const [tempo, setTempo] = useState('')
    const [avatar, setAvatar] = useState('')
    const [post, setPost] = useState('')
    const [descricao, setDescricao] = useState('')
    const [curtidas, setCurtidas] = useState('')
    const [lista, setLista] = useState([])

    const add = () => {
        let obj = {
            usuario: usuario,
            tempo: tempo,
            avatar: avatar,
            post: post,
            descricao: descricao,
            curtidas: curtidas
        }
        setLista([...lista, obj])
    }


    return (
        <div className="body">
            <Lateral />
            <div className="meio">
                <button className="publi-nova">Novas Públicações</button>
                <div className="storys">
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                </div>
                <div className="forms">
                    <div className="linha-1">
                        <div className="t" >
                            <p>Usuário:</p>
                            <input className="i1" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        </div>
                        <div>
                            <p>Tempo:</p>
                            <input className="i2" value={tempo} onChange={(e) => setTempo(e.target.value)} />
                        </div>
                    </div>
                    <div className="linha-2">
                        <div >
                            <p>Avatar:</p>
                            <input className="i3" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
                        </div>
                    </div>
                    <div className="linha-3">
                        <div >
                            <p>Descrição:</p>
                            <input className="i4" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </div>
                    </div>
                    <div className="linha-4">
                        <div >
                            <p>Post:</p>
                            <input className="i5" value={post} onChange={(e) => setPost(e.target.value)} />
                        </div>
                        <div>
                            <p>Curtidas:</p>
                            <input className="i6" value={curtidas} onChange={(e) => setCurtidas(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={add}>Postar</button>
                </div>

                {lista.map((item, index) => (
                    <Postagem key={index} avatar={avatar} usuario={item.usuario} tempo={item.tempo} post={item.post} curtidas={item.curtidas} descricao={item.descricao} />
                ))}




            </div>


        </div>
    )
}