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
          {/* <Star fill={`${rank === 1 ? "#f3ce72" : "#EAEAEA"}`} title={rank.toString()}></Star>
          <span className="ranking">{rank}</span>
           */}

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

      <CustomButton className="findMore" text="Find Out More" />
    </div>
  );
};
