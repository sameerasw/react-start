import React from "react";

function deleteLocalStorage() {
  localStorage.removeItem("links");
//   window.location.reload();
  let url =
    "https://raw.githubusercontent.com/sameerasw/react-start/main/src/links.json";
  fetch(url)
    .then((response) => response.json())
    .then((dataNew) => {
      //if the new data is different from the old data, write and reload the page
      localStorage.setItem("links", JSON.stringify(dataNew));
      window.location.reload();
    });
}

const AddFav = () => {
  return (
    <div
      style={{
        height: "4em",
        width: "4em",
        backgroundColor: "#111",
        borderRadius: "1em",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
      onClick={deleteLocalStorage}
    >🔁</div>
  );
};

export default AddFav;
