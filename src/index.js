/* React */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* React Router DOM */
import {
  createBrowserRouter,
  RouterProvider,
  } from 'react-router-dom';

/* Styles*/
import './styles.css';

/* Components */
import Root from "./routes/root.jsx";

/* 1st step - CREATE BROWSER ROUTER */  
const browserRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />, //3th step
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* 2nd step - Create a Router Provider and define define the Browser Router as provider 
  Usually thir rout is called Root Route, because all other routs will be rendered inside that mk*/}
  <RouterProvider router={browserRouter} />
  </React.StrictMode>
);
