
import {connect} from "react-redux";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator
} from "../../Redux/reducerFriends";
import FriendsClass from "./FriendsClass";


const mapStateToProps = (state) => {
    return {
        state: state.friendsPage.FriendsData,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,

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
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalUsersCount:(totalUsersCount)=>{
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        }
    }
}


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsClass);


export default FriendsContainer;