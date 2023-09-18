export default function Rodape(){



    return(
        <>
            <footer>
                <div className="logo">
                    <img src="../src/assets/Logo(SemFundo)padrao.png" alt="logo TPGN"/>
                </div>
                <div className="textos-rodape">
                    <div className="inicio">
                        <p className="titulos-rodape"><b>Início</b></p>
                        <a href="#">Home</a>
                        <a href="#">Problema</a>
                        <a href="#">Solução</a>
                        <a href="#">Demonstração</a>
                        <a href="#">Vantagens</a>
                    </div>
                    <div className="sobre-nos">
                        <p className="titulos-rodape"><b>Sobre nós</b></p>
                        <a href="#">Informações da Empresa</a>
                        <a href="#">Contato</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className="suporte">
                        <p className="titulos-rodape"><b>Suporte</b></p>
                        <a href="#">FAQ</a>
                        <a href="#">Telefone</a>
                        <a href="#">Chat</a>
                    </div>
                </div>
                <div className="contatos">
                    <div className="icons-rodape">
                        <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCiROhuCJ7ZqMaeTLnF_wlpA">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    <div className="botao-contato">
                    <button >Contato</button>
                    </div>
                </div>
            </footer>
        </>
    )
}
