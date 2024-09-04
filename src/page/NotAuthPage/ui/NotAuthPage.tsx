import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";
import cls from "./NotAuthPage.module.scss";

const NotAuthPage = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate("/login");
  };

  return (
    <div className={cls.notAuthPage}>
      <h1>403</h1>
      <h3>Forbidden</h3>
      <Button onClick={back}>Back to login</Button>
    </div>
  );
};

export default NotAuthPage;
