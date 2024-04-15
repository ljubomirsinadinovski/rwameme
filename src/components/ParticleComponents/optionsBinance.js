export const options = {
  fpsLimit: 120,
  background: {
    color: "#000"
  },
  particles: {
    color: { value: "#ffffff" },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, area: 800 }, value: 100 },
    opacity: {
      value: 0.9
    },
    shape: {
      type: "image",
      image: {
        src:
          "https://www.pngall.com/wp-content/uploads/10/Binance-Coin-Crypto-Logo-PNG-Background.png"
      }
    },
    size: {
      value: { min: 10, max: 25 }
    }
  }
}