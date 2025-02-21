//REACT
import { ReactNode } from "react";


interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps): JSX.Element {
    return <> AuthLayout {children} </>;
}