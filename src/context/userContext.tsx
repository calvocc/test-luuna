import { createContext } from "react";
import { UserState } from "../interfaces/interfaces";

export type UserContextProps = {
    userState: UserState,
    updateUser: (...args: any[]) => void;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);