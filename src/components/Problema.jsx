export default function Problema(props){

    return(
        <>
            <section id="problema" className="problema">
                <div className="container-problema">
                    <h1 id="titulo-problema">Dificuldades encontradas no dia a dia:</h1>
                    <p id="sub-problema">Em situações críticas como paradas cardíacas e acidentes graves, cada segundo conta. É vital que as ambulâncias cheguem rapidamente ao local. No entanto, enfrentamos desafios:</p>
                </div>
                <div className="fundo-problema">
                    <ul>
                        <li><b>{props.listaProblema[0]}</b> Ambulâncias mal organizadas podem demorar, agravando a saúde do paciente.</li>
                        <li id="item2-lista-problema"><b>{props.listaProblema[2]}</b> Cada caso requer equipamentos específicos. Ambulâncias inadequadas comprometem o atendimento.</li>
                        <li><b>{props.listaProblema[1]}</b> Comunicação deficiente leva a erros diagnósticos e atrasos no tratamento.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}