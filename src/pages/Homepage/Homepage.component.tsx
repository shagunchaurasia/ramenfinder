import React, { useState, useEffect } from "react";
import Card from "components/Card";
import SearchBox from "components/SearchBox";
import "./Homepage.style.scss";

export const Homepage = (): JSX.Element => {
  const [ramenShops, setRamenShops] = useState<any[]>([]);

  let api = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=f9dacf74bea74bda&large_area=Z011&format=json&count=12`;

  const fetchData = async () => {
    let params = "";
    const data = await fetch(`${api}${params}`);
    return data.json();
  };

  useEffect(() => {
    fetchData()
      .then((response) => {
        setRamenShops(response.results.shop);
      })
      .catch(console.error);
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    
  };



  return (
    <div>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholderText="Filter by speciality, location or keyword..."
        className="searchInput"
      ></SearchBox>
      <div className="row">
        {ramenShops &&
          ramenShops.map((ramenShop: any) => {
            return (
              <div
                className="col-lg-4  col-md-6 col-sm-12 col-xs-12 card-"
                key={ramenShop.id}
              >
                <Card id={ramenShop.id} allProps={ramenShop} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
