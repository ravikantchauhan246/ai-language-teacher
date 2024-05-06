"use client"


import { Teacher } from "@/components/Teacher";
import { CameraControls, Environment, Gltf} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils";


export default function Home() {
  return (
   <>
   <Canvas style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }} camera={{
    position:[0,0,0.0001],


   }
   }>
      <CameraManager/> 
      <Environment preset="sunset"/>
      <ambientLight intensity={0.8} color="pink"/>
      <Teacher teacher={"Nanami"} position={[-1,-1.7,-3]} scale={1.5} rotation-y={degToRad(20)}/>
      <Gltf src="/models/classroom_default.glb" position={[0.2,-1.7,-2]}/>
   </Canvas>
   </>
  );
}
const CameraManager = () =>{
  return <CameraControls
  minZoom={1}
  maxZoom={3}
  polarRotateSpeed={-0.3}
  azimuthRotateSpeed={-0.3}
  mouseButtons={{
    left:1, //action.rotate
    wheel: 16, //action.zoom
  }}
  touches = {{
    one:32, //action.touch_rotate
    two:512, //action.touch_zoom
  }}
   />
}
