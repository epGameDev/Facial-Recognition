import { Component } from "react";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.js"
import Particle from "./components/Particles/Particles";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank";
import "./index.css";
import "./App.css";

const APIkey = "";
// const testURL = "https://images.foxtv.com/static.foxla.com/www.foxla.com/content/uploads/2019/09/932/524/the-world-is-not-enough.jpg?ve=1&tl=1";


const app = new Clarifai.App({
  apiKey: APIkey,
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
    };
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict( Clarifai.FACE_DETECT_MODEL , this.state.input)
      .then( 
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function (err) {
          //error
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Particle />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageURL={this.state.imageURL}/> 
      </div>
    );
  }
}

export default App;
