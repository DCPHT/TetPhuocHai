import Content from "./Content";
import CountDown from "./CountDown";
import LuckyCoin from "../../assets/images/home/LuckyCoin.png"

const Home = () => {
    return (
        <div class="home container-fluid">
            <CountDown />
            <div class="col-2 text-end title-image"
                style={{
                    position: "absolute",
                    top: "10rem",
                    left:"-7.6rem",
                    "z-index": "-1",
                }}
            >
                <img src={LuckyCoin}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>
            <Content/>
        </div >
    )
}

export default Home;