import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import App from "./App";
import Map from "./components/Map/Map";
import AdminUsers from "./pages/AdminUsers";
import AdminCars from "./pages/AdminCars";
import AdminCarsId from "./pages/AdminCarsId";
import AdminUserId from "./pages/AdminUserId";
import AdminTerminal from "./pages/AdminTerminal";
import AdminTerminalId from "./pages/AdminTerminalId";
import Inscription from "./pages/Inscription";
import InscriptionProfile from "./pages/Inscription_Profile";
import Admin from "./pages/Admin";
import FaqPage from "./pages/Faq/FaqPage";
import AuthProvider from "./context/AuthContext";
import LogIn from "./pages/LogIn";
import Reservation from "./pages/Reservation";
import InscriptionCar from "./pages/InsciptionCar";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
        loader: () => {
          return connexion
            .get("/reservations")
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/inscriptionvoiture",
        element: <InscriptionCar />,
      },
      {
        path: "/map",
        element: <Map />,
        loader: () => {
          return connexion
            .get("/terminals")
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
      {
        path: "/inscription-profil",
        element: <InscriptionProfile />,
      },
    ],
  },

  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/user",
        element: <AdminUsers />,
        loader: () => {
          return connexion
            .get("/profils")
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/admin/user/:id",
        element: <AdminUserId />,
        loader: ({ params }) => {
          return connexion
            .get(`/profils/${params.id}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/admin/car",
        element: <AdminCars />,
        loader: () => {
          return connexion
            .get("/cars")
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/admin/car/:id",
        element: <AdminCarsId />,
        loader: ({ params }) => {
          return connexion
            .get(`/cars/${params.id}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/admin/terminal",
        element: <AdminTerminal />,
        loader: () => {
          return connexion
            .get("/terminals")
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/admin/terminal/:id",
        element: <AdminTerminalId />,
        loader: ({ params }) => {
          return connexion
            .get(`/terminals/${params.id}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
