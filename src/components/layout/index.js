import { LOGIN } from "lib/routes";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "hooks/auth";

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user]);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <>
      this is the child: <Outlet />
    </>
  );
}
