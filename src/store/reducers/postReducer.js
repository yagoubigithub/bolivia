const initStat = {};
const postReducer = (state = initStat, action) => {
  switch (action.type) {
   case 'GET_POSTS':{
      
       return {
           ...state,
          posts :  action.payload
       }
   }
    default:
      return state;
  }
};

export default postReducer;
