import './App.css';
import AddFav from './components/AddFav';
import FavLinkArea from './components/FavLinkArea';
// import LinksListEditor from './components/LinksListEditor';
import TimeCard from './components/TimeCard';

// set the background image of the button to the image passed in as a prop
document.addEventListener('DOMContentLoaded', () => {
  const favButtons = document.querySelectorAll('.fav-button')
  favButtons.forEach(button => {
    button.style.backgroundImage = `url(${button.dataset.img})`
  })
})

//try to import the json data from localStorage first or use the default data and if not found, use empty data and continue
let data = JSON.parse(localStorage.getItem("links"));

let url = localStorage.getItem("favUrl");
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
    // console.error(e);

    //if the data is not found, display an error message on the page
    if (!data) {
      data = { links: [] };
      localStorage.setItem("links", JSON.stringify(data));
    }
  });

  

function App() {
  return (
    <div className="App">
      <TimeCard/>
      <FavLinkArea data={data}/>
      <AddFav data={data} className="bottom-bar"/>
      {/* <LinksListEditor/> */}
    </div>
  );
}

export default App;
