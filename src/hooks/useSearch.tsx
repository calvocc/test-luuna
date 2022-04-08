import { ChangeEvent, useState, useContext } from 'react'

import { UserContext } from '../context/userContext';
import { searchGithub } from '../services/github';

const INITIAL_STATE = {
    total_count: 0,
    incomplete_results: false,
    users: [],
    repositories: [],
    searchType: 'users'
}

export const useSearch =<T extends Object> (initialState:any) => {
    const { userState, updateUser } = useContext(UserContext);
    const [formulario, setFormulario] = useState(initialState);

    const handleChange = async ({target}: ChangeEvent<HTMLInputElement>, searchtype: 'users' | 'repositories') => {
        const {value} = target;
        setFormulario(value);

        const validate = searchtype === 'users' ? true : false

        try {
            if(value.length > 3){
                const result = await searchGithub(value, searchtype);
                result && updateUser({users: validate ? result.items: userState.users, repositories: validate ? userState.repositories : result.items, searchType: searchtype});
            } else {
                updateUser(INITIAL_STATE);
            }
        } catch (error) {
            console.log(error)
        }

    }

    return{
        formulario,
        handleChange
    }
}