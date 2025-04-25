import { createContext } from "react";
import { course_list } from "../assets/assets";

// ✅ Context create kiya (default `{}` diya taaki `null` errors avoid ho)
const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
    const contextValue = {
        course_list,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContext;
