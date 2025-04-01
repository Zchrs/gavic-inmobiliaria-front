import { types } from "../types/types";


 const propertyInitiaState = {
    propertyInfo: [],
    selectedProperty: [],
    ratings: {}
}




export const propertyReducer = (state = propertyInitiaState, action) =>{
    switch (action.type) {
        case types.propertyView:
          return {
            ...state,
            ... action.payload,
            propertyInfo: action.payload
          };
          case types.propertyViewedFinish:
            return {
                ... state,
                propertyInfo: action.payload,
                state: null
            };
            case types.REMOVE_PROPERTY:
              return {
                ...state,
                removeProperty: action.payload,
                state: null
              };
            case types.SELECTED_PROPERTY:
              return {
                ...state,
                selectedProperty: action.payload,
              };
              case types.SET_RATINGS:
                return {
                  ...state,
                  ratings: {
                    ...state.ratings,
                    ...action.payload,
                  },
                };
        default:
          return state;
      }
}

