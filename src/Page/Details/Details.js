import React, { useEffect, useState } from "react";
import "./Details.sass";
import Nav from "../../Components/Nav/Nav";
import axios from "axios";

const Details = (props) => {
  const itemID = props.match.params.id;
  const [itemData, setItemData] = useState([]);
  const [pics, setPics] = useState([]);
  const [bgPic, setBgPic] = useState();

  useEffect(() => {
    getItemData();
    getPics();
    console.log("useEffect executed");
  }, []);

  const getItemData = () => {
    axios
      .get(`/api/products/${itemID}`)
      .then((res) => setItemData(res.data))
      .catch((err) => console.log(err));
  };
  const getPics = async () => {
    axios.get(`/api/products/pictures/${itemID}`).then((res) => {
      setPics(res.data);
    });
  };
  const addCart = async () => {

  }
  console.log("item info: ", itemData[0]);
  console.log("pics: ", pics[0]);
  return (
    <div className="Details">
      <Nav />
      <div className="Details-container container">
        {pics.map((curr) => (
          <div className="img-container">
            <div className="sm-img-container">
              <img className="sm-pic" src={curr.pic_1} alt="" />
              <img className="sm-pic" src={curr.pic_2} alt="" />
              <img className="sm-pic" src={curr.pic_3} alt="" />
              <img className="sm-pic" src={curr.pic_4} alt="" />
            </div>
            <img className="bg-pic" src={curr.pic_1} alt="" />
          </div>
        ))}
        <div>
          {itemData.map((curr) => (
            <div className="Details-info">
              <h1>{curr.pc_name}</h1>
              <p><span>Operating System:</span> {curr.os}</p>
              <p><span>CPU:</span> {curr.cpu}</p>
              <p><span>Graphic card:</span> {curr.graphic_card}</p>
              <p><span>Memory RAM:</span> {curr.ram}</p>
              <p><span>Motherboard:</span> {curr.motherboard}</p>
              <p><span>Storage:</span> {curr.storage}</p>
              <div className="Details-btn-container">
                <h3 className="price"><span>$</span>{curr.price}</h3>
                <button onClick={()=> addCart()}>Add Cart</button>
              </div>
            </div>
          ))}

         
        </div>
      </div>
    </div>
  );
};

export default Details;
