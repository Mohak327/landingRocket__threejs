
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import './style.css'

extend({OrbitControls})
    function Controls() {
        const {
            camera,
            gl: { domElement },
        } = useThree()
        const orbitRef = useRef()
        useFrame((state) => orbitRef.current.update())
        return (
            <orbitControls autoRotate
                maxPolarAngle = {Math.PI/3}
                maxPolarAngle = {Math.PI/3}
                ref={orbitRef}
                args={[camera, domElement]}
            />
        )
    }

function Plane() {
        <mesh rotate = {[Math.PI/ 2, 0, 0]}>
            <planeBufferGeometry
                    attach='geometry'
                    args = {[100,100]}
            />
            <meshPhysicalMaterial
                attach = 'material'
                color = 'white'
            />
        </mesh>
    }

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead

  return (
    <mesh
      {...props}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={(hovered || active) ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
        <Controls />
        <Box position={[0, 0, 0]} />
        <Plane />
    </Canvas>
  )
}

