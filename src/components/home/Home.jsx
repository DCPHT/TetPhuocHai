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
            <div>
            <img src={LuckyCoin}
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    bottom:"100px",
                    "z-index":"-1",
                    "margin-right":"-12px",
                }}
            />
            </div>
        </div>
    )
}

export default Home;