import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import Shirt from '../canvas/Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas                 // in cavas we can change the angle of camera to make the object look bigger 
      shadows
      camera={{position: [0,0,0], fov: 25}}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city"/>
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel