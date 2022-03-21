import React, { useState, useEffect } from "react";
import SearchBox from "components/SearchBox";
import { ReactComponent as Logo } from "assets/images/ramen.svg";
import Loading from "assets/images/loading.gif";
import CardListing from "components/CardListing";
import { getRequest } from "service/axios";
import "./Homepage.style.scss";
import ErrorDisplay from "components/ErrorDisplay";

interface HomepageProps {}

export const Homepage: React.FunctionComponent<
  HomepageProps
> = (): JSX.Element => {
  const [searchField, setSearchField] = useState("");
  const [filteredRamenShops, setFilteredRamenShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(12);
  const [error, setError] = useState(null);

  const api = `?key=f9dacf74bea74bda&large_area=Z011&format=json&count=12`;

  

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const fetchData = async () => {
      let params = "";
      if (searchField) {
        params = `&name=${searchField}`;
      }
      try {
        const data: any = await getRequest(`${api}${params}`);
        return data.data;
      } catch (err: any) {
        setError(err.message);
        return err;
      }
    };
    setLoading(true);
    fetchData()
      .then((response) => {
        setFilteredRamenShops(response.results.shop);
        setCount(response.results.results_available);
        setLoading(false);
      })
  }, [searchField,api]);

  return (
    <div data-testid="homepageContainer">
      <div className="d-flex justify-content-center header">
        <span className="heading col-lg-6 col-md-6 col-sm-6 col-xs-6">
          TOKYO RAMEN FINDER
        </span>
        <div className="col-lg-1 col-md-1  d-none d-sm-block">
          <Logo className="logo"></Logo>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-lg-7">
          <SearchBox
            onChangeHandler={onSearchChange}
            placeholderText="Filter by specialty, location or keyword..."
            className="searchInput"
          ></SearchBox>
        </div>
      </div>

      {count && !error && !loading ? (
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 searchCount">
            Displaying the top {count < 12 ? count : 12} of {count} results
          </div>
        </div>
      ) : null}

      {error ? (
        <ErrorDisplay error={error} />
      ) : loading ? (
        <img src={Loading} alt="loading..." className="loadingGif" />
      ) : (
        <CardListing
          filteredData={filteredRamenShops}
        ></CardListing>
      )}
    </div>
  );
};
