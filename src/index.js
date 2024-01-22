/* React */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* React Router DOM */
import {
  createBrowserRouter,
  RouterProvider,
  } from 'react-router-dom';

/*Styles*/
import './styles.css';


/* 1st step - CREATE BROWSER ROUTER */  
const browserRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>Hello World</div>,
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* 2nd step - Create a Router Provider and define define the Browser Router as provider 
  Usually thir rout is called Root Route, because all other routs will be rendered inside that */}
  <RouterProvider router="browserRouter" />
  </React.StrictMode>
);
