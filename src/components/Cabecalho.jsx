export default function Cabecalho(){

    function showMenu() {
        const menuMobile = document.querySelector(".menu-mobile");
        const linha1 = document.querySelector(".linha1-menu");
        const linha2 = document.querySelector(".linha2-menu");
        const linha3 = document.querySelector(".linha3-menu");
        const boxMenu = document.querySelector(".box-menu-mobile");
    
        // Verifica se o menu mobile está aberto ou fechado
        if (menuMobile.classList.contains("open")) {
            // Fecha o menu
            menuMobile.classList.remove("open");
            menuMobile.classList.add("close");
            linha1.style.opacity = "1";
            linha2.style.transform = "rotate(0deg)";
            linha3.style.transform = "translateY(0) rotate(0deg)";
            boxMenu.style.gap = "1rem";
        } else {
            // Abre o menu
            menuMobile.classList.remove("close");
            menuMobile.classList.add("open");
            linha1.style.opacity = "0";
            linha2.style.transform = "rotate(45deg)";
            linha3.style.transform = "translateY(-6px) rotate(-45deg)";
            boxMenu.style.gap = "0";
        }
    }

    // Função para fechar o menu e restaurar o ícone do menu hamburguer
    function closeMenu() {
        const menuMobile = document.querySelector(".menu-mobile");
        const linha1 = document.querySelector(".linha1-menu");
        const linha2 = document.querySelector(".linha2-menu");
        const linha3 = document.querySelector(".linha3-menu");
        const boxMenu = document.querySelector(".box-menu-mobile");

        // Fecha o menu
        menuMobile.classList.remove("open");
        menuMobile.classList.add("close");

        // Restaura o ícone do menu hamburguer após um breve atraso para animação
        setTimeout(function() {
            linha1.style.opacity = "1";
            linha2.style.transform = "rotate(0deg)";
            linha3.style.transform = "translateY(0) rotate(0deg)";
            boxMenu.style.gap = "1rem";
        }, 200);
    }


    return(
        <>
            <header>
                <a href="./index.html">
                    <img id="logo-cabecalho" src="../src/assets/logo.png" alt="Logo TPGN"/>
                </a>
                <h1 id="titulo-cabecalho">TECHPULSE GLOBAL NETWORK</h1>
                <h1 id="titulo-cabecalho-mobile">TPGN</h1>
            
                <nav id="menu-desktop">
                    <ul>
                        <li><a id="menu-main" href="#main">Home</a></li>
                        <li><a id="menu-problema" href="#problema">Problema</a></li>
                        <li><a id="menu-solucao" href="#solucao">Solução</a></li>
                        <li><a id="menu-demonstracao" href="#demonstracao">Demonstração</a></li>
                        <li><a id="menu-vantagens" href="#vantagens">Vantagens</a></li>
                        <li><a id="menu-sugestoes" href="#sugestoes">Sugestões</a></li>
                    </ul>
                </nav>
        
                <div onClick={showMenu} className="box-menu-mobile">
                    <div className="linha1-menu"></div>
                    <div className="linha2-menu"></div>
                    <div className="linha3-menu"></div>
                </div>
        
                <nav id="menu-mobile" className="menu-mobile close">
                    <ul>
                        <li><a onClick={closeMenu} id="menu-mobile-main" href="#main">Home</a></li>
                        <li><a onClick={closeMenu} id="menu-mobile-problema" href="#problema">Problema</a></li>
                        <li><a onClick={closeMenu} id="menu-mobile-solucao" href="#solucao">Solução</a></li>
                        <li><a onClick={closeMenu} id="menu-mobile-demonstracao" href="#demonstracao">Demonstração</a></li>
                        <li><a onClick={closeMenu} id="menu-mobile-vantagens" href="#vantagens">Vantagens</a></li>
                        <li><a onClick={closeMenu} id="menu-sugestoes" href="#sugestoes">Sugestões</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
