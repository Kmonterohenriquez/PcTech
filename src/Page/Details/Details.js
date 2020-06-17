import React, { useEffect, useState } from "react";
import "./Details.sass";
import Nav from "../../Components/Nav/Nav";
import Axios from "axios";

const Details = (props) => {
  const itemID = props.match.params.id;
  const [itemData, setItemData] = useState();

  useEffect(() => {
    getItemData();
    console.log("useEffect executed");
  }, []);

  const getItemData = () => {
    Axios.get(`/api/products/${itemID}`)
      .then((res) => setItemData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="Details">
      <Nav />
    </div>
  );
};

export default Details;
