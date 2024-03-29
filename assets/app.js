// On doit importer les css ici ?
import './styles/app.css';
import './styles/auth.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Acceuil from './react/controllers/entre.jsx';
import Login from './react/controllers/Login.jsx'
import Register from './react/controllers/Register.jsx'
import Hello from './react/controllers/Hello.jsx';
// import MyModal from './MyModal';
const router = createBrowserRouter([
  {
    path: "/react",
    element: <Acceuil />,
  },
  {
    path: "/login",
    element:<Login />,
  },
  {
    path:"/register",
    element:<Register/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

  