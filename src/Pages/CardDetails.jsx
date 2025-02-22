/* eslint-disable react/jsx-key */
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredList, saveStoredList, saveWishList } from "../Components";
import { toast } from "react-toastify";

const CardDetails = () => {
    const cards = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    let card = cards.find(card => card.id === idInt);
    const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = card;

   

    const handleReadListBooks = (book) =>{
        saveStoredList(book)
    }


    const handleWishedListBook = (book) =>{
        const readBook = getStoredList();
        const readData = readBook.find(read=>read.id === book.id)
        if(readData){
            toast.warn('You have Already Read This Book');
            return;
        }
        saveWishList(book)
    }


    return (
        <div>
            <div className="hero lg:min-h-screen bg-base-200 lg:mt-20">
                <div className="hero-content gap-10 flex-col lg:flex-row">
                    <img src={image} className="lg:max-w-lg lg:h-[600px] rounded-lg shadow-2xl" />
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold">{bookName}</h1>
                        <p className="text-xl">By: {author}</p>
                        <hr />
                        <p className="font-bold">{category}</p>
                        <hr />
                        <p className="py-6"><span className= "font-bold">Review:</span> {review}</p>
                        <p className="flex gap-4"><span className="font-bold">Tags:</span> {tags.map(tag => <div className="text-green-500">#{tag}</div>)}</p>
                        <hr />
                        <div className="space-y-4">
                            <p className="">Number of page: <span className="ml-7">{totalPages}</span></p>
                            <p className="">Publisher: <span className="ml-20">{publisher}</span></p>
                            <p className="">Year of Publishing: <span className="ml-7">{yearOfPublishing}</span></p>
                            <p className="">Rating: <span className="ml-28">{rating}</span></p>
                        </div>
                        <div className="flex gap-7">
                            <button onClick={()=>handleReadListBooks(card)} className="btn border border-gray-300 px-6 ">Read</button>
                            <button onClick={()=>handleWishedListBook(card)} className="btn bg-[#50B1C9] text-white px-7">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;