import React, { useState, useEffect } from "react";
import SearchBox from "components/SearchBox";
import "./Homepage.style.scss";
import { ReactComponent as Logo } from "assets/images/ramen.svg";
import CardListing from "components/CardListing";

export const Homepage = (): JSX.Element => {
  const [searchField, setSearchField] = useState("");
  const [filteredRamenShops, setFilteredRamenShops] = useState([]);
  const [loading, setLoading] = useState(false);

  let api = `https://cors-ramen-heroku.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=f9dacf74bea74bda&large_area=Z011&format=json&count=12`;

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

        // if (searchField !== "") {
        //   console.log("Search field is set");
        //   console.log("filtering data", filteredRamenShops);
        //   const newFilteredRamenShops: any = filteredRamenShops.filter(
        //     (ramenShop: any) => {
        //       return (
        //         ramenShop.name.toLocaleLowerCase().includes(searchField) ||
        //         ramenShop.address.toLocaleLowerCase().includes(searchField) ||
        //         (ramenShop.special &&
        //           ramenShop.special.toLocaleLowerCase().includes(searchField))
        //       );
        //     }
        //   );
        //   console.log("Filtered shops", newFilteredRamenShops);
        //   setFilteredRamenShops(newFilteredRamenShops);
        // }

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

      <CardListing
        filteredData={filteredRamenShops}
        loading={loading}
      ></CardListing>
    </div>
  );
};
