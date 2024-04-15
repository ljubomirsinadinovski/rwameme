import React from "react";
import Particles from "react-tsparticles";
import { loadColorUpdater } from "tsparticles-updater-color";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadBaseMover } from "tsparticles-move-base";
import { loadSizeUpdater } from "tsparticles-updater-size";
import { loadOpacityUpdater } from "tsparticles-updater-opacity";
import { loadOutModesUpdater } from "tsparticles-updater-out-modes";
import { loadImageShape } from "tsparticles-shape-image";
// import {options} from "./optionsDefault.js";
// import {options} from "./optionsDarkLj.js";
import {options} from "./optionsImage.js";
// import {options} from "./optionsBinance.js";

export const ParticlesComponent = () => {async function particlesInit(engine) {
  await loadColorUpdater(engine);
  await loadCircleShape(engine);
  await loadBaseMover(engine);
  await loadSizeUpdater(engine);
  await loadOpacityUpdater(engine);
  await loadOutModesUpdater(engine);
  await loadImageShape(engine);
}

  return (
    <Particles
      init={particlesInit}
      options={options}
    />
  );
}
