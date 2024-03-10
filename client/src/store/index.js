import { proxy } from "valtio"; 

const state =proxy ({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  LogoDecal: './threejs.png',
  FullDecal: './threejs.png'
});

export default state;