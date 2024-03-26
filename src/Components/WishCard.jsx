/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
const WishCard = ({book}) => {
    // eslint-disable-next-line no-unused-vars
    const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book
    return (
        <div>
            <div className=" border border-gray-300 mt-10 rounded-lg">
                <div className=" gap-20  flex p-5">
                    <img src={image} className="w-64 bg-base-200 rounded-lg shadow-2xl" />
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">{bookName}</h1>
                        <p>By: {author}</p>
                        <div className="flex gap-10">
                            <p className="flex gap-4">Tags: {tags.map(tag => <div className="text-green-500">#{tag}</div>)}</p>
                            <p className="flex items-center justify-center gap-2"><IoLocationOutline></IoLocationOutline> Year of Publishing: {yearOfPublishing}</p>
                        </div>
                        <div className="flex gap-20">
                            <p className="flex"><AiOutlineUsergroupDelete size={20}></AiOutlineUsergroupDelete> Publisher: {publisher}</p>
                            <p className="flex items-center"><MdOutlineContactPage size={20}></MdOutlineContactPage> Page: {totalPages}</p>
                        </div>
                        <hr />

                        <div className="flex gap-5">
                            <button className="btn rounded-full bg-[#cee0f5]  text-[#328EFF]">Category: {category} </button>
                            <button className="btn rounded-full bg-[#efddc3]  text-[#FFAC33]">Rating: {rating} </button>
                            <button className="btn rounded-full bg-[#23BE0A]  text-white">View Details </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishCard;