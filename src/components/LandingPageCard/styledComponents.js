import styled from 'styled-components';
import { keyframes } from 'styled-components';

const clippathBorder = keyframes`
    0%,
    100% {
        clip-path: inset(0 0 98% 0);
    }
    
    25% {
        clip-path: inset(0 98% 0 0);
    }
    50% {
        clip-path: inset(98% 0 0 0);
    }
    75% {
        clip-path: inset(0 0 0 98%);
    }
`;

const rollInBlurredLeft = keyframes`
    0% {
        -webkit-transform: translateX(-1000px) rotate(-720deg);
                transform: translateX(-1000px) rotate(-720deg);
        -webkit-filter: blur(50px);
                filter: blur(50px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0) rotate(0deg);
                transform: translateX(0) rotate(0deg);
        -webkit-filter: blur(0);
                filter: blur(0);
        opacity: 1;
    }
`;

const crazySpin = keyframes`
  0% {
    transform: scale(1) translateX(0) rotate(0);
    filter: hue-rotate(0deg) blur(0);
    opacity: 1;
    border-radius: 0;
    background-color: transparent;
  }
  25% {
    transform: scale(0.5) translateX(-50vw) rotate(360deg);
    filter: hue-rotate(90deg) blur(5px);
    opacity: 0.5;
    border-radius: 50%;
    background-color: red;
  }
  50% {
    transform: scale(1) translateY(50vh) rotate(-360deg);
    filter: hue-rotate(180deg) blur(10px);
    opacity: 1;
    border-radius: 0;
    background-color: green;
  }
  75% {
    transform: scale(3) translateX(50vw) rotate(720deg);
    filter: hue-rotate(270deg) blur(15px);
    opacity: 0.5;
    border-radius: 50%;
    background-color: yellow;
  }
  100% {
    transform: scale(1) translateY(0) rotate(1080deg);
    filter: hue-rotate(360deg) blur(0);
    opacity: 1;
    border-radius: 0;
    background-color: transparent;
  }
`;


const swingFromTop = keyframes`
    0% {
        -webkit-transform: rotateX(-100deg);
                transform: rotateX(-100deg);
        -webkit-transform-origin: top;
                transform-origin: top;
        opacity: 0;
    }
    100% {
        -webkit-transform: rotateX(0deg);
                transform: rotateX(0deg);
        -webkit-transform-origin: top;
                transform-origin: top;
        opacity: 1;
    }
`;

export const Container = styled.div`
  min-width: 250px;
  width: 40%;
  background-color: white;
  position: absolute;
  margin: auto;
  z-index: 20000;
  inset: 0;
  height: fit-content;
  border-radius: 10px;
  padding: 30px;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  -webkit-box-shadow: 0px 0px 120px 30px rgba(0, 206, 155, 1);
  -moz-box-shadow: 0px 0px 120px 30px rgba(0, 206, 155, 1);
  box-shadow: 0px 0px 120px 30px rgba(0, 206, 155, 1);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid #00ce9a;
    transition: all 0.5s;
    animation: ${clippathBorder} 3s infinite linear;
    border-radius: 16px;
  }

  &::after {
    animation: ${clippathBorder} 3s infinite -1.5s linear;
  }
`;

export const Logo = styled.img`
  width: 100%;
  user-select: none;
  animation: ${crazySpin} 5s ease-in;
`;

export const Email = styled.h1`
  color: black;
  font-family: 'lt-score', sans-serif;
  font-size: calc(1rem + 1.8vw);
  animation: ${swingFromTop} 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) 6s both;
  margin-top: 20px;
`;

export const Domain = styled.span`
  color: #00ce9a;
`;
