import { Navigate, Outlet } from "react-router-dom";

// Fonction pour récupérer le rôle de l'utilisateur (à adapter selon votre logique d'authentification)
const getUserRole = () => {
  return localStorage.getItem("role"); // "admin" ou "user"
};

// Composant pour protéger les routes admin
const AdminRoute = () => {
  const role = getUserRole();

  return role === "admin" ? <Outlet /> : <Navigate to="*" />;
};

export default AdminRoute;
