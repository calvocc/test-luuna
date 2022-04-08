import { useReducer } from "react";

import { UserState, props } from '../interfaces/interfaces';
import { UserContext } from "./userContext";
import { UserReducer } from "./userReducer";

const INITIAL_STATE: UserState = {
    total_count: 0,
    incomplete_results: false,
    users: [],
    repositories: [],
    searchType: 'users'
}

export const UserProvider = ({ children }: props ) => {

    const [userState, dispatch] = useReducer(UserReducer, INITIAL_STATE);

    const updateUser = ({users, repositories, incomplete_results, total_count, searchType}:UserState ) => {
        dispatch({type: 'updateUser', payload: { users, repositories, incomplete_results, total_count, searchType}})
    }

    return(
        <UserContext.Provider value={{userState, updateUser}}>
            { children }
        </UserContext.Provider>
    )
}