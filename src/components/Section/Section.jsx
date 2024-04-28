import {Card, Divider, Wrapper, TextContent, Image, CardTitle, CardDescription} from "./styledComponents.js";
import {Element} from 'react-scroll';

export const Section = ({name, title, description, imageSrc, inverse}) => {
  return (

    <Wrapper>
      <Element name={name}>
        <Divider/>
      </Element>
      <Card $inverse={inverse}>
        <TextContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContent>
        <Image src={imageSrc} alt="Image"/>
      </Card>
    </Wrapper>

  );
}