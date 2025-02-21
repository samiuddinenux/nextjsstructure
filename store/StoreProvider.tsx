"use client";
//REACT
import { ReactNode } from "react";
//REDUX-TOOLKIT
import { Provider } from "react-redux";
import { store } from "./index";


interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}