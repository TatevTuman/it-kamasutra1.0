import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13347.jpg"
                     alt="avatar" className={s.img}/>
            </div>
            <div>
                <div>Name: Masha</div>
                <div>Language: English</div>
                <div>Learning: Armenian</div>
                <div>City: Chicago,USA</div>
            </div>
        </div>

    )
}

export default ProfileInfo;

