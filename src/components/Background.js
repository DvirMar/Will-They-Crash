import Particles from "react-tsparticles";

const Background = (props) =>{
    return(
        
    <Particles
        id="tsparticles"
        options={{
          background: {
            enable:true,
            color: {
              value: "#80e5ff",
              
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas ",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.8,
              },
            },
          },
          particles: {
            color: {
              value: "#0e9619",
            },
            links: {
              color: "#9900cc",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 75,
            },
            opacity: {
              value: 5.0,
            },
            shape: {
              type: "triangle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }
      }
      />
    );
}
    
export default Background;