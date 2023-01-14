import Content from "./Content";
import CountDown from "./CountDown";
import Title from "./Title";
import LuckyCoin from "../../assets/images/home/LuckyCoin.png"

const Home = () => {
    return (
        <div class="home">
            <Title />
            <CountDown />
            <Content />
            <div class="col-2 text-end"
                style={{
                    position: "absolute",
                    top: "10rem",
                    left:"-7.7rem",
                    "z-index": "-1",
                    height: "1500px"
                }}
            >
                <img src={LuckyCoin}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>
        </div >
    )
}

export default Home;