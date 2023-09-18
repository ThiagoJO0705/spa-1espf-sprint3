import './styles/main.scss'
import Cabecalho from './components/Cabecalho'
import Home from './components/Home'
import Problema from './components/Problema'
import Solucao from './components/Solucao'
import Demonstracao from './components/Demonstracao'
import Vantagens from './components/Vantagens'
import Sugestoes from './components/Sugestoes'
import Rodape from './components/Rodape'


 
function App() {

  const listaProblema = ["Atrasos no Atendimento:", "Falhas na Comunicação:", "Falta de Equipamentos e Recursos:"]
  const objVantagens = {
    vantagem1 : "Segurança",
    vantagem2 : "Simplicidade",
    vantagem3 : "Eficiência",
    vantagem4 : "Precisão"
  }

  return (
    <div className='container-grid'>
    <Cabecalho />
    <Home />
    <Problema listaProblema={listaProblema}/>
    <Solucao />
    <Demonstracao />
    <Vantagens objVantagens={objVantagens}/>
    <Sugestoes />
    <Rodape />
  </div>
  )
}

export default App