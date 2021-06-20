
import MyPost from "./Posts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    console.log(props)
    return (<div>
        <ProfileInfo/>
        <MyPost state={props.state} addPost={props.addPost} />
    </div>)
}

export default Profile;