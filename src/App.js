import React, {useState, useRef} from 'react'
import './style.css'
import { Canvas, useFrame } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'

function App() {

    const Box = () => {
        const meshRef = useRef()
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
        const props = useSpring({
            scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
            color: (hovered || active) ? 'hotpink' : 'orange',
        })

        useFrame(() => {
            meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
        })

        return(
            <a.mesh
                ref = {meshRef}
                onPointerOver = {() => setHover(true)}
                onPointerOut = {() => setHover(false)}
                onClick = { () => setActive(!active)}
                scale = {props.scale}
            >
                <boxBufferGeometry
                    attach='geometry'
                    args = {[1,1,1]}
                />
                <a.meshStandardMaterial
                    attach = 'material'
                    color = {props.color}
                />
            </a.mesh>
        )
    }

    return (
        <div className="App">
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
    }

export default App;
