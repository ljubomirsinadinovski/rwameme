import './App.css';
import {ParticlesComponent} from "./components/ParticleComponents/Particles.jsx";
import {LandingPageCard} from "./components/LandingPageCard/LandingPageCard.jsx";
import {NavigationMenu} from "./components/NavigationMenu/NavigationMenu.jsx";
import styled from "styled-components";
import {BuyButton} from "./components/BuyButton/BuyButton.jsx";
import {Section} from "./components/Section/Section.jsx";
import moneyMeme from "./assets/money.png"
import babyMeme from "./assets/baby.webp"
import logoLetters from "./assets/logoLetters.png"

const App = () => {
  return (
    <MainContainer>
      <ParticlesComponentStyled/>
      <ContentContainer>
        <NavigationMenu/>
        <BuyButton/>
        <LandingPageCard/>
        <Section
          title={"About this Token"}
          description={"Another MEME resembling the Real World Assets."}
          imageSrc={moneyMeme}
        />
        <Section
          title={"Tokenomics"}
          description={"Contract Ownership is RENOUNCED, supply is 100,000,000,000"}
          imageSrc={babyMeme}
          inverse={true}
        />
        <Section
          title={"Roadmap"}
          description={"We build the road on the map with RWAM"}
          imageSrc={logoLetters}
        />
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
    overflow: auto;
    flex-grow: 1;
`;