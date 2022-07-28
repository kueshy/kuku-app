export const poultryReducer = (
  state = {
    poultry: [],
    loading: false,
    uploading: false,
    error: false,
    updateLoading: true,
  },
  action
) => {
  switch (action.type) {
    case "ADD_POULTRY_START":
      return { ...state, uploading: true, error: false };
    case "ADD_POULTRY_SUCCESS":
      return {
        ...state,
        poultry: [action.data, ...state.poultry],
        uploading: false,
        error: false,
      };
    case "ADD_POULTRY_FAIL":
      return { ...state, uploading: false, error: true };

    case "RETRIEVING_SUCCESS":
      return {
        ...state,
        poultry: action.data,
        uploading: false,
        error: false,
      };

    case "UPDATE_START":
      return {
        ...state,
        updateLoading: true,
        error: false,
      };

    case "UPDATE_SUCCESS":
      return {
        ...state,
        poultry: action.data,
        updateLoading: false,
        error: false,
      };

    case "UPDATE_FAIL":
      return { ...state, error: true, updateLoading: true };

    default:
      return state;
  }
};

export const chickReducer = (
  state = { chick: [], loading: false, uploading: false, error: false },
  action
) => {
  switch (action.type) {
    case "ADD_CHICK_REQUEST":
      return { ...state, uploading: true, error: false };
    case "ADD_CHICK_SUCCESS":
      return {
        ...state,
        chick: [action.data, ...state.chick],
        uploading: false,
        error: false,
      };
    case "ADD_CHICK_FAIL":
      return { ...state, uploading: false, error: true };

    default:
      return state;
  }
};

export const poultryDetailsReducer = (
  state = { poultry: {}, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "RETRIEVE_DETAILS_START":
      return { ...state, loading: true, error: false };
    case "RETRIEVE_DETAILS_SUCCESS":
      return {
        ...state,
        poultry: action.data,
        loading: false,
        error: false,
      };
    case "RETRIEVE_DETAILS_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
