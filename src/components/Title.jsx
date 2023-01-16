import PeachLeft from "../assets/images/home/title/PeachLeft.png"
import PeachRight from "../assets/images/home/title/PeachRight.png"
import Cat from "../assets/images/home/title/Cat.png"
import Year from "../assets/images/home/title/Year.png"
import Lunar from "../assets/images/home/title/Lunar.png"
import CatCircle from "../assets/images/home/title/CatCircle.png"
import LightLeft from "../assets/images/home/title/LightLeft.png"
import LightRight from "../assets/images/home/title/LightRight.png"

const Title = () => {
    return (
        <div style={{ "padding-top": "8rem" }}>
            <div class="row w-100">
                <div class="col-3">
                    <img src={PeachLeft} class="title-image"
                    />
                </div>
                <div class="col-6" style={{ "margin-top": "-35px" }}>
                    <div class="row w-100 justify-content-center">
                        <div class="col" >
                            <img src={LightLeft} class="title-image-small" />
                        </div>
                        <div class="col" >
                            <div class="d-flex flex-column align-items-center"
                                style={{ "padding-top": "10%" }}
                            >
                                <img src={Lunar} class="title-image-small" />
                                <img src={Year} class="title-image"
                                    style={{ "padding-top": "30%" }}
                                />
                            </div>
                        </div>
                        <div class="col text-end">
                            <img src={LightRight} class="title-image-small" />
                        </div>
                    </div>
                </div>
                <div class="col-3 text-end">
                    <img src={PeachRight} class="title-image"
                    />
                </div>
            </div>
            <div class="row w-100 d-flex justify-content-center pt-5">
                <div class="col-4 text-center">
                    <img src={Cat} class="title-image-small" />
                </div>
            </div>
        </div>
    )
}

export default Title;