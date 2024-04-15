import './App.css';
import {ParticlesComponent} from "./components/ParticleComponents/Particles.jsx";
import {LandingPageCard} from "./components/LandingPageCard/LandingPageCard.jsx";

const App = () => {
  return (
    <>
      <LandingPageCard />
      <ParticlesComponent />
    </>
  );
};

export default App;
