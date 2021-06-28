import types from "./actions";

let initialState = {

    FriendsData: [
 /*               {
                    id: 1,
                    photo: "https://inlnk.ru/r7peZ",
                    name: "Toma",
                    status: "Hy,I am here",
                    location: {city: "NewCity", country: "NewCountry"},
                    followed: true
                },
                {
                    id: 2,
                    photo: "https://inlnk.ru/bwBjz",
                    name: "Amona",
                    status: "Hy,I am here",
                    location: {city: "NewCity", country: "NewCountry"},
                    followed: false
                },
                {
                    id: 3,
                    photo: "https://inlnk.ru/be0LK",
                    name: "Dom",
                    status: "Hy,I am here",
                    location: {city: "NewCity", country: "NewCountry"},
                    followed: true
                },*/
    ],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1
}


const reducerFriends = (state = initialState, action) => {
    switch (action.type) {
        case types.FOLLOW:
            return {
                ...state,
                FriendsData: state.FriendsData.map(friend => {
                    if (friend.id === action.userId) {
                        return {...friend, followed: false}
                    }
                    return friend;
                })

            }
        case types.UNFOLLOW:
            return {
                ...state,
                FriendsData: state.FriendsData.map(friend => {
                    if (friend.id === action.userId) {
                        return {...friend, followed: true}
                    }
                    return friend;
                })
            }
        case types.SET_USERS:
            return {
                ...state,
                /*        FriendsData:[...state.FriendsData, ...action.users]*/
                FriendsData: [...action.users]
            }
        case types.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.currentPage
            }

        case types.SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount:action.totalUsersCount

            }
        default:
            return state;
    }
}

export default reducerFriends;


export const followActionCreator = (userId) => {
    return {type: types.FOLLOW, userId}
}
export const unfollowActionCreator = (userId) => {
    return {type: types.UNFOLLOW, userId}
}
export const setUsersActionCreator = (users) => {
    return {type: types.SET_USERS, users}

}
export const setCurrentPageActionCreator = (currentPage) => {
    return {type: types.SET_CURRENT_PAGE, currentPage}
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return {type: types.SET_TOTAL_USERS_COUNT, totalUsersCount}
}





