import React from "react";
import "./CardListing.style.scss";
import Card from "components/Card";
import { RamenShopListing } from "typings/RamenShop";

export const CardListing = ({
  filteredData,
}: RamenShopListing): JSX.Element => {
  return (
    <div className="row">
      {filteredData && filteredData.length ? (
        filteredData.map((ramenShop: any, index: number) => {
          return (
            <div
              className="col-lg-4  col-md-6 col-sm-10 col-xs-10 "
              key={ramenShop.id}
            >
              <Card id={ramenShop.id} allProps={ramenShop} rank={index + 1} />
            </div>
          );
        })
      ) : (
        <h3 className="noSearchFound">No Results Found. Try something else!</h3>
      )}
    </div>
  );
};
