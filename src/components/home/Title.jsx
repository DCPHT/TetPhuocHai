import PeachLeft from "../../assets/images/home/title/PeachLeft.png"
import PeachRight from "../../assets/images/home/title/PeachRight.png"
import Cat from "../../assets/images/home/title/Cat.png"
import Year from "../../assets/images/home/title/Year.png"
import Lunar from "../../assets/images/home/title/Lunar.png"
import CatCircle from "../../assets/images/home/title/CatCircle.png"

const Title = () => {
    return (
        <div style={{"padding-top":"8rem"}}>
            <div class="row">
                <div class="col-6 col-md-4">
                    <img src={PeachLeft} class="title-image"  style={{"margin-left":"-12px"}}/>
                </div>
                <div class="col-6 col-md-4">
                    <div class="text-center">
                        <img src={Lunar} class="title-image-small" />
                    </div>
                    <div class="text-center">
                        <img src={Year} class="title-image" />
                    </div>
                </div>
                <div class="col-6 col-md-4 text-end">
                    <img src={PeachRight} class="title-image" style={{"margin-right":"-12px"}}/>
                </div>
            </div>
            <div class="d-flex justify-content-center pt-5">
                <img src={Cat} class="title-image" />
            </div>
        </div>
    )
}

export default Title;