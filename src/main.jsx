import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOut/MainLayOut';
import Home from './Pages/Home';
import ListedBooks from './Pages/ListedBooks';
import ReadPages from './Pages/ReadPages';
import Cards from './Components/Cards';
import SingCard from './Components/SingCard';
import CardDetails from './Pages/CardDetails';
import Books from './Components/Books';
import ReadBooks from './Components/ReadBooks';
import WhishListBooks from './Components/WhishListBooks';
import { ToastContainer, toast } from 'react-toastify';
import ErrorPage from './Pages/ErrorPage';





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
     
      {
        path:'/readPage',
        element:<ReadPages></ReadPages>
      },
      
      {
        path:'/listedbooks',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('/data.json'),
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>,
            
          },
          {
            path:'whishList',
            element:<WhishListBooks></WhishListBooks>
          }
        ]
      },
      {
        path:'/cardDetails/:id',
        element:<CardDetails></CardDetails>,
        loader:()=> fetch('/data.json')
      }
     
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
