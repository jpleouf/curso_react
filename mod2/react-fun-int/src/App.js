import logo from './logo.svg';
import './App.css';
/*import 'https://getbootstrap.com/docs/3.4/dist/css/bootstrap.min.css';*/
import Saludo from './components/Saludo';
import input from './components/Input';
import Traductor from './components/TraductorV2';
import Calculadora from './components/Calculadora';
import Dog from './components/Dog';
import Productos from './components/Productos';
import SelectPaises from './components/SelectPaisesV2';

function App() {
  return (
    <div className="App">
      <header className="Appheader">
        <img src={logo} className="App-logo" alt="logo" />
      </header>


      <SelectPaises></SelectPaises>
      <Productos></Productos>
      <Dog></Dog>
      <Calculadora></Calculadora>
      <Traductor></Traductor>

    </div>
  );
}

export default App;
