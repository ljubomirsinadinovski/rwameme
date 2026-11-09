import './App.css';
import {ParticlesComponent} from "./components/ParticleComponents/Particles.jsx";
import {LandingPageCard} from "./components/LandingPageCard/LandingPageCard.jsx";
import {NavigationMenu} from "./components/NavigationMenu/NavigationMenu.jsx";
import styled from "styled-components";
import {BuyButton} from "./components/Buttons/BuyButton/BuyButton.jsx";
import {LinkToContractButton} from "./components/Buttons/LinkToContractButton/LinkToContractButton.jsx";
import moneyMeme from "./assets/money.webp"
import babyMeme from "./assets/baby.webp"
import logoLetters from "./assets/logoLetters.webp"
import {AboutSection} from "./components/Sections/AboutSection/AboutSection.jsx";
import {TokenomicsSection} from "./components/Sections/TokenomicsSection/TokenomicsSection.jsx";
import {RoadMapSection} from "./components/Sections/RoadMapSection/RoadMapSection.jsx";

const App = () => {
  return (
    <MainContainer>
      <ParticlesComponentStyled/>
      <ContentContainer>
        <NavigationContainer>
          <NavigationMenu/>
          <HeaderRight>
            <HeaderTitle>Built on the Base Chain</HeaderTitle>
            <HeaderLinks>
              <LinkToContractButton title={"Smart contract"}
                destination={"https://basescan.org/address/0x6e8b5cb8dcba2301e5c3112292db4c6637d9459f#code"}/>
              <LinkToContractButton title={"Liquidity pool"}
                destination={"https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x6E8B5Cb8DCba2301E5c3112292db4C6637d9459f&chain=base"}/>
            </HeaderLinks>
          </HeaderRight>
        </NavigationContainer>
        <BuyButton
          title={"Buy Token"}
          destination={"https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x6E8B5Cb8DCba2301E5c3112292db4C6637d9459f&chain=base"}/>
        <LandingPageCard/>
        <AboutSection
          name="aboutSection"
          title={"About this Token"}
          imageSrc={moneyMeme}
        />
        <TokenomicsSection
          name="tokenomicsSection"
          title={"Tokenomics"}
          imageSrc={babyMeme}
          inverse={true}
        />
        <RoadMapSection
          name="roadmapSection"
          title={"Roadmap"}
          description={"Journey around the world and tokenization"}
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

const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const HeaderTitle = styled.h2`
    background: white;
    color: #213547;
    height: fit-content;
    width: fit-content;
    border-radius: 10px;
    padding: 5px;
    margin: 0 0 10px 0;
`

const HeaderRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 20px;

    @media (max-width: 768px) {
        align-items: center;
    }
`

const HeaderLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 10px;

    a {
        font-size: 1rem;
        padding: 8px 14px;
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`
