import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";
import Input from "shared/Input/Input";
import cls from "./LoginPage.module.scss";

const LoginPage = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>();

  const navigate = useNavigate();

  const onSubmit = () => {
    if (login === "admin" && password === "admin") {
      localStorage.setItem("token", "123");
      navigate("/");
    } else {
      setError("Некорректные данные");
    }
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.login}>
        {error && <span className={cls.error}>{error}</span>}
        <Input type="text" label="Login:" value={login} onChange={setLogin} />
        <Input
          type="password"
          label="Password:"
          value={password}
          onChange={setPassword}
        />
        <Button onClick={onSubmit}>Log in</Button>
      </div>
    </div>
  );
};

export default LoginPage;
