import PHTeamLogo from "../assets/images/logo/PHTeamLogo.png"
import Left from "../assets/images/footer/Left.png"
import Right from "../assets/images/footer/Right.png"

const Footer = () => {
    return (
        <div class="footer text-center">
            <div class="row w-100">
                <div class="col-5">
                    <img src={Left} class="footer-image" />
                </div>
                <div class="col-2">
                    <img src={PHTeamLogo} class="footer-logo" />
                </div>
                <div class="col-5">
                    <img src={Right} class="footer-image" />
                </div>
            </div>
        </div>
    )
}

export default Footer;