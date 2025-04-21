import { types } from "../types/types";


const propertiesInitiaState = {
  propertiesInfo: [],
  selectedProperty: [],
  removeProperties: [],
  likes: {}
};




export const propertiesReducer = (state = propertiesInitiaState, action) => {
  switch (action.type) {
    case types.propertyView:
      return {
        ...state,
        propertiesInfo: action.payload
      };

    case types.propertiesViewedFinish:
      return {
        ...state,
        propertiesInfo: action.payload
      };

    case types.REMOVE_PROPERTY:
      return {
        ...state,
        removeProperties: action.payload
      };

    case types.SELECTED_PROPERTY:
      return {
        ...state,
        selectedProperty: action.payload
      };

    case types.SET_LIKES:
      return {
        ...state,
        likes: {
          ...state.likes,
          ...action.payload
        }
      };

    default:
      return state;
  }
};
