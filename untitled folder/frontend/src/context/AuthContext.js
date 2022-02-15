import { createContext,useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user: {"_id": "61f156d041b38d5b69689e5f",
    "username": "Jianf",
    "email": "kanef423@gmail.com",
    "profilePicture": "",
    "coverPicture": "",
    "followers": [
    ],
    "followings": [],
    "isAdmin": false,
    "createdAt": "2022-01-26T14:12:32.625Z",
    "__v": 0
},
    isFetching:false,
    error: false,
}

export const AuthContext = createContext(INITIAL_STATE)
//store
export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    return (
    <AuthContext.Provider value={
        {
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }
    }>
        {children}
    </AuthContext.Provider>
    )
}
