import * as PoultryAPI from "../api/PoultryRequest";

export const addPoultry = (data) => async (dispatch) => {
  dispatch({ type: "ADD_POULTRY_START" });
  try {
    const newPoultry = await PoultryAPI.addPoultry(data);
    dispatch({ type: "ADD_POULTRY_SUCCESS", data: newPoultry.data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "ADD_POULTRY_FAIL" });
  }
};

export const addChick = (data) => async (dispatch) => {
  dispatch({ type: "ADD_CHICK_REQUEST" });
  try {
    const newChick = await PoultryAPI.addChick(data);
    dispatch({ type: "ADD_CHICK_SUCCESS", data: newChick.data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "ADD_CHICK_FAIL" });
  }
};

export const getPoultry = () => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START" });
  try {
    const { data } = await PoultryAPI.getPoultry();
    dispatch({ type: "RETRIEVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "RETRIEVING_FAIL" });
  }
};

export const getPoultryDetails = (id) => async (dispatch) => {
  dispatch({ type: "RETRIEVE_DETAILS_START" });
  try {
    const { data } = await PoultryAPI.getPoultryDetails(id);
    dispatch({ type: "RETRIEVE_DETAILS_SUCCESS", data: data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "RETRIEVE_DETAILS_FAIL" });
  }
};

export const updatePoultry = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPDATE_START" });
  try {
    const { data } = await PoultryAPI.updatePoultry(id, formData);
    dispatch({ type: "UPDATE_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "UPDATE_FAIL" });
    console.log(error);
  }
};
