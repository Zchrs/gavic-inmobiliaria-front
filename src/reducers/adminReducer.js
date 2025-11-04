import { types } from "../types/types";

const pqrsInitiaState = {
  pqrsInfo: [],
  selectedPqrs: [],
  removePqrs: [],
  filtered: [],
  likes: {},
};

export const pqrsReducer = (state = pqrsInitiaState, action) => {
  switch (action.type) {
    case types.pqrsView:
      return {
        ...state,
        pqrsInfo: action.payload,
      };

    case types.pqrsViewedFinish:
      return {
        ...state,
        pqrsInfo: action.payload,
      };

    case types.REMOVE_PQRS:
      return {
        ...state,
        removePqrs: action.payload,
      };

    case types.SELECTED_PQRS:
      return {
        ...state,
        selectedPqrs: action.payload,
      };

    case types.SET_LIKES:
      return {
        ...state,
        likes: {
          ...state.likes,
          ...action.payload,
        },
      };

    case types.setFilteredPqrs:
      return {
        ...state,
        filtered: action.payload,
      };

    default:
      return state;
  }
};