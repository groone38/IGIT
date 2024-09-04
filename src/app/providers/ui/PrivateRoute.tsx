import { Navigate, Outlet, useLocation } from "react-router-dom";
import { NavBar } from "widgets/NavBar/NavBar";

const PrivateRoute = () => {
  const auth = localStorage.getItem("token");
  const location = useLocation();

  if (!auth) {
    return <Navigate to={"/not_auth"} state={{ from: location }} replace />;
  }

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
