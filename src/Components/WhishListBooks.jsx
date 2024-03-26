/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import {  getWishList } from ".";
import WishCard from "./WishCard";

const WhishListBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        const stored = getWishList();
        setBooks(stored);
    },[])
    console.log(books)

    return (
        <div>
            {
                books.map(book=> <WishCard book={book}> </WishCard>)
            }
        </div>
    );
};

export default WhishListBooks;