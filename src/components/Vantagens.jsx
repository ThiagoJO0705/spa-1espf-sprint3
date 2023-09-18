export default function Vantagens(props){



    return(
        <section className="vantagens" id="vantagens">
            <div className="container-vantagens">
                <h1 id="titulo-vantagens">Vantagens do Sistema de Tráfego de Emergência Inteligente</h1>
                <div className="container-icons">
                    <div className="icons">
                        <img src="../src/assets/seguranca.png" alt="Ícone Segurança"/>
                        <h1 id="titulo-seguranca">{props.objVantagens.vantagem1}</h1>
                        <p>Minimiza o risco de acidentes envolvendo veículos de emergência.</p>
                    </div>
                    <div className="icons">
                        <img src="../src/assets/eficiencia.png" alt="Ícone Eficiência"/>
                        <h1 id="titulo-eficiencia">{props.objVantagens.vantagem3}</h1>
                        <p>Permite que as ambulâncias cheguem ao local mais rápido.</p>
                    </div>
                    <div id="icon-precisao" className="icons">
                        <img src="../src/assets/precisao.png" alt="Ícone Precisão"/>
                        <h1 id="titulo-precisao">{props.objVantagens.vantagem4}</h1>
                        <p>O sistema responde ao caminho definido pela ambulância, evitando interferências indevidas.</p>
                    </div>
                    <div id="icon-simplicidade" className="icons">
                        <img src="../src/assets/simplicidade.png" alt="Ícone Simolicidade"/>
                        <h1 id="titulo-simplicidade">{props.objVantagens.vantagem2}</h1>
                        <p>Tudo acontece de forma automática, sem a necessidade de intervenção humana.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}