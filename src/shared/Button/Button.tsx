import React, { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

const Button = ({ children, disabled, ...otherProps }: IButton) => {
  return (
    <button className={cls.button} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
