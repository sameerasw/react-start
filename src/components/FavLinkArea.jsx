import React from "react";
import FavLink from "./FavLink";

//import data from the links.json file
// import data from '../links.json'

//try to import the json data from localStorage first or use the default data and if not found, use empty data and continue
let data = JSON.parse(localStorage.getItem("links"));

let url =
  "https://raw.githubusercontent.com/sameerasw/react-start/main/src/links.json";
fetch(url)
  .then((response) => response.json())
  .then((dataNew) => {

    //if the new data is different from the old data, write and reload the page
    if (JSON.stringify(dataNew) !== JSON.stringify(data)) {
      localStorage.setItem("links", JSON.stringify(dataNew));
      window.location.reload();
    }
  })
  .catch((e) => {
    console.error(e);
  });

  
  

const FavLinkArea = () => {
  try {
    let data = JSON.parse(localStorage.getItem("links"));
    console.log(data);
    if (!data) {
      console.log("data not found");
      data = require("../links.json");
      console.log(data);
    }

    return (
      <section className="fav-links-area">
        {data.links.map((link, index) => {
          return <FavLink key={index} url={link.url} img={link.logo} />;
        })}
      </section>
    );
  } catch (e) {
    localStorage.removeItem("links");
    console.error(e);
    return (
      <section className="fav-links-area">
        <p>There was an error loading the links</p>
      </section>
    );
  }
};

export default FavLinkArea;
