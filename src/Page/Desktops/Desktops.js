import React, { useEffect, useState } from "react";
import "./Desktops.sass";
import Nav from "../../Components/Nav/Nav";
import Title from "../../Components/Title/Title";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <Link to={`/details/${curr.id}`}>
              <Card data={curr} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Desktops;
