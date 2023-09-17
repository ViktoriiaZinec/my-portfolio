import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computer = () => {
  const computer = useGLTF("./three-d-models/computer/scene.gltf");
  const computerRef = useRef();

  return (
    <mesh ref={computerRef}>
      <hemisphereLight intensity={2} groundColor="white" />
      <spotLight
        position={[0, 10, 10]}
        angle={0.22}
        penumbra={1}
        intensity={0.3}
        castShadow
      />
      <pointLight intensity={4} />
      <primitive object={computer.scene} scale={20} position={[0, 0, 0]} />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const getCanvasSize = () => {
    if (window.innerWidth <= 768) {
      return {
        width: "100%",
        height: "400px",
        marginTop: "-70px",
      };
    } else {
      return {
        width: "100%",
        height: "870px",
        marginTop: "-170px",
      };
    }
  };

  const canvasSize = getCanvasSize();
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAutoRotate(false);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Canvas
      style={{
        position: "relative",
        width: canvasSize.width,
        height: canvasSize.height,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: canvasSize.marginTop,
        padding: 0,
      }}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [30, 3, 20], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
        />
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
