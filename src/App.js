import './App.css';
import logo from './basket.png'
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Basket</h1>  
        <img src={logo}/>
      </div>
      <div className="products">
        <div className="fruits">
          <Products/>
        </div>
      </div>
    </div>
  );
}

export default App;
