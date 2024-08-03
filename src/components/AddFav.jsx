import React, { useState, useEffect } from "react";

function deleteLocalStorage() {
  localStorage.removeItem("links");
  let favUrl = localStorage.getItem("favUrl");
  fetch(favUrl)
    .then((response) => response.json())
    .then((dataNew) => {
      localStorage.setItem("links", JSON.stringify(dataNew));
      window.location.reload();
    });
}

function handleSubmit(e) {
  e.preventDefault();
  const favUrl = document.getElementById("link-name").value;
  localStorage.setItem("favUrl", favUrl);
  deleteLocalStorage();
}

const AddFav = () => {
  const [favUrl, setFavUrl] = useState("");

  useEffect(() => {
    const storedFavUrl = localStorage.getItem("favUrl");
    if (storedFavUrl) {
      setFavUrl(storedFavUrl);
    }
  }, []);

  return (
    <div
      style={{
        height: "4em",
        width: "fit-content",
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="link-name"
          name="link-name"
          required
          style={{
            width: "25em",
            height: "2em",
            borderRadius: "1em",
            border: "none",
            padding: "0 1em",
            margin: "0 0.5em",
          }}
          placeholder="Enter your favorite URL"
          onChange={(e) => setFavUrl(e.target.value)}
          value={favUrl}
        />
        <button
          type="submit"
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
      </form>
    </div>
  );
};

export default AddFav;