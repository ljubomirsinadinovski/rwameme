import './App.css';
import {ParticlesComponent} from "./components/ParticleComponents/Particles.jsx";
import {LandingPageCard} from "./components/LandingPageCard/LandingPageCard.jsx";
import {NavigationMenu} from "./components/NavigationMenu/NavigationMenu.jsx";
import styled from "styled-components";

const App = () => {
  return (
    <MainContainer>
      <ParticlesComponentStyled/>
      <ContentContainer>
        <NavigationMenu/>
        <LandingPageCard/>
      </ContentContainer>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
`;

const ParticlesComponentStyled = styled(ParticlesComponent)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const ContentContainer = styled.div`
    width: 100%;
    position: relative;
    z-index: 2; // Ensures that the content is above the particles background
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background: transparent;
`;