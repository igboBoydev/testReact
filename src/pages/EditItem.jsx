import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "../api/axios";
import Alert from "@mui/material/Alert";
import { decodeJwt } from "../utils/helpers";
import { LOGIN_URL } from "../api/constant";
import TopNavBar from "../navs/guest/TopNavBar";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useGlobalContext } from "../store/context";

const EditItem = () => {
  const { items } = useGlobalContext();
  const [data, setData] = useState({
    freight_value: items.freight_value,
    order_id: items.order_id,
    order_item_id: items.order_item_id,
    shipping_limit_date: items.shipping_limit_date,
    price: items.price,
    seller_id: items.seller_id,
    product_id: items.product_id,
  });
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setMessage(
      "Based off of the react documentation the newly updated data would not be saved to the backend database. Thanks."
    );
  };
  return (
    <section>
      <TopNavBar />
      <Link to="/single-item" className="back">
        back
      </Link>
      <section className="position">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-password-input"
              label="FrieghtValue"
              defaultValue={data.freight_value}
              type="text"
              onChange={(e) => {
                setData({ ...data, freight_value: e.target.value });
              }}
              autoComplete="current-password"
              helperText="Kindly Enter A Valid User Id"
            />
            <TextField
              id="outlined-password-input"
              label="Seller_ID"
              defaultValue={data.order_id}
              type="text"
              onChange={(e) => {
                setData({ ...data, order_id: e.target.value });
              }}
              autoComplete="current-password"
              helperText="Kindly Enter A Valid User Id"
            />
            <TextField
              id="outlined-password-input"
              label="OrdeItemId"
              defaultValue={data.order_item_id}
              type="text"
              onChange={(e) => {
                setData({ ...data, order_item_id: e.target.value });
              }}
              autoComplete="current-password"
              helperText="Kindly Enter Your Password"
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="ShippingLimitDate"
              defaultValue={data.shipping_limit_date}
              type="text"
              onChange={(e) => {
                setData({ ...data, shipping_limit_date: e.target.value });
              }}
              autoComplete="current-password"
              helperText="Kindly Enter Your Password"
            />
            <TextField
              id="outlined-password-input"
              label="Price"
              defaultValue={data.price}
              type="number"
              onChange={(e) => {
                setData({ ...data, price: e.target.value });
              }}
              autoComplete="current-password"
              helperText="Kindly Enter Your Password"
            />
            <TextField
              id="outlined-password-input"
              label="sellerID"
              defaultValue={data.seller_id}
              type="text"
              onChange={(e) => {
                setData({ ...data, seller_id: e.target.value });
              }}
              autoComplete="current-password"
              helperText="Kindly Enter Your Password"
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="ProductID"
              defaultValue={data.product_id}
              type="text"
              onChange={(e) => {
                setData({ ...data, product_id: e.target.value });
              }}
              autoComplete="current-password"
              helperText="Kindly Enter Your Password"
            />
          </div>
          <div className="swift_button">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={(e) => handleSubmit(e)}>
                Save
              </Button>
            </Stack>
          </div>

          <div className="mt-2">
            {message && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert
                  severity="error"
                  onClose={() => {
                    setMessage("");
                  }}
                >
                  {message}
                </Alert>
              </Stack>
            )}
          </div>
        </Box>
      </section>
    </section>
  );
};

export default EditItem;
