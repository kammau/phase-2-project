import React, { useState } from "react";

function Sell({onHandleSubmit}) {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookImg, setBookImg] = useState("");
    const [bookPrice, setBookPrice] = useState(0);

    function handleSubmit(event) {
        event.preventDefault()
        if (bookPrice === 0) {
            alert("Please Enter a Price")
        } else {
            onHandleSubmit({
                title: bookTitle,
                author: bookAuthor,
                image: bookImg,
                price: bookPrice,
                stock: "Available",
            })
            alert("Your book has been sucessfully placed in our online market thank you!");
        }
    }

    return (
        <div className="sellForm">
            <h1>Sell Your Books!</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" placeholder="Book Title" name="bookTitle" value={bookTitle} onChange={(event) => setBookTitle(event.target.value)} className="sellFormInput"/>
                <input type="text" placeholder="Book Author" name="bookAuthor" value={bookAuthor} onChange={(event) => setBookAuthor(event.target.value)} className="sellFormInput"/>
                <br/>
                <input type="text" placeholder="Book Image" name="bookImg" value={bookImg} onChange={(event) => setBookImg(event.target.value)} className="sellFormInput"/>
                <input type="text" placeholder="Book Price" name="bookPrice" value={bookPrice} onChange={(event) => setBookPrice(event.target.value)} className="sellFormInput"/>
                <br/>
                <input type="submit" value="Sell"/>
            </form>
        </div>
    )
}

export default Sell;
