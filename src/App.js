import { Banner } from "./componentes/Banner/Banner";
import Botao from "./componentes/Botao/botao";
import CampoTexto from "./componentes/CampoTexto/CampoTexto";
import ListaSuspensa from "./componentes/listaSuspensa/listaSuspensa";
import './index.css';

function App() {
  const times = [
    'Item1',
    'Item2',
    'Item3',
    'Item4',
    'Item7'
    ]
  

  return (
    <div className="App">
        <Banner/>
        <section className='formulario'>
            <form>
                <h2>Atividade 1 - com Banner e campoTexto</h2>
                <CampoTexto obrigatorio={true} label="Numero 1" placeholder="Digite algo"/>
                <CampoTexto obrigatorio={true} label="Numero 2" placeholder="Digite algo novamente"/>
                <h3>Atividade 2 - Lista suspensa e botão</h3>
                <ListaSuspensa itens={times}/>
                <Botao texto="Botão"/>
            </form>
        </section>
    </div>
  );
}

export default App;
