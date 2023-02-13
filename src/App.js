import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartContextProvider from './components/Store/CartContextProvider';

function App() {
  let [cartIsVisible, setCartIsVisible] = useState(false);

  let showCartHandler = () => {
    setCartIsVisible(true);
  };

  let hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <div className="App">
      <CartContextProvider>
        {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartContextProvider>
    </div>
  );
}

export default App;
