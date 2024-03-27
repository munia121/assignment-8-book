import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" flex flex-col justify-center items-center">
            <h1 className="text-7xl">404</h1>
            <p className="text-2xl ">Not found page</p>
            <Link to={'/'}>
                <button className="btn">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;