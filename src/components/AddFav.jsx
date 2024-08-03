import React from "react";

function deleteLocalStorage() {
  localStorage.removeItem("links");
  //   window.location.reload();
  let favUrl = localStorage.getItem("favUrl");
  fetch(favUrl)
    .then((response) => response.json())
    .then((dataNew) => {
      //if the new data is different from the old data, write and reload the page
      localStorage.setItem("links", JSON.stringify(dataNew));
      window.location.reload();
    });
}

function handleSubmit(e) {
  //read the form data
  const favUrl = document.getElementById("link-name").value;
  localStorage.setItem("favUrl", favUrl);
  deleteLocalStorage();
}

const AddFav = (data) => {
  let FavUrl = localStorage.getItem("favUrl");

  return (
    <div
      style={{
        height: "4em",
        width: "fit-content",
        // backgroundColor: "#111",
        borderRadius: "1em",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "1em auto",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        position: "fixed",
      }}

      className="bottom-bar"
    >
      <input
        type="text"
        id="link-name"
        name="link-name"
        required
        style={{ width: "25em", height: "2em", borderRadius: "1em", border: "none", padding: "0 1em", margin: "0 0.5em" }}
        border="none"
        placeholder="Enter your favorite URL"
        onChange={(e) => {
          FavUrl = e.target.value;
        }}
        value={FavUrl}
      ></input>
      <button
        type="submit"
        onClick={handleSubmit}
        style={{
          width: "10em",
          height: "2em",
          borderRadius: "1em",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
        }}
      >
        Update Link
      </button>
    </div>
  );
};

export default AddFav;
