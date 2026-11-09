import {Card, Divider, Wrapper, TextContent, Image, CardTitle, CardDescription, ContractAddress} from "./styledComponents.js";
import {Element} from 'react-scroll';

export const TokenomicsSection = ({name, title, imageSrc, inverse}) => {
  return (

    <Wrapper>
      <Element name={name}>
        <Divider/>
      </Element>
      <Card $inverse={inverse}>
        <TextContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>- No Airdrop, no pre-sale</CardDescription>
          <CardDescription>- Marketing 20%</CardDescription>
          <CardDescription>- Team 0%</CardDescription>
          <CardDescription>- Max supply is 100,000,000,000</CardDescription>
          <CardDescription>(and never will be changed)</CardDescription>
          <ContractAddress>Contract: 0x6E8B5Cb8DCba2301E5c3112292db4C6637d9459f</ContractAddress>
        </TextContent>
        <Image src={imageSrc} alt="Image"/>
      </Card>
    </Wrapper>

  );
}