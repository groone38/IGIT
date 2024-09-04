import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";
import cls from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <div className={cls.NotFoundPage}>
      <h1>400</h1>
      <h3>Такой страницы не существует</h3>
      <Button onClick={back}>Обратно к работе</Button>
    </div>
  );
};

export default NotFoundPage;
