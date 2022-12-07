import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import input from './components/Input';
import Traductor from './components/TraductorV2';
import Calculadora from './components/Calculadora';
import Dog from './components/Dog';
import Productos from './components/Productos';

function App() {
  return (
    <div className="App">
      <header className="Appheader">
        <img src={logo} className="App-logo" alt="logo" />
      </header>


      <Productos></Productos>
      <Dog></Dog>
      <Calculadora></Calculadora>
      <Traductor></Traductor>

    </div>
  );
}

export default App;
