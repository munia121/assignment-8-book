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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/listedBook',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/readPage',
        element:<ReadPages></ReadPages>
      },
      {
        path:'/cards',
        element:<Cards></Cards>,
        loader:fetch('/data.json')
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
