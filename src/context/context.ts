import { createContext, useContext } from "react";
import type { Employ } from "./useContext";

export const EmployContext = createContext<Employ | undefined>(undefined);

export const useEmployContext = () => {
    const employ = useContext(EmployContext);

    if(employ === undefined) {
        throw new Error('useEmployContext must be used with a EmployContext')
    }

    return employ;
}