import { useAuth } from "@/core/auth/auth.provider";
import { appRoutes } from "@/core/router";
import { useNavigate } from "react-router-dom";

interface Props {
  childrennn: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const { username, setToken } = useAuth();

  const handleLogout = () => {
    setToken("");
    navigate(appRoutes.RootPage);
  };

  return (
    <div>
      <div className="header-container">
        <button onClick={handleLogout}>Logout</button>
        <p>{username}</p>
      </div>
      {children}
    </div>
  );
};
