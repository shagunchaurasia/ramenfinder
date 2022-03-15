import React from "react";
import "./CustomButton.style.scss";

interface ButtonProps {
  text: string;
  className: string;
  id?: string;
  allProps?: {
    name: string;
    address: string;
    catch: string;
    logo_image: string;     
    photo: { pc: { l: string } };
  };
}

export const CustomButton = ({ text, className }: ButtonProps): JSX.Element => {
  return <button className={className}>{text}</button>;
};
