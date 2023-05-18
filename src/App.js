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

    function handleAddToCart(book) {
        const updatedCart = [...cart, book]
        setCart(updatedCart)
        fetch(`http://localhost:3000/books/${book.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            stock: "Out of Stock"
          })
        })
        .then((res) => res.json())
        .then((newBookData) => {
          const updatedBooks = books.map((book) => {
            if (book.id === newBookData.id) {
              return book = {
                id: book.id,
                title: book.title,
                author: book.author,
                image: book.image,
                price: book.price,
                stock: "Out of Stock"
              }
            } else {
              return book
            }
          })
          return setBooks(updatedBooks)
        })
      }

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