const UserReducer = (state = [], action)=> {
    switch(action.type){
        case "FETCH_USERS":
            return action.payload
            default:
                return state
    }
}

export default UserReducer