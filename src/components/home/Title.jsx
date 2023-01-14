import PeachLeft from "../../assets/images/home/title/PeachLeft.png"
import PeachRight from "../../assets/images/home/title/PeachRight.png"
import Cat from "../../assets/images/home/title/Cat.png"
import Year from "../../assets/images/home/title/Year.png"
import Lunar from "../../assets/images/home/title/Lunar.png"
import CatCircle from "../../assets/images/home/title/CatCircle.png"
import LightLeft from "../../assets/images/home/title/LightLeft.png"
import LightRight from "../../assets/images/home/title/LightRight.png"

const Title = () => {
    return (
        <div class="container-fliud" style={{ "padding-top": "8rem" }}>
            <div class="row ">
                <div class="col-3">
                    <img src={PeachLeft} class="title-image" style={{ "margin-left": "-12px" }}
                    />
                </div>
                <div class="col-6" style={{ "margin-top": "-35px" }}>
                    <div class="row justify-content-center">
                        <div class="col" >
                            <img src={LightLeft} class="title-image-small" />
                        </div>
                        <div class="col" >
                            <div class="row text-center"
                                style={{
                                    "padding-top": "10%",
                                }}
                            >
                                <div class="col"
                                    style={{ width: "100%" }}
                                >
                                    <img src={Lunar} />
                                </div>
                            </div>
                            <div class="row"
                                style={{
                                    "padding-top": "30%",
                                    width: "100%"
                                }}
                            >
                                <div class="col"
                                    style={{ width: "100%" }}
                                >
                                    <img src={Year} />
                                </div>
                            </div>
                        </div>
                        <div class="col text-end">
                            <img src={LightRight} class="title-image-small" />
                        </div>
                    </div>
                </div>
                <div class="col-3 text-end">
                    <img src={PeachRight} class="title-image" style={{ "margin-right": "-12px" }} />
                </div>
            </div>
            <div class="row d-flex justify-content-center pt-5">
                <div class="col-4 text-center">
                    <img src={Cat} class="title-image-small" />
                </div>
            </div>
        </div>
    )
}

export default Title;