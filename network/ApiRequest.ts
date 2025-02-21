//AXIOS
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
//ENVIRONMENTS
import { API_INSTANCE } from "./Environments";
//REDUX-TOOLKIT
import { setLogoutUser, setAccessToken, selectRefreshToken } from "../store/user/userSlice";
import { store } from "../store";
//NETWORK
import { REFRESH_TOKEN } from './ApiEndpoints';


const logout = (): void => {
    store.dispatch(setLogoutUser());
    window.location.href = "/signin";
}


/* optional */
const refreshTokenApi = async (): Promise<string> => {
    try {
        const response = await axios.post(
            API_INSTANCE + REFRESH_TOKEN,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("refreshToken") || null}`
                },
            }
        );

        store.dispatch(setAccessToken(response.data.data.token.access_token));
        store.dispatch(selectRefreshToken(response.data.data.token.refresh_token));
        return response.data.data.token.access_token;
    }
    catch (error) {
        logout();
        return Promise.reject(error);
    }
}


export const ApiRequest = (): AxiosInstance => {
    const request = axios.create({
        baseURL: API_INSTANCE,
        headers: {
            Authorization: `Bearer ${
                typeof window !== "undefined"
                    ? (
                        window.localStorage.getItem("accessToken")
                            ? window.localStorage.getItem("accessToken")
                            : null
                    )
                    : null
                }`,
        },
        responseType: "json",
        socketPath: null
    });

    request.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: AxiosError) => {
            if (error.code === "ERR_NETWORK") {
                // NETWORK-ERROR
                console.error("NETWORK ERROR - please try again later.");
            }

            if (error.response?.status === 401) {
                // UNAUTHORIZED
                // refreshTokenApi(); /* optional */
                console.error("UNAUTHORIZED - redirecting to login.");
                logout();
            }

            if (error.response?.status === 403) {
                // FORBIDDEN
                console.error("FORBIDDEN - you do not have the necessary permissions.");
                logout();
            }

            return Promise.reject(error);
        }
    );

    return request;
}