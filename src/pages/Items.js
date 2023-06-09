import React, { useEffect, useState } from "react";
import TopNavBar from "../navs/guest/TopNavBar";
import axiosPrivate from "../api/axiosPrivate";
import { decodeJwt } from "../utils/helpers";
import Alert from "@mui/material/Alert";
import { useGlobalContext } from "../store/context";
import Stack from "@mui/material/Stack";
import { ALL_ITEMS } from "../api/constant";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FooterNavLinks from "../navs/guest/FooterNavLinks";

const Items = () => {
  const { getItem, message, getMessage } = useGlobalContext();
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState({ offset: 1, limit: 20, total: 0 });
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname | "/items";

  async function fetchData() {
    // You can await here
    axiosPrivate
      .get(ALL_ITEMS + "/?offset=1&limit=20")
      .then((res) => {
        setOffset({
          ...offset,
          offset: res.data.data.offset,
          limit: res.data.data.limit,
          total: res.data.data.total,
        });
        setData(res.data.data.allUserItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const hendleMessage = () => {
    getMessage("");
  };

  const handleClick = (item) => {
    getItem(item);
    navigate("/single-item", { state: { from: from }, replace: true });
  };

  return (
    <section>
      <TopNavBar />
      <div className="mt-2">
        {message && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error" onClose={hendleMessage}>
              {message}
            </Alert>
          </Stack>
        )}
      </div>
      <section className="displays">
        {data.length > 0 ? (
          data.map((item, id) => {
            const {
              freight_value,
              order_id,
              order_item_id,
              shipping_limit_date,
              _id,
              price,
              seller_id,
              product_id,
            } = item;
            return (
              <div key={id} className="items" onClick={() => handleClick(item)}>
                <h1 className="items-h1">
                  Frieght Value:{" "}
                  <span className="span-adjust">{freight_value}</span>
                </h1>
                <h1 className="items-h1">
                  Order ID: <span className="span-adjust">{order_id}</span>
                </h1>
                <h1 className="items-h1">
                  Order Item ID:{" "}
                  <span className="span-adjust">{order_item_id}</span>
                </h1>
                <h1 className="items-h1">
                  Shipping Limit Data:{" "}
                  <span className="span-adjust">{shipping_limit_date}</span>
                </h1>
                <h1 className="items-h1">
                  Price: <span className="span-adjust">{price}</span>
                </h1>
                <h1 className="items-h1">
                  Seller ID: <span className="span-adjust">{seller_id}</span>
                </h1>
                <h1 className="items-h1">
                  Product ID: <span className="span-adjust">{product_id}</span>
                </h1>
              </div>
            );
          })
        ) : (
          <section>
            <div>
              <h1 className="no-item">No Items available for Logged In User</h1>
            </div>
          </section>
        )}
      </section>

      <FooterNavLinks />
    </section>
  );
};

export default Items;
