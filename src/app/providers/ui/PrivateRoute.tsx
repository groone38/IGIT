import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = localStorage.getItem("token");
  console.log(auth);
  if (!auth) {
    return <Navigate to={"/not_found"} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
