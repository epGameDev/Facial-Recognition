import { Component } from "react";
import Clarifai from "clarifai";
import Particle from "./components/Particles/Particles";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank";
import "./index.css";
import "./App.css";

const app = new Clarifai.App({
  apiKey: 
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    app.models.predict(, "https://samples.clarifai.com/face-det.jpg")
      .then( 
        function (response) {
          console.log(response);
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
        {/* <FaceRecognition />  */}
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      </div>
    );
  }
}

export default App;
