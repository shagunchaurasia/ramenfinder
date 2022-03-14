import React from "react";
import './SearchBox.style.scss';

interface SearchBoxProps {
  //   onChangeHandler: React.InputHTMLAttributes<HTMLInputElement>.onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onChangeHandler: any;
  placeholderText: string;
  className: string;
}

export const SearchBox = (props: SearchBoxProps): JSX.Element => {
  return (
    <input
      className={`search-box ${props.className}`}
      type="search"
      placeholder={props.placeholderText}
      onChange={props.onChangeHandler}
    />
  );
};
