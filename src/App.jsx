import './App.css';
import {
  Container,
  Domain,
  Email,
  Logo,
} from './styledComponents';
import rwamManWithLogo from './assets/rwameme-man-with-logo.svg'
import {ParticlesComponent} from "./components/ParticleComponents/Particles.jsx";

const App = () => {
  return (
    <>
      <Container>
        <Logo src={rwamManWithLogo} alt='RWAM MAN Logo'/>
        <Email>
          info<Domain>@rwam.xyz</Domain>
        </Email>
      </Container>

      <ParticlesComponent />
    </>
  );
};

export default App;
