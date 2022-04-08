import {UserState} from '../interfaces/interfaces';

type UserAction = | {type: 'updateUser', payload: UserState}

export const UserReducer = (state: UserState, action: UserAction): UserState => {

    switch (action.type) {
        case 'updateUser':
            return{
                ...state,
                users: action.payload.users,
                repositories: action.payload.repositories,
                incomplete_results: action.payload.incomplete_results,
                total_count: action.payload.total_count,
                searchType: action.payload.searchType
            }
    
        default:
            return state;
    }
}