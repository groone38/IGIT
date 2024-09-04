import React, { ChangeEvent, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface IInput extends HTMLInputProps {
  value?: string;
  label?: string;
  htmlFor?: string;
  helper?: string;
  onChange: (value: string) => void;
}

const Input = ({
  value,
  label,
  placeholder,
  htmlFor,
  type,
  disabled,
  onChange,
  helper,
  ...otherProps
}: IInput) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={cls.input}>
      {label && (
        <label htmlFor={htmlFor} className={cls.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        disabled={disabled}
        {...otherProps}
      />
      {helper && <span className={cls.hint}>{helper}</span>}
    </div>
  );
};

export default Input;
