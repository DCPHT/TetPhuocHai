import { createSignal, For, onCleanup } from "solid-js";
import Firework from "../Firework";
import Sound from "../Sound";
import Content from "./Content";
import "./css/CountDown10.css"

const timeBetweenDates = (date) => {
    const validFromDate = new Date();
    const validTillTimeStamp = new Date(date);
    const validTillDate = new Date(validTillTimeStamp);
    const difference = validTillDate.getTime() - validFromDate.getTime();

    let timeData = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    };

    if (difference > 0) {
        let seconds = Math.floor(difference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        timeData = {
            days: days < 10 ? `0${days}` : `${days}`,
            hours: hours < 10 ? `0${hours}` : `${hours}`,
            minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
            seconds: seconds < 10 ? `0${seconds}` : `${seconds}`
        };
    }
    return {
        timeData,
        difference
    };
};

const CountDown = () => {
    const date = "Jan 22 2023"
    const [timerDetails, setTimerDetails] = createSignal(
        timeBetweenDates(date)
    );
    const timer = setInterval(() => {
        setTimerDetails(timeBetweenDates(date))
    }, 1000);

    onCleanup(() => clearInterval(timer));

    return (
        <div>
            {timerDetails().difference >= 0 ?
                ((timerDetails().timeData.days === "00" &&
                    timerDetails().timeData.hours === "00" &&
                    timerDetails().timeData.minutes === "00" &&
                    timerDetails().timeData.seconds <= 10) ?
                    (<div class="d-flex flex-row justify-content-evenly count-down count-down-10">
                        <span class="cd-number cd-number-ten text-count-down-10">{timerDetails().timeData.seconds}</span>
                        <span class="cd-number cd-number-nine text-count-down-10">{timerDetails().timeData.seconds}</span>
                        <span class="cd-number cd-number-eight text-count-down-10">{timerDetails().timeData.seconds}</span>
                        <span class="cd-number cd-number-seven text-count-down-10">{timerDetails().timeData.seconds}</span>
                        <span class="cd-number cd-number-six text-count-down-10">{timerDetails().timeData.seconds}</span>
                        <span class="cd-number cd-number-five text-count-down-10">{timerDetails().timeData.seconds}</span>
                        <span class="cd-number cd-number-four text-count-down-10">{timerDetails().timeData.seconds}</span>
                        <span class="cd-number cd-number-three text-count-down-10">{timerDetails().timeData.seconds}</span>
                        <span class="cd-number cd-number-two text-count-down-10">{timerDetails().timeData.seconds}</span>
                        <span class="cd-number cd-number-one text-count-down-10">{timerDetails().timeData.seconds}</span>
                        <span class="cd-number cd-number-zero text-count-down-10">{timerDetails().timeData.seconds}</span>
                    </div>)
                    :
                    (<div class="container-fluid count-down">
                        <div class="row">
                            <div class="col text-center">
                                <div class="text-count-down">{timerDetails().timeData.days}</div>
                                <div class="text-count-down">Ngày</div>
                            </div>
                            <div class="col text-center">
                                <div class="text-count-down">{timerDetails().timeData.hours}</div>
                                <div class="text-count-down">Giờ</div>
                            </div>
                            <div class="col text-center">
                                <div class="text-count-down">{timerDetails().timeData.minutes}</div>
                                <div class="text-count-down">Phút</div>
                            </div>
                            <div class="col text-center">
                                <div class="text-count-down">{timerDetails().timeData.seconds}</div>
                                <div class="text-count-down">Giây</div>
                            </div>
                        </div>
                    </div>)
                )
                :
                (<div class="container-fluid count-down">
                    <div class="row text-count-down-lunar">
                        <div class="col text-center">CHÚC</div>
                        <div class="col text-center">MỪNG</div>
                        <div class="col text-center">NĂM</div>
                        <div class="col text-center">MỚI</div>
                        <Firework />
                        <Sound />
                    </div>
                </div>)
            }
        </div>
    )
}

export default CountDown;