/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";


const SingCard = ({card,}) => {
    // eslint-disable-next-line no-unused-vars
    const {author,id,bookName,category,image,publisher,rating,review,tags,totalPages,yearOfPublishing} = card;
    
    // eslint-disable-next-line no-unused-vars
    const {ids} =useParams()

    return (
        <Link to={`/cardDetails/${id}`}>
            <div className="space-y-5 p-6  lg:w-full  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={image} alt="" className="object-cover object-center lg:w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                    <h2 className="text-xl font-semibold tracking-wide">{bookName}</h2>
                </div>
                <p className="dark:text-gray-800">By: {author}</p>
                <hr />
                <div className="flex justify-between">
                    <p>{category}</p>
                    <p className="flex justify-center items-center">{rating} <CiStar size={20}></CiStar></p>
                </div>
            </div>
        </Link>
    );
};

export default SingCard;