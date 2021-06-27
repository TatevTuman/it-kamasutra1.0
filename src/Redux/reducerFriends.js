import types from "./actions";

let initialState = {

    FriendsData: [
        {
            id: 1,
            photo:"https://thumbs.dreamstime.com/b/%D0%BC%D0%B8%D0%BB%D1%8B%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D1%81-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%BC%D0%B8-108313736.jpg",
            name: "Toma",
            status: "Hy,I am here",
            location: {city: "NewCity", country: "NewCountry"},
            followed: true
        },
        {
            id: 2,
            photo:"https://us.123rf.com/450wm/topvectors/topvectors1910/topvectors191000180/130828177-emotion-of-laughter-on-the-face-of-a-brunette-woman-vector-illustration-.jpg?ver=6",
            name: "Amona",
            status: "Hy,I am here",
            location: {city: "NewCity", country: "NewCountry"},
            followed: false
        },
        {
            id: 3,
            photo:"https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160912753/62358474-homme-d-affaires-avatar-bande-dessin%C3%A9e-portant-costume-et-cravate-en-souriant-illustration-vectorie.jpg",
            name: "Dom",
            status: "Hy,I am here",
            location: {city: "NewCity", country: "NewCountry"},
            followed: true
        },
    ]
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
                FriendsData:[...state.FriendsData, ...action.users]
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





