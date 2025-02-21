type ApiEndpointsType = {
    [key: string]: {
        method: 'POST' | 'PUT' | 'GET' | 'DELETE';
        url: string;
    };
};


export const ApiEndpoints: ApiEndpointsType = {
    LOGIN_USER: {
        method: "POST",
        url: "/login"
    },
    UPDATE_USER: {
        method: "PUT",
        url: "/update-user-profile"
    },
    GET_USER: {
        method: "GET",
        url: "/get-user-profile"
    },
    UPLOAD_USER_PHOTO: {
        method: "POST",
        url: "/upload-user-photo"
    },
};


/* optional */
export const REFRESH_TOKEN: string = "/refresh";