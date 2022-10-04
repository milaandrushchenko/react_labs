import './App.css';
import Table from './components/Table';
import Product from './components/Product';
import Catalog from './components/Catalog';
import Cities from './components/Cities'
import ProductColor from './components/ProductColor';

function App() {
  return (
    <div className="App">
      <Table />
      <Product product={product1} />
      <Catalog products={products} />
      <Cities cities={cities} />
      <ProductColor />
    </div>
  );
}
const product1 = {
  name: "Mouse",
  price: 120,
}

const products = [
  {
    name: "Камера миттєвого друку Polaroid Now Black and White 1",
    price: "6000",
    imag: require('./assets/product.jpg')
  },
  {
    name: "Камера миттєвого друку Polaroid Now Black and White 2",
    price: "6000",
    imag: require('./assets/product.jpg')
  },
  {
    name: "Камера миттєвого друку Polaroid Now Black and White 3",
    price: "6000",
    imag: require('./assets/product.jpg')
  },
  {
    name: "Камера миттєвого друку Polaroid Now Black and White 4",
    price: "6000",
    imag: require('./assets/product.jpg')
  },
  {
    name: "Камера миттєвого друку Polaroid Now Black and White 5",
    price: "6000",
    imag: require('./assets/product.jpg')
  },
  {
    name: "Камера миттєвого друку Polaroid Now Black and White 6",
    price: "6000",
    imag: require('./assets/product.jpg')
  }
]

const cities = [
  {
    id: "1",
    name: "Chicago",
    image: "chicago.jpg"
  },
  {
    id: "2",
    name: "Los Angeles",
    image: "los-angeles.jpg"
  },
  {
    id: "3",
    name: "New York",
    image: "new-york.jpg"
  }
]



export default App;
