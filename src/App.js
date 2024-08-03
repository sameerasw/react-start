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

function App() {
  return (
    <div className="App">
      <TimeCard/>
      <FavLinkArea/>
      <AddFav/>
      {/* <LinksListEditor/> */}
    </div>
  );
}

export default App;
