import React from "react";

interface FontAwesomeProps {
  iconName: string;
  stacked?: string;
  strikeColor?: string;
}
export const FontAwesomeIcon = ({
  iconName,
  stacked,
  strikeColor,
}: FontAwesomeProps) => {
  return (
    <div
      className={`feature-icon-description ${
        stacked === "true" ? "fa-stack" : ""
      }`}
    >
      {stacked === "true" ? (
        <>
          <i className={`fa-solid fa-${iconName} fa-stack-1.5x`}></i>
          <i
            className="fa-solid fa-slash fa-stack-1x"
            style={{ color: ` ${strikeColor}`, top: "0px" }}
          ></i>
        </>
      ) : (
        <i className={`fa-solid fa-${iconName}`} />
      )}
    </div>
  );
};
