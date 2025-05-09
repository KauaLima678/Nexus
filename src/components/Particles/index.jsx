import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0D0F13",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#37e359",
          },
          links: {
            enable: true,
            color: "#00ff00",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;