import { Component } from "react";
import "./App.css";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank";
import Particle from "./components/Particles/Particles";

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

  render() {
    return (
      <div className="App">
        <Particle />
        <Navigation />
        <Logo />
        <Rank />
        {/* <FaceRecognition />  */}
        <ImageLinkForm onInputChange={this.onInputChange} />
      </div>
    );
  }
}

export default App;
