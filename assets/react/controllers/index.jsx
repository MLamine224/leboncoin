import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ListeAnnonces from "./mesannonces.jsx";
import Addannonce from "./addannonce.jsx";
import ProfilUtilisateur from "./ProfilUtilisateur.js";
import Login from "./Pages/login.jsx";
import Signup from "./Pages/signup.jsx";
import ModifierAnnonce from "./modifierAnnonce.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/connexion",
    element: <Login />,
  },
  {
    path: "/connexion/signup",
    element: <Signup />,
  },
  {
    path: "/Profil/addAnnonce",
    element: <Addannonce />,
  },
  {
    path: "/modifier",
    element: <ModifierAnnonce />,
  },
  {
    path: "/MesAnnonces",
    element: <ListeAnnonces />,
  },
  {
    path: "/Profil/MesAnnonces",
    element: <ListeAnnonces />,
  },
  {
    path: "/Profil",
    element: <ProfilUtilisateur />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
