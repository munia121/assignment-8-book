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
import CardDetails from './Pages/CardDetails';
import ReadBooks from './Components/ReadBooks';
import WhishListBooks from './Components/WhishListBooks';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './Pages/ErrorPage';
import Marketing from './Components/Marketing';
import Writing from './Components/Writing';





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
        element:<ReadPages></ReadPages>,
        loader:()=> fetch('/data.json')
      },
      {
        path:'/marketing',
        element:<Marketing></Marketing>
      },
      {
        path:'/writing',
        element:<Writing></Writing>
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
