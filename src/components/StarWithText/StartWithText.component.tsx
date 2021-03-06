import React from "react";
import "./StarWithText.style.scss";

interface StarWithTextInterface {
  fill: string;
  text: string;
}

export const StarWithText = ({
  fill,
  text,
}: StarWithTextInterface): JSX.Element => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9802 0L24.0178 4.43156L29.7302 2.6125L31.0111 8.46913L36.8677 9.75L35.0487 15.4624L39.4802 19.5L35.0487 23.5376L36.8677 29.25L31.0111 30.5309L29.7302 36.3875L24.0178 34.5684L19.9802 39L15.9426 34.5684L10.2302 36.3875L8.94936 30.5309L3.09273 29.25L4.91178 23.5376L0.480225 19.5L4.91178 15.4624L3.09273 9.75L8.94936 8.46913L10.2302 2.6125L15.9426 4.43156L19.9802 0Z"
        fill={fill}
      />
      <text fill="black" x="14" y="25" className="text">
        {text}
      </text>
    </svg>
  );
};
