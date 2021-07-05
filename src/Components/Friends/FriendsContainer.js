import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator, isLoadingCountActionCreator
} from "../../Redux/reducerFriends";
import Friends from "./Friends";
import * as axios from "axios";
import Spiner from "../Spiner/Spiner";


class FriendsContainerAPI extends React.Component {

    componentDidMount() {

        this.props.isToggleLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true})
            .then(response => {
                this.props.setUser(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.isToggleLoading(false)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.isToggleLoading(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials:true
        }).then(response => {
            this.props.setUser(response.data.items);
            this.props.isToggleLoading(false)
        });
    }

    render() {
        return (
            <div>
                {this.props.isLoading ? <Spiner/> : <Friends {...this.props} onPageChanged={this.onPageChanged}
                                                             totalUsersCount={this.props.totalUsersCount}
                                                             pageSize={this.props.pageSize}
                                                             currentPage={this.props.currentPage}
                                                             state={this.props.state}

                />}

            </div>
        )
    }


}


const mapStateToProps = (state) => {
    return {
        state: state.friendsPage.FriendsData,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isLoading: state.friendsPage.isLoading,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        followFriend: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unFollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUser: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        },
        isToggleLoading: (isFetching) => {
            dispatch(isLoadingCountActionCreator(isFetching))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsContainerAPI);

export default  FriendsContainer;





