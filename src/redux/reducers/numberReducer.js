import { act } from "react-dom/test-utils";
import actionTypes from "../actions/actionTypes";

const initialState = {
  pending: false,
  success: false,
  number: [],
  fail: false,
  error: "",
};

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.numberActions.GET_NUMBER_START:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.numberActions.GET_NUMBER_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        fail: false,
        number: action.payload,
      };
    case actionTypes.numberActions.GET_NUMBER_FAIL:
      return {
        ...state,
        pending: false,
        success: false,
        fail: true,
        error: action.payload,
      };

    case actionTypes.numberActions.DELETE_NUMBER_START:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.numberActions.DELETE_NUMBER_SUCCESS:
      const filteredNumber = state.number.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        pending: false,
        success: true,
        fail: false,
        number: filteredNumber,
      };
    case actionTypes.numberActions.DELETE_NUMBER_FAIL:
      return {
        ...state,
        pending: false,
        success: false,
        fail: true,
        error: action.payload,
      };
     
      case actionTypes.numberActions.ADD_NUMBER:
        return{
            ...state,
            number:[...state.number,action.payload]
        }


    default:
      return state;
  }
};

export default numberReducer;
