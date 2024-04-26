import {LinkButton} from "./styledComponents.js";

export const BuyButton = () => {
  return (
    <LinkButton
      href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x6E8B5Cb8DCba2301E5c3112292db4C6637d9459f&chain=base"
      target="_blank"
      rel="noopener noreferrer"
    >
      Buy Token
    </LinkButton>
  )
}