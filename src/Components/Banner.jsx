import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero lg:h-[600px] bg-base-200 lg:mt-10 rounded-lg">
                <div className="hero-content lg:gap-40 flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/2Sq6YpN/pngwing-1.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="">
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <Link to={'/listedbooks'}>
                            <button className="btn px-7 mt-10 bg-[#23BE0A] text-white">View The List</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;