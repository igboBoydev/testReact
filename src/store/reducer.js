import { GET_ITEM, GET_MESSAGE } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        items: action.payload,
      };
    case GET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
