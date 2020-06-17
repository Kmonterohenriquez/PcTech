import React, { useEffect, useState } from "react";
import "./Desktops.sass";
import Nav from "../../Components/Nav/Nav";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

const Desktops = () => {
  const [allDesktops, setAllDesktops] = useState([]);

  useEffect(() => {
    getDesktops();
    console.log("useEffect updated");
  }, [allDesktops]);

  const getDesktops = async () => {
    axios.get("/api/products/desktops/").then((res) => {
      setAllDesktops(res.data);
    });
  };
  return (
    <div className="Desktops">
      <Nav />
      <div className="Desktops-container container">
        <Title title="Desktops" />

        <div className="grid-container">
          {allDesktops.map((curr) => (
            <Card data={curr} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Desktops;
