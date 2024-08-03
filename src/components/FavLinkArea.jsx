import React from "react";
import FavLink from "./FavLink";

//import data from the links.json file
// import data from '../links.json'


  

const FavLinkArea = ({data}) => {
  try {
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
