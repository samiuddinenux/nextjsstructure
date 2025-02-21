//REDUX-TOOLKIT
import { setLoginUser, setLogoutUser, setDataUser } from "./userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./../index";
//NETWORK
import { ApiRequest } from "../../network/ApiRequest";
import { ApiEndpoints } from "../../network/ApiEndpoints";
//AXIOS
import { AxiosResponse, AxiosError } from "axios";
//ALERTS
import { successToastify, errorToastify } from "../../utils/alerts";


export const useUserActions = () => {
    const dispatch = useDispatch<AppDispatch>();


    const loginUser = async (data: any): Promise<AxiosResponse | AxiosError> => {
        return await ApiRequest()
            .request({
                method: ApiEndpoints.LOGIN_USER.method,
                url: ApiEndpoints.LOGIN_USER.url,
                data
            })
            .then((response: AxiosResponse) => {
                dispatch(setLoginUser(response.data.data));
                return response;
            })
            .catch((error: AxiosError<{ message: string; }>) => {
                errorToastify(error.response?.data.message || 'error occurred');
                return error;
            });
    }

    const logoutUser = () => {
        dispatch(setLogoutUser());
        window.location.reload();
    }

    const updateUser = async (data: any): Promise<AxiosResponse | AxiosError> => {
        return await ApiRequest()
            .request({
                method: ApiEndpoints.UPDATE_USER.method,
                url: ApiEndpoints.UPDATE_USER.url,
                data
            })
            .then((response: AxiosResponse) => {
                successToastify(response.data.message);
                return response;
            })
            .catch((error: AxiosError<{ message: string; }>) => {
                errorToastify(error.response?.data.message || 'error occurred');
                return error;
            });
    }

    const getUser = async (): Promise<AxiosResponse | AxiosError> => {
        return await ApiRequest()
            .request({
                method: ApiEndpoints.GET_USER.method,
                url: ApiEndpoints.GET_USER.url
            })
            .then((response: AxiosResponse) => {
                dispatch(setDataUser(response.data.data));
                return response;
            })
            .catch((error: AxiosError<{ message: string; }>) => {
                errorToastify(error.response?.data.message || 'error occurred');
                return error;
            });
    }

    const uploadUserPhoto = async (data: any): Promise<AxiosResponse | AxiosError> => {
        let formData = new FormData();

        Object.keys(data).forEach((key: string) => {
            formData.append(key, data[key]);
        });

        return await ApiRequest()
            .request({
                method: ApiEndpoints.UPLOAD_USER_PHOTO.method,
                url: ApiEndpoints.UPLOAD_USER_PHOTO.url,
                data: formData
            })
            .then((response: AxiosResponse) => {
                successToastify(response.data.message);
                return response;
            })
            .catch((error: AxiosError<{ message: string; }>) => {
                errorToastify(error.response?.data.message || 'error occurred');
                return error;
            });
    }


    return {
        loginUser,
        logoutUser,
        getUser,
        updateUser,
        uploadUserPhoto
    }
}