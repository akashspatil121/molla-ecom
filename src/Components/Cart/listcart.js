import React from "react";
import "./cartpage.css";
import Divider from "@material-ui/core/Divider";
import { Qtyctrl } from "./Qty";

export default function Listcart() {
  return (
    <div className="four_coulmn_grid">
      <div className="show_hide_heading">
        <span>Products</span>
      </div>

      <div className="show_hide_heading">
        <span>Price</span>
      </div>

      <div className="show_hide_heading">
        <span>Quantity</span>
      </div>

      <div className="show_hide_heading">
        <span>Total</span>
      </div>

      <Divider />
      <Divider />
      <Divider />
      <Divider />

      <div className="two_column_grid">
        <figure>
          <img src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/14_5401_5408/pdp/notebooks-inspiron-14-5401-5408-laptop-pdp-design-gallery504x350_silver.jpg?fmt=jpg&wid=570&hei=400" />
        </figure>
        <figcaption className="Product_name_flex">
          <span className="show_hide"> Products </span>
          <span>Dell Laptop i5 processer</span>
        </figcaption>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="show_hide"> Price </span>
        <span>25000Rs</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="show_hide"> Quantity </span>
        <Qtyctrl />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="show_hide"> Total </span>
        <span>25000Rs</span>
      </div>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <div className="two_column_grid">
        <figure>
          <img
            src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/14_5401_5408/pdp/notebooks-inspiron-14-5401-5408-laptop-pdp-design-gallery504x350_silver.jpg?fmt=jpg&wid=570&hei=400"
            width="90px"
            height="auto"
          />
        </figure>

        <figcaption className=" Product_name_flex">
          <div className="show_hide">
            <span>Products</span>
          </div>
          <span>Dell Laptop i5 processer</span>
        </figcaption>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="show_hide"> Price </span>
        <span>25000Rs</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="show_hide"> Quantity </span>
        <Qtyctrl />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="show_hide"> Total </span>
        <span>25000Rs</span>
      </div>
    </div>
  );
}
