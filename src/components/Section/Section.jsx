import {Card, Divider, Wrapper, TextContent, Image, CardTitle, CardDescription} from "./styledComponents.js";

export const Section = ({title, description, imageSrc, inverse}) => {
  return (
    <Wrapper>
      <Divider />
      <Card $inverse={inverse}>
        <TextContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContent>
        <Image src={imageSrc} alt="Image" />
      </Card>
    </Wrapper>
  );
}