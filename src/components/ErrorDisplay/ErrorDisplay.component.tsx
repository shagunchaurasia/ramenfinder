import React from "react";
import CustomButton from "components/CustomButton";
import "./ErrorDisplay.style.scss";

interface ErrorDisplayProps {
  error: string;
}

export const ErrorDisplay: React.FunctionComponent<ErrorDisplayProps> = ({
  error,
}: ErrorDisplayProps): JSX.Element => {
  return (
    <div role="errorDisplay">
      <h3 className="noSearchFound">
        Something went wrong
        <code>{`<${error}>`}</code>
      </h3>
      <div className="row">
        <h4>
          <CustomButton
            role="reloadButton"
            text="RELOAD"
            className="reloadButton"
            onClickHandler={() => window.location.reload}
          ></CustomButton>
        </h4>
      </div>
    </div>
  );
};
