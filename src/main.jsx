import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesRead from './components/PagesRead/PagesRead.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import NewBooks from './components/NewBooks/NewBooks.jsx';
import About from './components/About/About.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("books.json"),
      },
      {
        path: "/book_details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch("/books.json"),
      },
      {
        path: "/listed_books",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch("/books.json"),
      },
      {
        path: "/pages_read",
        element: <PagesRead></PagesRead>
      },
      {
        path: "/new_books",
        element: <NewBooks></NewBooks>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
