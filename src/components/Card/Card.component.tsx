import React from "react";
import "./Card.style.scss";

interface CardProps {
  id: string;
  allProps: {
    name: string;
    address: string;
    catch: string;
    logo_image: string;
    photo: { pc: { l: string } };
  };
}

export const Card = ({id,allProps}: CardProps): JSX.Element => {
  return (
    <div className="card-container " id={id}>
      <div className="details">
        <div className="name-address">
          <div className="title">{allProps.name}</div>
          <div className="subtitle">{allProps.address}</div>
        </div>

        <div className="rating-star"></div>
      </div>

      <div className="image-container">
        <img src={allProps.photo.pc.l} alt="" className="image" />
      </div>
      <div className="description">{allProps.catch}</div>

      <button className="findMore">Find Out More</button>
    </div>
  );
};
