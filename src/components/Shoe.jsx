/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useShoeConfiguration } from "../context/ShoeConfigurtion";
import { memo, useRef } from "react";

const Shoe = () => {
  const ref = useRef();
  const { color } = useShoeConfiguration();
  const { nodes, materials } = useGLTF("/models/shoe-draco.glb");

  return (
    <group dispose={null} ref={ref}>
      <mesh
        material-color={color?.laces}
        geometry={nodes.shoe.geometry}
        material={materials.laces}
      />
      <mesh
        material-color={color?.mesh}
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
      />
      <mesh
        material-color={color?.caps}
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
      />
      <mesh
        material-color={color?.inner}
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
      />
      <mesh
        material-color={color?.sole}
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
      />
      <mesh
        material-color={color?.stripes}
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
      />
      <mesh
        material-color={color?.band}
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
      />
      <mesh
        material-color={color?.patch}
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
      />
    </group>
  );
};

export default memo(Shoe);
