import React, { useState, useEffect } from "react";
import SearchBox from "components/SearchBox";
import "./Homepage.style.scss";
import { ReactComponent as Logo } from "assets/images/ramen.svg";
import  Loading  from "assets/images/loading.gif";
import CardListing from "components/CardListing";

export const Homepage = (): JSX.Element => {
  const [searchField, setSearchField] = useState("");
  const [filteredRamenShops, setFilteredRamenShops] = useState([]);
  const [loading, setLoading] = useState(false);

  let api = `https://cors-ramen-heroku.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=f9dacf74bea74bda&large_area=Z011&format=json&count=12`;

  const fetchData = async () => {
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
    setLoading(true);
    fetchData()
      .then((response) => {
        setFilteredRamenShops(response.results.shop);
        setLoading(false);
      })
      .catch(console.error);
  }, [searchField]);

  return (
    <div>
      <div className="row d-flex justify-content-center header">
        {/* <div className=""> */}
        <span className="heading col-lg-6 col-md-8 col-sm-8 col-xs-10">
          TOKYO RAMEN FINDER
        </span>
        {/* </div> */}
        {/* <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"> */}
        <Logo className="col-lg-1 col-md-1 col-sm-1 col-xs-1 logo"></Logo>
        {/* </div> */}
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-lg-7">
          <SearchBox
            onChangeHandler={onSearchChange}
            placeholderText="Filter by speciality, location or keyword..."
            className="searchInput"
          ></SearchBox>
        </div>
      </div>
      {loading ? (
        <img src={Loading} alt="loading..." className="loadingGif" />
      ) : (
        <CardListing
          filteredData={filteredRamenShops}
          loading={loading}
        ></CardListing>
      )}
    </div>
  );
};
