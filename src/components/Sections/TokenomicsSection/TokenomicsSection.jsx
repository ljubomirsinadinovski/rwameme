import {Card, Divider, Wrapper, TextContent, Image, CardTitle, CardDescription} from "./styledComponents.js";
import {Element} from 'react-scroll';
import {LinkToContractButton} from "../../Buttons/LinkToContractButton/LinkToContractButton.jsx";

export const TokenomicsSection = ({name, title, imageSrc, inverse}) => {
  return (

    <Wrapper>
      <Element name={name}>
        <Divider/>
      </Element>
      <Card $inverse={inverse}>
        <TextContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>- Contract Ownership is RENOUNCED</CardDescription>
          <CardDescription>- Supply is 100,000,000,000</CardDescription>
          <LinkToContractButton title={"Link to contract"}
                     destination={"https://basescan.org/token/0x6e8b5cb8dcba2301e5c3112292db4c6637d9459f"}/>
        </TextContent>
        <Image src={imageSrc} alt="Image"/>
      </Card>
    </Wrapper>

  );
}