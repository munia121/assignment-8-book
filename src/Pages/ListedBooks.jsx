import { Outlet, useLoaderData } from "react-router-dom";
import Tabs from "../Components/Tabs";
import { getStoredList } from "../Components";
import { useEffect, useState } from "react";

const ListedBooks = () => {
    
    const [books, setBooks] = useState([]);
    
    
    
    useEffect(() => {
        const cards = getStoredList();
        setBooks(cards)
    }, [])
    // console.log(books)

    // const handleShortData = short =>{
    //     if(short === 'rating'){
    //         let ratingShort = books.rating.sort((a,b) => a-b);
    //         setBooks(ratingShort)
    //     }
    // }
    // console.log(books)

    


    return (
        <div className="max-w-7xl mx-auto">
            <div className='text-center mt-10 bg-gray-200 h-24 flex items-center justify-center rounded-lg'>
                <h2 className='text-3xl font-bold items-center'>Books</h2>
            </div>

            <div className="mt-10 flex justify-center items-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white" >Short By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleShortData('rating')}><a>Rating</a></li>
                        <li><a>Number of Page</a></li>
                        <li><a>Publish year</a></li>
                    </ul>
                </details>
            </div>
            {/**************Tabs************ */}
            <Tabs></Tabs>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;