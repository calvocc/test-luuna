export interface UserState {
    total_count: number;
    incomplete_results: boolean;
    users: [];
    repositories: [];
    searchType: 'users' | 'repositories'
}

export interface SearcProps {
    searchtype: 'users' | 'repositories'
}

export interface itemProp {
    name: string;
    html_url: string;
    owner: {
        login: string;
    }
}

export interface itemUsProp {
    login: string;
    id: string;
    avatar_url: string;
    html_url: string;
}

export interface props {
    children: JSX.Element | JSX.Element[];
}