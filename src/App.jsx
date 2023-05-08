/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import ShoeConfigurationProvider from "./context/ShoeConfigurtion";
import Configuration from "./components/Configuration";
import Loader from "./components/Loader";

function App() {
  return (
    <ShoeConfigurationProvider>
      <Configuration />
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          gl={{ preserveDrawingBuffer: true }}
          camera={{ position: [1, 1.5, 3], fov: 50 }}
        >
          <Experience />
        </Canvas>
      </Suspense>
    </ShoeConfigurationProvider>
  );
}

export default App;
