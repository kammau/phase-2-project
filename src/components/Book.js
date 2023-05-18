import React from "react";
import Book from "./Book";

function Home({books, onAddToCart}) {
    return (
        books.map((book) => {
            return <Book key={book.id} book={book} onAddToCart={onAddToCart}/>
        })
    )
}

export default Home;