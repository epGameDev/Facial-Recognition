import './App.css';
import './index.css';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank";
import Particle from './components/Particles/Particles';

function App() {

  return (
    <div className="App">
      <Particle />
      <Navigation />
      <Logo />
      <Rank />
      {/* <FaceRecognition />  */}
      <ImageLinkForm />
      </div>
  );
}

export default App;
