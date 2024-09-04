import { Link, useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";
import cls from "./NavBar.module.scss";

export const NavBar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className={cls.wrapper}>
      <div>
        <Link to="/">Погода</Link>
      </div>
      <div>
        <Button onClick={logOut}>Выйти</Button>
      </div>
    </header>
  );
};
