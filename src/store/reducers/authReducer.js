const initStat = {};
const authReducer = (state = initStat, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authErr: null,
        loading :false
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        authErr: action.err.message,
        loading : false
      };
    case "SIGNOUT_SUCCESS":
      return {
        ...state,
        authErr : ""
      };
    case "LOADING_USER"  :
      return {
      ...state,
      loading : true
    }
    default:
      return state;
  }
};

export default authReducer;
