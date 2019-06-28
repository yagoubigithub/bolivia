export const signIn = (email, password) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
   
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
export const signOut = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
     
      console.log("signOut", getState());
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(()=>{
        dispatch({type : 'SIGNOUT_SUCCESS'})

    })
    };
  };
  
