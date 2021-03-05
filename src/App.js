import React, { useState, useRef } from 'react'
import * as THREE from 'three'
import './style.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'

function App() {

    extend({OrbitControls})

    const Controls = () => {
        const {
            camera,
            gl: { domElement },
        } = useThree()
        const orbitRef = useRef()
        useFrame((state) => orbitRef.current.update())
        return (
            <orbitControls autoRotate
                maxPolarAngle = {Math.PI/ 3}
                maxPolarAngle = {Math.PI/ 3}
                ref={orbitRef}
                args={[camera, domElement]}
            />
        )
    }

    const Plane = () => {
        <mesh rotation = {[Math.PI/ 2, 0, 0]} position = {[0, -0.5, 0]} recieveShadow>
            <planeBufferGeometry
                    attach='geometry'
                    args = {[100,100]}
            />
            <meshPhysicalMaterial
                attach = 'material'
                color = 'red'
            />
        </mesh>
    }

    const Box = () => {
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
        const props = useSpring({
            scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
            color: (hovered || active) ? 'hotpink' : 'gray',
        })

        return(
            <a.mesh
                onPointerOver = {() => setHover(true)}
                onPointerOut = {() => setHover(false)}
                onClick = { () => setActive(!active)}
                scale = {props.scale}
                castShadow
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow/>
                <pointLight position={[-10, -10, -10]} />
                <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
                <a.meshPhysicalMaterial attach='material' color={props.color} />
            </a.mesh>
        )
    }

    return (
        <div className="App">
            <Canvas camera={{position: [0, 0, 5]}} onCreated={({ gl}) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap
            }}>
                <fog attach='fog' args={['white', 5, 15]} />
                <Box position={[0, 0, 0]} />
                <Controls />
                <Plane />
            </Canvas>
        </div>
    );
    }

export default App;

