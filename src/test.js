// import React, { useState, useRef } from 'react'
// import * as THREE from 'three'
// import './style.css'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { Canvas, extend, useThree, useFrame } from 'react-three-fiber'
// import { useSpring, a } from 'react-spring/three'

// function App() {

//     extend({OrbitControls})

//     const Controls = () => {
//         const {
//             camera,
//             gl: { domElement },
//         } = useThree()
//         const orbitRef = useRef()
//         useFrame((state) => orbitRef.current.update())
//         return (
//             <orbitControls autoRotate
//                 maxPolarAngle = {Math.PI/ 3}
//                 maxPolarAngle = {Math.PI/ 3}
//                 ref={orbitRef}
//                 args={[camera, domElement]}
//             />
//         )
//     }

//     const Plane = () => {
//         <mesh rotation = {[Math.PI/ 2, 0, 0]} position = {[0, -0.5, 0]} recieveShadow>
//             <planeBufferGeometry
//                     attach='geometry'
//                     args = {[100,100]}
//             />
//             <meshPhysicalMaterial
//                 attach = 'material'
//                 color = 'red'
//             />
//         </mesh>
//     }

//     const Box = () => {
//         const [hovered, setHover] = useState(false)
//         const [active, setActive] = useState(false)
//         const props = useSpring({
//             scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//             color: (hovered || active) ? 'hotpink' : 'gray',
//         })

//         return(
//             <a.mesh
//                 onPointerOver = {() => setHover(true)}
//                 onPointerOut = {() => setHover(false)}
//                 onClick = { () => setActive(!active)}
//                 scale = {props.scale}
//                 castShadow
//             >
//                 <ambientLight intensity={0.5} />
//                 <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow/>
//                 <pointLight position={[-10, -10, -10]} />
//                 <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
//                 <a.meshPhysicalMaterial attach='material' color={props.color} />
//             </a.mesh>
//         )
//     }

//     return (
//         <div className="App">
//             <Canvas camera={{position: [0, 0, 5]}} onCreated={({ gl}) => {
//                 gl.shadowMap.enabled = true
//                 gl.shadowMap.type = THREE.PCFSoftShadowMap
//             }}>
//                 <fog attach='fog' args={['white', 5, 15]} />
//                 <Box position={[0, 0, 0]} />
//                 <Controls />
//                 <Plane />
//             </Canvas>
//         </div>
//     );
//     }

// export default App;


// ___________________________________________________________
// ___________________________________________________________
// ___________________________________________________________


// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame, extend, useThree } from 'react-three-fiber'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// // import './style.css'

// extend({OrbitControls})
//     function Controls() {
//         const {
//             camera,
//             gl: { domElement },
//         } = useThree()
//         const orbitRef = useRef()
//         useFrame((state) => orbitRef.current.update())
//         return (
//             <orbitControls autoRotate
//                 maxPolarAngle = {Math.PI/3}
//                 maxPolarAngle = {Math.PI/3}
//                 ref={orbitRef}
//                 args={[camera, domElement]}
//             />
//         )
//     }
// // Not working 👇👇
// // function Plane() {
// //         <mesh rotate = {[Math.PI/ 2, 0, 0]}>
// //             <planeBufferGeometry
// //                     attach='geometry'
// //                     args = {[100,100]}
// //             />
// //             <meshPhysicalMaterial
// //                 attach = 'material'
// //                 color = 'white'
// //             />
// //         </mesh>
// //     }

// function Box(props) {
//     // This reference will give us direct access to the mesh
//     const mesh = useRef()
//     // Set up state for the hovered and active state
//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)
//     // Rotate mesh every frame, this is outside of React without overhead

//   return (
//     <mesh
//       {...props}
//       scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
//       onClick={(e) => setActive(!active)}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}
//       castShadow
//     >
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
//       <pointLight position={[-10, -10, -10]} />
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshPhysicalMaterial color={(hovered || active) ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// export default function App() {
//   return (
//     <Canvas camera={{position: [0, 0, 5]}} onCreated={({ gl}) => {
//                 gl.shadowMap.enabled = true
//                 gl.shadowMap.type = THREE.PCFSoftShadowMap
//             }}>
//                 <fog attach='fog' args={['white', 5, 15]} />
//         <Controls />
//         <Box position={[0, 0, 0]} />
//         {/* <Plane /> */}
//     </Canvas>
//   )
// }

