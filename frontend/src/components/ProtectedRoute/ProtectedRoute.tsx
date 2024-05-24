import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { PropsWithChildren } from "react";

interface ProtectedRouteProps extends PropsWithChildren {
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/login",
  children,
}) => {
  const { accessToken } = useAuth();
  if (!accessToken && true) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
