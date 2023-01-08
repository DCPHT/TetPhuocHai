const Sound = () => {
    const sound = "https://www.youtube.com/embed/khPT2g018Ws"

    return (
        <div hidden>
            <iframe src={`${sound}?autoplay=1`} allow="autoplay"></iframe>
        </div>
    )
}

export default Sound;