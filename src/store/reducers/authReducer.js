const initStat = {};
const authReducer = (state = initStat, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
        return {
          ...state,
          authErr: null
        };
  
      case "LOGIN_ERROR":
        return {
          ...state,
          authErr: action.err.message
        };
        default:
            return state;
  }
   
}

export default authReducer;