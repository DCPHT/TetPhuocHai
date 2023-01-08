import Fireworks from "@fireworks-js/solid";

const Firework = () => {
    return (
        <div>
            <Fireworks
                options={{
                    rocketsPoint: {
                        min: 40,
                        max: 60
                    },
                    mouse: {
                        click: true,
                        move: false,
                        max: 10
                    },
                }}
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                }}
            />
        </div>
    )
}

export default Firework;