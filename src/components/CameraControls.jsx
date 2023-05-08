import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useEffect, useRef } from "react";
import { shoeScene, useShoeConfiguration } from "../context/ShoeConfigurtion";

const cameraPositions = {
  [shoeScene.laces]: {
    position: new Vector3(1, 0.2, 0),
    target: new Vector3(0, 0, 0),
  },
  [shoeScene.mesh]: {
    position: new Vector3(0, 0.2, 2),
    target: new Vector3(0, 0, 0),
  },
  [shoeScene.caps]: {
    position: new Vector3(0, 0.5, 1),
    target: new Vector3(0, -0.5, 0),
  },
  [shoeScene.inner]: {
    position: new Vector3(-1, 2, 0),
    target: new Vector3(0, 0, 0),
  },
  [shoeScene.sole]: {
    position: new Vector3(0, 0.2, 2),
    target: new Vector3(0, 0, 0),
  },
  [shoeScene.stripes]: {
    position: new Vector3(0, 0.2, 2),
    target: new Vector3(0, 0, 0),
  },
  [shoeScene.band]: {
    position: new Vector3(0, 0.2, 2),
    target: new Vector3(0, 0, 0),
  },
  [shoeScene.patch]: {
    position: new Vector3(-2, 0, 0),
    target: new Vector3(0, 0, 0),
  },
};

const CameraControls = () => {
  const orbitControls = useRef();
  const { camera } = useThree();
  const { currentConfig } = useShoeConfiguration();

  useEffect(() => {
    console.log({ currentConfig });
    if (!currentConfig || currentConfig === null) {
      camera.position.lerp(cameraPositions[shoeScene.band].position, 0);
      orbitControls.current.target.lerp(new Vector3(0, 0.2, 2), 0);
      camera.updateMatrixWorld();
    }
  }, [currentConfig]);

  useFrame((state, delta) => {
    if (!cameraPositions[currentConfig]) return;
    state.camera.position.lerp(
      cameraPositions[currentConfig].position,
      3 * delta
    );
    orbitControls.current.target.lerp(
      cameraPositions[currentConfig].target,
      3 * delta
    );
  });

  return (
    <>
      <OrbitControls
        makeDefault
        position={[0, 2, 0]}
        rotateSpeed={0.5}
        autoRotate={!currentConfig}
        minAzimuthAngle={0}
        minPolarAngle={0}
        enableDamping
        dampingFactor={0.02}
        zoomSpeed={2}
        ref={orbitControls}
      />
    </>
  );
};

export default CameraControls;
