/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { getStoredList } from ".";
import ReadBooksCard from "./ReadBooksCard";

const ReadBooks = () => {
    const [books, setBooks] = useState([]);
    

    useEffect(()=>{
        const stored = getStoredList();
        setBooks(stored);
    },[])
    // console.log(books)
    return (
        <div className="space-y-4">
           {
            books.map(book=> <ReadBooksCard book={book}></ReadBooksCard>)
           }
        </div>
    );
};

export default ReadBooks;