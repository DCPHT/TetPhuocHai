import { createSignal, onCleanup } from "solid-js";
import Firework from "../Firework";
import Sound from "../Sound";

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
        timeBetweenDates(date).timeData
    );
    const timer = setInterval(() => {
        setTimerDetails(timeBetweenDates(date).timeData);
    }, 1000);

    onCleanup(() => clearInterval(timer));

    return (
        <div>
            {timeBetweenDates(date).difference > 0 ?
                (<div class="d-flex flex-row justify-content-evenly count-down">
                    <div class="text-center">
                        <div class="text-count-down">{timerDetails().days}</div>
                        <div class="text-count-down">Ngày</div>
                    </div>
                    <div class="text-center">
                        <div class="text-count-down">{timerDetails().hours}</div>
                        <div class="text-count-down">Giờ</div>
                    </div>
                    <div class="text-center">
                        <div class="text-count-down">{timerDetails().minutes}</div>
                        <div class="text-count-down">Phút</div>
                    </div>
                    <div class="text-center">
                        <div class="text-count-down">{timerDetails().seconds}</div>
                        <div class="text-count-down">Giây</div>
                    </div>
                </div>)
                : (<div class="d-flex flex-row justify-content-evenly count-down text-count-down-lunar">
                    CHÚC MỪNG NĂM MỚI
                    <Firework />
                    <Sound />
                </div>
                )
            }
        </div>

    )
}

export default CountDown;