import {Container, Domain, Email, Logo} from "./styledComponents.js";
import rwamManWithLogo from "../../assets/rwameme-man-with-logo.png";

export const LandingPageCard = () => {
  return (
    <Container>
      <Logo src={rwamManWithLogo} alt='RWAM MAN Logo'/>
      <Email>
        info<Domain>@rwam.xyz</Domain>
      </Email>
    </Container>)
}