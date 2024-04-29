import {Card, Divider, Wrapper, TextContent, Image, CardTitle, CardDescription} from "./styledComponents.js";
import {Element} from 'react-scroll';

export const AboutSection = ({name, title, imageSrc, inverse}) => {
  return (

    <Wrapper>
      <Element name={name}>
        <Divider/>
      </Element>
      <Card $inverse={inverse}>
        <TextContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Welcome to the First RWA meme, where we celebrate the intersection of Real-World Assets (RWAs) and humor.</CardDescription>
          <CardDescription>Our MEMES capture the essence of everyday scenarios, from work and relationships to technology and culture, with a witty twist.</CardDescription>
        </TextContent>
        <Image src={imageSrc} alt="Image"/>
      </Card>
    </Wrapper>

  );
}