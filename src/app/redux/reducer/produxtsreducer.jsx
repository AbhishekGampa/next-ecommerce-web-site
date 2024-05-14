const initialState = {
  loading: false,
  products: null,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      console.log("request");
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        loading: false,
        products: action.payload,
        error: "",
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        loading: false,
        products: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
