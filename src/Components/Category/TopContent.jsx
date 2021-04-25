import React from "react";
import "./TopContent.css";

const TopContent = () => {
  return (
    <>
      <div className="topcontent">
        <img
          src="https://wallpaperaccess.com/full/1424947.jpg"
          alt="mypic"
          width="100%"
          height="250px"
        />  
        <div className="topcontent_nav">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>Grid 3 Columns</li>
          </ul>
        </div>
        <hr className="topcontent_line"/>
        
          <div className="topcontent_subheading">
            <div className="filter_container">
              <h6 className="filters_heading">Filters:</h6>
              <a className="topcontent_clean" href="">Clean All</a>
              <span>Showing 9 of 56 Products</span>
            </div>

            <div className="short_by_container">
            <label className="sort_by" for="select"> Sort by: </label>
            <select id="select">
              <option value="a">Most Popular</option>
              <option value="b">Most Rated</option>
              <option value="c">Date</option>
            </select>

            
            </div>

          </div>
        </div>
    </>
  );
};
export default TopContent;
