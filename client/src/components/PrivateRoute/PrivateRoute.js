import { Navigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../../core/lib/utils/localStorage";

const PrivateRoute = ({ children }) => {
  const Auth = getUserFromLocalStorage();

  if (!Auth) return <Navigate to="/" />;

  return children;
};
export default PrivateRoute;
