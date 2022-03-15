import React, { useState, useEffect } from "react";
import Card from "components/Card";
import SearchBox from "components/SearchBox";
import "./Homepage.style.scss";
import { ReactComponent as Logo } from "assets/images/ramen.svg";

export const Homepage = (): JSX.Element => {
  const [searchField, setSearchField] = useState("");
  const [filteredRamenShops, setFilteredRamenShops] = useState([]);

  let api = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=f9dacf74bea74bda&large_area=Z011&format=json&count=12`;

  const fetchData = async () => {
    console.log("Inside fetch Data");
    let params = "";
    if (searchField) {
      params = `&name=${searchField}`;
    }
    console.log(`${api}${params}`);
    const data = await fetch(`${api}${params}`);
    return data.json();
  };


  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    console.log("Inside useEffect");
    fetchData()
      .then((response) => {
        console.log("Response from fetchData", response);
        setFilteredRamenShops(response.results.shop);

        if (searchField!=='') {
          console.log("Search field is set")
          const newFilteredRamenShops: any = filteredRamenShops.filter(
            (ramenShop: any) => {
              return (
                ramenShop.name.toLocaleLowerCase().includes(searchField) ||
                ramenShop.address.toLocaleLowerCase().includes(searchField) ||
                (ramenShop.special &&
                  ramenShop.special.toLocaleLowerCase().includes(searchField))
              );
            }
          );
          console.log("Filtered shops", newFilteredRamenShops);
          setFilteredRamenShops(newFilteredRamenShops);
        }
      })
      .catch(console.error);
  }, [searchField]);

  return (
    <div>
      <div className="header">
        <h1 className="heading">TOKYO RAMEN FINDER</h1>
        <Logo className="logo"></Logo>
      </div>
      <div className="searchInputContainer">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholderText="Filter by speciality, location or keyword..."
          className="searchInput"
        ></SearchBox>
      </div>
      <div className="row">
        {filteredRamenShops &&
          filteredRamenShops.map((ramenShop: any, index: number) => {
            return (
              <div
                className="col-lg-4  col-md-6 col-sm-12 col-xs-12 card-"
                key={ramenShop.id}
              >
                <Card id={ramenShop.id} allProps={ramenShop} rank={index + 1} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
