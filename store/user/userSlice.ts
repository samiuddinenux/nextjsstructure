//REDUX-TOOLKIT
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";


interface state {
    user: any;
    accessToken: string;
    refreshToken: string;
}

const initialState: state = {
    user: typeof window !== "undefined" ? window.localStorage.getItem("user") || null : null,
    accessToken: typeof window !== "undefined" ? window.localStorage.getItem("accessToken") || "" : "",
    refreshToken: typeof window !== "undefined" ? window.localStorage.getItem("refreshToken") || "" : ""
}


export const USER_SLICE_NAME = "user";

const userSlice = createSlice({
    name: USER_SLICE_NAME,
    initialState,
    reducers: {
        setLoginUser: (state: state, action: PayloadAction<state>) => {
            if (typeof window !== "undefined") {
                localStorage.setItem("user", JSON.stringify(action.payload.user));
                localStorage.setItem("accessToken", action.payload.accessToken);
                localStorage.setItem("refreshToken", action.payload.refreshToken);
            }
            return {
                ...state,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken
            };
        },
        setLogoutUser: () => {
            if (typeof window !== "undefined") {
                localStorage.removeItem("user");
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
            }
            return initialState;
        },
        setDataUser: (state: state, action: PayloadAction<state>) => {
            if (typeof window !== "undefined") {
                localStorage.setItem("user", JSON.stringify(action.payload.user));
            }
            return { ...state, user: action.payload.user };
        },
        setAccessToken: (state: state, action: PayloadAction<string>) => {
            if (typeof window !== "undefined") {
                localStorage.setItem("accessToken", action.payload);
            }
            return { ...state, accessToken: action.payload };
        },
        setRefreshToken: (state: state, action: PayloadAction<string>) => {
            if (typeof window !== "undefined") {
                localStorage.setItem("refreshToken", action.payload);
            }
            return { ...state, refreshToken: action.payload };
        }
    }
});


export const { setLoginUser, setLogoutUser, setDataUser, setAccessToken, setRefreshToken } = userSlice.actions;
export const selectUser = (state: RootState) => state[USER_SLICE_NAME].user;
export const selectAccessToken = (state: RootState) => state[USER_SLICE_NAME].accessToken;
export const selectRefreshToken = (state: RootState) => state[USER_SLICE_NAME].refreshToken;
export default userSlice.reducer;