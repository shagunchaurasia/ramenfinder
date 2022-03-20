import React from "react";
import CustomButton from "components/CustomButton";
import StarWithText from "components/StarWithText";
import "./Card.style.scss";
import { RamenShop } from "typings/RamenShop";
import FontAwesomeIcon from "components/FontAwesomeIcon";

export const Card: React.FunctionComponent<RamenShop> = ({
  id,
  allProps,
  rank,
}: RamenShop): JSX.Element => {
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
          <FontAwesomeIcon iconName="wifi" />
        ) : (
          <FontAwesomeIcon
            iconName="wifi"
            stacked="true"
            strikeColor="#c06376"
          />
        )}

        {allProps.non_smoking === "一部禁煙" ? (
          <FontAwesomeIcon iconName="smoking" />
        ) : (
          <FontAwesomeIcon
            iconName="smoking"
            stacked="true"
            strikeColor="#c06376"
          />
        )}
        {allProps.english === "あり" ? (
          <FontAwesomeIcon iconName="language" />
        ) : (
          <FontAwesomeIcon
            iconName="language"
            stacked="true"
            strikeColor="#c06376"
          />
        )}
        {allProps.pet === "可" ? (
          <FontAwesomeIcon iconName="dog" />
        ) : (
          <FontAwesomeIcon
            iconName="dog"
            stacked="true"
            strikeColor="#c06376"
          />
        )}

        {allProps.karaoke === "あり" ? (
          <FontAwesomeIcon iconName="microphone-lines" />
        ) : (
          <FontAwesomeIcon
            iconName="microphone-lines"
            stacked="true"
            strikeColor="#c06376"
          />
        )}
      </div>

      <div className="row d-flex justify-content-end">
        <CustomButton className="findMore" text="Find Out More" />
      </div>
    </div>
  );
};
