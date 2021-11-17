import logo from './logo.svg';
import './App.css';
import image from "./hhhhh.png"


function App() {
  return (
    <div className="App">
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
    <h1 className={{title:"red"}}> WAEL ALAYA </h1>
    <br/>
    <img  width="320" height="240" src={image} alt ='myphoto' />
      <br />
      <img src="https://cdn.vox-cdn.com/thumbor/00awoM5IS2kFITs9546UyMSePBY=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/69715362/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png" alt ='myphoto2' />
      <div > <video width="320" height="240" controls> <source src="https://youtu.be/TfHLTVuJ92A" type="video/mp4" /></video>
          </div>
    </div>
    </div>
  );
}

export default App;
