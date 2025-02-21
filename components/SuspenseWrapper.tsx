//REACT
import { ReactNode, Suspense } from "react";
//COMPONENTS
import Loader from "./Loader";


interface SuspenseWrapperProps {
    children: ReactNode;
}

export default function SuspenseWrapper({ children }: SuspenseWrapperProps): JSX.Element {
    return <Suspense fallback={<Loader />}> {children} </Suspense>
}