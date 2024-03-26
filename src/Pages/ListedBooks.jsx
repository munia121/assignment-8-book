import { Outlet } from "react-router-dom";
import Tabs from "../Components/Tabs";

const ListedBooks = () => {

    return (
        <div className="max-w-7xl mx-auto">
            <div className='text-center mt-10 bg-gray-200 h-24 flex items-center justify-center rounded-lg'>
                <h2 className='text-3xl font-bold items-center'>Books</h2>
            </div>

            <div className="mt-10 flex justify-center items-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white" >Short By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
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