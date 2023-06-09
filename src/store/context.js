import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import { GET_ITEM, GET_MESSAGE } from "./actions";

//http://localhost:5016
// const url = 'http://localhost:3018'

const AppContext = React.createContext();

const initialState = {
  items: {},
  message: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getItem = (e) => {
    dispatch({ type: GET_ITEM, payload: e });
  };

  const getMessage = (e) => {
    dispatch({ type: GET_MESSAGE, payload: e });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getItem,
        getMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
