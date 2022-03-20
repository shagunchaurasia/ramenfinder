import React from "react";
import "./CustomButton.style.scss";

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
  onClickHandler?: () => {};
}

export const CustomButton = ({
  text,
  className,
  onClickHandler,
}: ButtonProps): JSX.Element => {
  return (
    <button className={className} onClick={onClickHandler}>
      {text}
    </button>
  );
};
