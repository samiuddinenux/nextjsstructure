//REACT-TOASTIFY
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const successToastify = (message: string) => toast.success(message);
export const errorToastify = (message: string) => toast.error(message);