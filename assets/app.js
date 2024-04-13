
import './styles/app.css';
// import './styles/auth.css';
// import './styles/mesAnnonces.css';
// import './styles/ProfileUtilisateur.css';


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./react/controllers/App.jsx";
// import ListeAnnonces from "./react/controllers/mesannonces.jsx";
// import Addannonce from "./react/controllers/addannonce.jsx";
// import ProfilUtilisateur from "./react/controllers/ProfilUtilisateur.jsx";
// import Login from "./react/controllers/Login.jsx";
// // import Signup from "./Pages/signup.jsx";
// import ModifierAnnonce from "./react/controllers/modifierAnnonce.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/connexion",
//     element: <Login />,
//   },
//   // {
//   //   path: "/connexion/signup",
//   //   element: <Signup />,
//   // },
//   {
//     path: "/Profil/addAnnonce",
//     element: <Addannonce />,
//   },
//   {
//     path: "/modifier",
//     element: <ModifierAnnonce />,
//   },
//   {
//     path: "/MesAnnonces",
//     element: <ListeAnnonces />,
//   },
//   {
//     path: "/Profil/MesAnnonces",
//     element: <ListeAnnonces />,
//   },
//   {
//     path: "/Profil",
//     element: <ProfilUtilisateur />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );




// import React from 'react';
// import ReactDOM from 'react-dom';
// // import Hello from './react/controllers/Hello.jsx';
// // import MyModal from './react/controllers/Modal.jsx';
// // import Menu from './react/controllers/Menu.jsx';
// import Acceuil from './react/controllers/App';


// document.addEventListener('DOMContentLoaded', () => {
//     // const helloContainer = document.getElementById('hello-react');
//     // const modalContainer = document.getElementById('modal');
//     // const menuContainer = document.getElementById('menu');
//     const acceuilContainer = document.getElementById('acceuil');

//     // if (helloContainer) {
//     //     ReactDOM.render(<Hello fullName="Lamine" />, helloContainer);
//     // }

//     // if (modalContainer) {
//     //     ReactDOM.render(<MyModal />, modalContainer);
//     // }

//     // if (menuContainer) {
//     //     ReactDOM.render(<Menu />, menuContainer);
//     // }

//     if (acceuilContainer) {
//         ReactDOM.render(<Acceuil />, acceuilContainer);
//     }
// });


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./react/controllers/App.js";
// import ListeAnnonces from "./react/controllers/components/mesannonces";
// import Addannonce from "./react/controllers/components/addannonce";
// import ProfilUtilisateur from "./react/controllers/components/ProfilUtilisateur.js";
// import Login from "./react/controllers/Pages/login.jsx";
// import Signup from "./react/controllers/Pages/signup.jsx";
// import ModifierAnnonce from "./react/controllers/Pages/modifierAnnonce.js";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/connexion",
//     element: <Login />,
//   },
//   {
//     path: "/connexion/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/Profil/addAnnonce",
//     element: <Addannonce />,
//   },
//   {
//     path: "/modifier",
//     element: <ModifierAnnonce />,
//   },
//   {
//     path: "/MesAnnonces",
//     element: <ListeAnnonces />,
//   },
//   {
//     path: "/Profil/MesAnnonces",
//     element: <ListeAnnonces />,
//   },
//   {
//     path: "/Profil",
//     element: <ProfilUtilisateur />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );



// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./react/controllers/App";
// import ListeAnnonces from "./react/controllers/components/mesannonces";
// import Addannonce from "./react/controllers/components/addannonce";
// import ProfilUtilisateur from "./react/controllers/components/ProfilUtilisateur";
// import Login from "./react/controllers/Pages/login";
// import Signup from "./react/controllers/Pages/signup";
// import ModifierAnnonce from "./react/controllers/Pages/modifierAnnonce";
// import NotFoundPage from "./react/controllers/Pages/NotFoundPage"; // Import the NotFoundPage component

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/connexion", element: <Login /> },
//   { path: "/inscription", element: <Signup /> },
//   { path: "/profil/ajouter-annonce", element: <Addannonce /> },
//   { path: "/modifier-annonce", element: <ModifierAnnonce /> },
//   { path: "/mes-annonces", element: <ListeAnnonces /> },
//   { path: "/profil", element: <ProfilUtilisateur /> },
//   { path: "*", element: <NotFoundPage /> }, // Catch-all route for 404 Not Found pages
// ]);

// // >>>>>>> Stashed changes
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

  




// On doit importer les css ici ?
// import './styles/app.css';
// import './styles/auth.css';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Acceuil from './react/controllers/Acceuil.jsx';
// import Login from './react/controllers/Login.jsx'
// import Register from './react/controllers/Register.jsx'
// const router = createBrowserRouter([
//   {
//     path: "/react",
//     element: <Acceuil />,
//   },
//   {
//     path: "/login",
//     element:<Login />,
//   },
//   {
//     path:"/register",
//     element:<Register/>
//   },
//   {
//     path: "/Annonces",
//     element:<List />,
//   },
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


// assets/js/app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Acceuil from './react/controllers/Acceuil.jsx';
import Login from './react/controllers/Login.jsx';
import Register from './react/controllers/Register.jsx';
import Add from './react/controllers/addAnnonce.jsx';


// S'assurez d'avoir un composant Acceuil capable de recevoir 
// les annonces en tant que props
const annonces = JSON.parse(window.annoncesData || '[]');

// console.log(annonces); 

const router = createBrowserRouter([
  {
    path: "/react",
    element: <Acceuil annoncesInitiales={annonces} />,
  },
  {
    path: "/login",
    element:<Login />,
  },
  {
    path:"/register",
    element:<Register/>,
  },
  {
    path:"/add",
    element:<Add/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
