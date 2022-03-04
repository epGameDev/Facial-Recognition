import { Component } from "react";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.js"
import Particle from "./components/Particles/Particles";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn.js";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank";
import "./index.css";
import "./App.css";

const APIkey = "ba81953bb71f42a2ba16685ba72965f9";



const app = new Clarifai.App({
  apiKey: APIkey,
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {},
      route: "signin",
      isSignedIn: false,
    };
  }

  calculateFacePosition = (data) => {
    const facePosition = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("input-image");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCollumn: facePosition.left_col * width,
      topRow: facePosition.top_row * height,
      rightCollumn: width - (facePosition.right_col * width),
      bottomRow: height - (facePosition.bottom_row * height),
    }
  }

  displayFacePosition = (box) => {
    console.log(box);
    this.setState({box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});

  };

   // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
  onButtonSubmit = () => {
    const inputField = document.querySelector(".image-input");
    this.setState({imageURL: this.state.input});

    app.models.predict( Clarifai.FACE_DETECT_MODEL , this.state.input)
      .then( response => this.displayFacePosition(this.calculateFacePosition(response)))
      .then(inputField.value = "")
      .catch(err => console.log(err));
  }

  onRouteChange = (path) => {
    if (this.route === "signout") {
      this.setState({isSignedIn: false})
    } else if (this.route === "home") {
      this.setState({isSignedIn: true})
    }
    this.setState({route: path})
  }

  render() {
    const {/*isSignedIn,*/ imageURL, route, box} = this.state;

    return (
      <div className="App">
        <Particle />
        { route === "signin" ? <SignIn onRouteChange={this.onRouteChange}/> : 
          <div>
          <Navigation onRouteChange={this.onRouteChange}/>
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition imageURL={imageURL} box={box}/> 
          </div>
        }
      </div>
    );
  }
}

export default App;
