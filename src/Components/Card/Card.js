import React, { useEffect, useState } from "react";
import "./Card.sass";
import axios from "axios";
import camera from "../../img/camera-icon.png";
const Card = (props) => {
  let {
    product_id,
    pc_name,
    os,
    cpu,
    graphic,
    ram,
    motherboard,
    storage,
    price,
  } = props.data;
  const [pic, setPic] = useState(camera);

  useEffect(() => {
    getPics();
    console.log("useEffect updated");
  }, []);

  const getPics = async () => {
    axios.get(`/api/products/pictures/${product_id}`).then((res) => {
      setPic(res.data[0].pic_1);
    });
  };
  return (
    <div className="Card">
      <div className="img-container">
        <img src={pic} alt={pc_name} className={pic === camera ? "camera-icon" : ""} />
      </div>
      <div className="info">
        <p className="title"> {pc_name}</p>
        <p className="os">{os}</p>
        <p className="text">{cpu}</p>
        <p className="text">{graphic}</p>
        <p className="text">{ram}</p>
        <p className="text">{motherboard}</p>
        <p className="text">{storage}</p>
      </div>
      <div className="bottom-container">
        <p className="price">$ {price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
