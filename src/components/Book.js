import React from "react";

function Book({book, onAddToCart}) {


    function handleClick(book) {
        if (book.stock === "Available") {
            onAddToCart(book)
        }
    }

    return (
        <div className="card" id={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <img className="element_resize" src={book.image} alt={`${book.title} cover`}/>
            <p style={book.stock === "Available" ? {color: "green"} : {color: "red"}}>{book.stock}</p> 
            <p>${book.price}</p>
            <button onClick={() => handleClick(book)} style={book.stock === "Available" ? {textDecoration: "none"} : {textDecoration: "line-through"}}>Add to Cart</button>
        </div>
    )
}

export default Book;