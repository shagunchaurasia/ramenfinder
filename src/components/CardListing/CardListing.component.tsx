import React from 'react';
import './CardListing.style.scss';
import Card from "components/Card";



export const CardListing = ({filteredData}:any):JSX.Element => {

    return (
      <div className="row">
        {filteredData && filteredData.length?
          filteredData.map((ramenShop: any, index: number) => {
            return (
              <div
                className="col-lg-4  col-md-6 col-sm-12 col-xs-12 card-"
                key={ramenShop.id}
              >
                <Card id={ramenShop.id} allProps={ramenShop} rank={index + 1} />
              </div>
            );
          }):<h1>Sorry no search found</h1>}
      </div>
    );
    
}


