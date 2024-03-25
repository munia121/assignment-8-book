
const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px] bg-base-200 mt-10 rounded-lg">
                <div className="hero-content gap-40 flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/2Sq6YpN/pngwing-1.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="">
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn px-7 mt-10 bg-[#23BE0A] text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;