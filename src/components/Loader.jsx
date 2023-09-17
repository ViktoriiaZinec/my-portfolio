import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <p
        style={{
          fontSize: 16,
          color: "#ffffff",
        }}
      >
        {progress.toFixed(1)}%
      </p>
    </Html>
  );
};

export default Loader;
