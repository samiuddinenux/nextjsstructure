//REACT
import { ReactNode } from "react";


interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
    return <> MainLayout {children} </>;
}