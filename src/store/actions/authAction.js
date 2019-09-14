export const signIn = (email, password) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
   
    const firebase = getFirebase();

    dispatch({type : "LOADING_USER"})
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        //
        
        dispatch(getUserData(user.uid))
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
   
  console.log("signUp");
  const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
         
        return firestore.collection('users').doc(resp.user.uid).set({
          firstname: newUser.firstname,
          lastname: newUser.lastname,
          initials: newUser.firstname[0] + newUser.lastname[0]
        });
      }).then((user) => {
     
        dispatch(getUserData(user.user.uid))
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
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
  
  export const getUserData = (id) => dispatch => {
    dispatch({ type: "LOADING_USER" });
    console.log(id)
  /*
    axios
      .get("/user")
      .then(res => {
        dispatch({
          type: SET_USER,
          payload: res.data
        });
      })
      .catch(err => console.log(err));*/
  };