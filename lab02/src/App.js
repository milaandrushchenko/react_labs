import './App.css';
import Cart from './components/Cart';
import CounterList from './components/CounterList';
import MyCounter from './components/MyCounter';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <MyCounter nameTask={'task1'} initial={0} min={-10} max={10} />
      <CounterList nameTask={'task1.2'} counters={counters} />
      <Cart nameTask={'task2'} products={products} />
      <Game nameTask={'task3'} />
    </div >
  );
}

const counters = [
  { id: 1, initial: 6, min: -5, max: 10 },
  { id: 2, initial: 5 },
  { id: 3 }
]
const products = [
  { name: "Фотоапарат Canon EOS 4000D BK 18-55 Офіційна гарантія!", price: 15000, min: 1, max: 5 },
  { name: "Фотоапарат Sony Alpha а7 IV Body Black (ILCE7M4B.CEC) Офіційна гарантія!", price: 106000 },
  { name: "Фотоапарат Panasonic Lumix DC-FZ82 Black (DC-FZ82EE-K)", price: 12000, min: 0, max: 10 }
]

export default App;
