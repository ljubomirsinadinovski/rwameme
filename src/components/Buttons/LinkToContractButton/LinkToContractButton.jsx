import {LinkButton} from "./styledComponents.js";

export const LinkToContractButton = ({title, destination}) => {
  return (
    <LinkButton
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </LinkButton>
  )
}