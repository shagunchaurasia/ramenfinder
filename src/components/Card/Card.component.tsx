import CustomButton from "components/CustomButton";
import StarWithText from "components/StarWithText";
import React from "react";
import "./Card.style.scss";
// import {ReactComponent as Star} from 'assets/images/star.svg';

interface CardProps {
  id: string;
  rank: number;
  allProps: {
    name: string;
    address: string;
    catch: string;
    logo_image: string;
    photo: { pc: { l: string } };
    // あり -possible なし- none 未確認- unconfirmed
    wifi: "あり" | "なし" | "未確認";
    // 可 - possible 不可 - Impossible
    pet: "可" | "不可";
    // 一部禁煙 - partially non smoking 全面禁煙 - no smoking    禁煙席なし - no non smoking seat
    non_smoking: "一部禁煙" | "全面禁煙" | "禁煙席なし";
    // なし - No  あり- can be
    karaoke: "なし" | "あり";
    english: "あり" | "なし";
  };
}

export const Card = ({ id, allProps, rank }: CardProps): JSX.Element => {
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
