import React from "react";
import "./CustomButton.style.scss";

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
  onClickHandler?: () => {};
  role?:string;
}

export const CustomButton = ({
  text,
  className,
  onClickHandler,
  role
}: ButtonProps): JSX.Element => {
  return (
    <button className={className} onClick={onClickHandler} role={role}>
      {text}
    </button>
  );
};
