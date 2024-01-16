import React from "react";
import { Route } from "react-router-dom";
import SearchBox from "../SearchBox";
import "./Container.css";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

const Container = () => {
  return (
    <>
      <div className="CategoryListingTopSection">
        <div className="CategoryListing_searchRoot">
          <div className="CategoryListing_insideSearchContainer">
            <div className="CategoryListing_searchSelectMain">
              <div className="SearchPlaceholder_searchRoot">
                <h6 className="hh">Search for Medicines</h6>
                <span className="icon-searchIcon "></span>
                <div className="searchContainer">
                  <div className="searchOuterBox">
                    <a href="https://imgbb.com/">
                      <img
                        src="https://i.ibb.co/vJWfYmG/loupe.png"
                        alt="loupe"
                        border="0"
                        width="20px"
                        padding="10px"
                        margin="10px"
                      />
                    </a>
                    <Route
                      className="searchBox"
                      render={({ history }) => <SearchBox history={history} />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          className="_primaryBtn_lu9i3_1
      
      
      CategoryListing_uploadPreBtn__FdX4h
      
      "
          title="Order NOW!"
        >
          Order NOW!
        </button> */}
      </div>
      <div className="containers">
        <LeftContainer />
        <RightContainer />
      </div>
    </>
  );
};

export default Container;
