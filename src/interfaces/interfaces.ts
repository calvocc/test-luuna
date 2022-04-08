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