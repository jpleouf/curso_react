import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import input from './components/Input';
import Traductor from './components/Traductor';
import Calculadora from './components/Calculadora';

function App() {
  return (
    <div className="App">
      <header className="Appheader">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Traductor></Traductor>
      <Calculadora></Calculadora>

    </div>
  );
}

export default App;
