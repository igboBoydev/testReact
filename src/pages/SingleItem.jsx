import React, { useEffect, useState } from "react";
import TopNavBar from "../navs/guest/TopNavBar";
import axiosPrivate from "../api/axiosPrivate";
import { decodeJwt } from "../utils/helpers";
import Button from "@mui/material/Button";
import { DELETE_ITEM } from "../api/constant";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../store/context";
import FooterNavLinks from "../navs/guest/FooterNavLinks";
import Stack from "@mui/material/Stack";

const Items = () => {
  const { items, getMessage, getItem } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname | "/items";

  let v = decodeJwt();

  if (v) {
    navigate("/");
  }

  const handleDelete = (e) => {
    axiosPrivate
      .delete(DELETE_ITEM + "/" + e.order_id)
      .then((res) => {
        getMessage(res.data.message);
        navigate("/items", { state: { from: from }, replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNavigate = (e) => {
    getItem(e);
    navigate("/edit-item", { state: { from: from }, replace: true });
  };

  return (
    <section>
      <TopNavBar />
      <Link to="/items" className="back">
        back
      </Link>
      <section className="display">
        <div className="items">
          <h1 className="items-h1">
            Frieght Value:{" "}
            <span className="span-adjust">{items.freight_value}</span>
          </h1>
          <h1 className="items-h1">
            Order ID: <span className="span-adjust">{items.order_id}</span>
          </h1>
          <h1 className="items-h1">
            Order Item ID:{" "}
            <span className="span-adjust">{items.order_item_id}</span>
          </h1>
          <h1 className="items-h1">
            Shipping Limit Data:{" "}
            <span className="span-adjust">{items.shipping_limit_date}</span>
          </h1>
          <h1 className="items-h1">
            Price: <span className="span-adjust">{items.price}</span>
          </h1>
          <h1 className="items-h1">
            Seller ID: <span className="span-adjust">{items.seller_id}</span>
          </h1>
          <h1 className="items-h1">
            Product ID: <span className="span-adjust">{items.product_id}</span>
          </h1>
        </div>
        <div className="button">
          <div className="swift_button">
            <Stack spacing={4}>
              <Button variant="contained" onClick={() => handleNavigate(items)}>
                Edit
              </Button>
            </Stack>
          </div>
          <div className="swift_button">
            <Stack spacing={4}>
              <Button variant="contained" onClick={() => handleDelete(items)}>
                Delete
              </Button>
            </Stack>
          </div>
        </div>
      </section>
      <FooterNavLinks />
    </section>
  );
};

export default Items;
