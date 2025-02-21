//REDUX-TOOLKIT
import { combineReducers, configureStore, Reducer, AnyAction } from "@reduxjs/toolkit";
//SLICES
import userReducer, { USER_SLICE_NAME } from "./user/userSlice";


const appReducer = combineReducers({
    [USER_SLICE_NAME]: userReducer
});


const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === 'user/setLogoutUser') {
        state = {} as RootState;
    }
    return appReducer(state, action);
};


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false
        })
    )
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;