import { GET_TEAM } from "../actions/types";

const initialState = {
  team: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TEAM:
      return {
        ...state,
        team: action.payload
      };
    default:
      return state;
  }
}