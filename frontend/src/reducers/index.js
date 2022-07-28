import { combineReducers } from "redux";

import { authReducer } from "./authReducers";
import {
  poultryReducer,
  poultryDetailsReducer,
  chickReducer,
} from "./poultryReducers";

export const reducers = combineReducers({
  authReducer,
  poultryReducer,
  poultryDetailsReducer,
  chickReducer,
});
