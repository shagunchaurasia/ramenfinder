import CustomButton from "components/CustomButton";
import React from "react";
import "./ErrorDisplay.style.scss";

interface ErrorDisplayProps {
  error: string;
}

export const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  return (
    <div>
      <h3 className="noSearchFound">
        Something went wrong
        <code>{`<${error}>`}</code>
      </h3>
      <div className="row">
        <h4>
          <CustomButton
            text="RELOAD"
            className="reloadButton"
            onClickHandler={() => (window.location = window.location)}
          ></CustomButton>
        </h4>
      </div>
    </div>
  );
};
