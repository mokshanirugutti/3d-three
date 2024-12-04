import { Canvas, useFrame , useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function App() {

  return (
  <div style={{height:'100vh'}}>
    <Canvas>
      <directionalLight position={[2,2,1]}/>
      <ambientLight intensity={2}/>
      <CubeBox/>
   
    </Canvas>
  </div>
  )
}

export default App


const CubeBox = () => {
  const meshref = useRef<THREE.Mesh> (null);
  const textture_1 = useLoader(THREE.TextureLoader, '12.jpg')
  useFrame((state,delta) => {
    if(meshref.current){

      meshref.current.rotation.x += delta * 0.5;
      meshref.current.rotation.y += delta * 0.5;
      meshref.current.rotation.z += delta * 0.5;
    }
  })

  return (
    <mesh ref={meshref}>
    <boxGeometry args={[2,2,2]} />
    <meshStandardMaterial map={textture_1} />
    </mesh>
  )
}