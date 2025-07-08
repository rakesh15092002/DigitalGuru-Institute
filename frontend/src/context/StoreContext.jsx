import { createContext, useState } from "react";
import { course_list } from "../assets/assets";

// ✅ Context create kiya (default `{}` diya taaki `null` errors avoid ho)
const StoreContext = createContext({});

export const StoreContextProvider = (props) => {
  const url = "http://localhost:4000";
  const [token,setToken]= useState("");
  const contextValue = {
    course_list,
    url,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
