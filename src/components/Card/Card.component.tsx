import React from "react";
import CustomButton from "components/CustomButton";
import StarWithText from "components/StarWithText";
import "./Card.style.scss";
import { RamenShop } from "typings/RamenShop";

export const Card:React.FunctionComponent<RamenShop> = ({ id, allProps, rank }: RamenShop): JSX.Element => {
  return (
    <div className="card-container " id={id}>
      <div className="details">
        <div className="name-address">
          <div className="title">{allProps.name}</div>
          <div className="subtitle">{allProps.address}</div>
        </div>
        <div>
          <StarWithText
            fill={`${rank === 1 ? "#f3ce72" : "#EAEAEA"}`}
            text={rank.toString()}
          ></StarWithText>
        </div>
      </div>
      <div className="image-container">
        <img src={allProps.photo.pc.l} alt="" className="image-box" />
      </div>

      <div className="description">{allProps.catch}</div>
      <div className="button-wrapper">
        {allProps.wifi === "あり" || allProps.wifi === "未確認" ? (
          <div className="feature-icon-description">
            <i className="fa-solid fa-wifi" />
          </div>
        ) : (
          <div className="feature-icon-description fa-stack">
            <i className="fa-solid fa-wifi fa-stack-1.5x"></i>
            <i
              className="fa-solid fa-slash fa-stack-1x"
              style={{ color: "#c06376", top: "0px" }}
            ></i>
          </div>
        )}

        {allProps.non_smoking === "一部禁煙" ? (
          <div className="feature-icon-description fa-stack">
            <i className="fa-solid fa-smoking" />
          </div>
        ) : (
          <div className="feature-icon-description fa-stack">
            <i className="fa-solid fa-smoking fa-stack-1.5x"></i>
            <i
              className="fa-solid fa-slash fa-stack-1x"
              style={{ color: "#c06376", top: "0px" }}
            ></i>
          </div>
        )}
        {allProps.english === "あり" ? (
          <div className="feature-icon-description">
            <i className="fa-solid fa-language"></i>
          </div>
        ) : (
          <div className="feature-icon-description fa-stack">
            <i className="fa-solid fa-language fa-stack-1.5x"></i>
            <i
              className="fa-solid fa-slash fa-stack-1x"
              style={{ color: "#c06376", top: "0px" }}
            ></i>
          </div>
        )}
        {allProps.pet === "可" ? (
          <div className="feature-icon-description">
            <i className="fa-solid fa-dog" />
          </div>
        ) : (
          <div className="feature-icon-description fa-stack">
            <i className="fa-solid fa-dog fa-stack-1.5x"></i>
            <i
              className="fa-solid fa-slash fa-stack-1x"
              style={{ color: "#c06376", top: "0px" }}
            ></i>
          </div>
        )}

        {allProps.karaoke === "あり" ? (
          <div className="feature-icon-description">
            <i className="fa-solid fa-microphone-lines"></i>
          </div>
        ) : (
          <div className="feature-icon-description fa-stack">
            <i className="fa-solid fa-microphone-lines fa-stack-1.5x"></i>
            <i
              className="fa-solid fa-slash fa-stack-1x"
              style={{ color: "#c06376", top: "0px" }}
            ></i>
          </div>
        )}
      </div>

      <div className="row d-flex justify-content-end">
        <CustomButton className="findMore" text="Find Out More" />
      </div>
    </div>
  );
};
