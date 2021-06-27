import Friends from "./Friends";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator} from "../../Redux/reducerFriends";


const mapStateToProps = (state) => {
    return {
        state: state.friendsPage.FriendsData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unFollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUser: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);


export default FriendsContainer;