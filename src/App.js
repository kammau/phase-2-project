import NavBar from './components/NavBar';
import {Route, Switch} from "react-router-dom";
import Sell from './components/Sell';
import Cart from './components/Cart';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      fetch(" http://localhost:3000/books")
      .then((res) => res.json())
      .then((bookData) => setBooks(bookData))
    }, [])

    return (
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/sell">
              <Sell onHandleSubmit={handleSellBook}/>
            </Route>
            <Route exact path="/cart">
              <Cart books={cart}/>
            </Route>
            <Route exact path="/">
              <Home books={books} onAddToCart={handleAddToCart}/>
            </Route>
          </Switch>
        </div>
      );
}