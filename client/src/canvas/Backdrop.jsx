import React,{useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows,RandomizedLight } from '@react-three/drei';
// shadow of the shirt color will be the work of back drop
const Backdrop = () => {
  return (
    <AccumulativeShadows
        position={[0,0,-0.14]}
    >
      <RandomizedLight
       amount={4}
      />

    </AccumulativeShadows>
  )
}

export default Backdrop