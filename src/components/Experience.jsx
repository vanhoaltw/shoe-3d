/* eslint-disable react/no-unknown-property */
import { Environment } from "@react-three/drei";
import CameraControls from "./CameraControls";
import Shoe from "./Shoe";

const Experience = () => {
  return (
    <>
      <CameraControls />
      <Environment
        files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
        background
        blur={0.5}
      />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <Shoe />
    </>
  );
};

export default Experience;
