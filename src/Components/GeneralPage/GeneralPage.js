import s from "./GeneralPage.module.css"


const GeneralPage = () => {
    return (
        <div>

            <video loop autoPlay muted className={s.videoHome}>
                <source
                    src="https://video.wixstatic.com/video/11062b_9de2dbff3dda403b944bb98c41cb5764/1080p/mp4/file.mp4"
                    type="video/mp4"/>
            </video>

            <div className={s.textOnBanner}>
                <h4>THE LIMITS OF YOUR LANGUAGE MEAN THE LIMITS OF YOUR </h4>
                <h1>W O R L D</h1>
            </div>


        </div>
    )
}

export default GeneralPage;



