export const getPosts = part => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    let posts=  [];
    firestore
      .collection("posts")
      .get()
      .then(querySnapshot => {
         posts = querySnapshot.docs.map(doc => doc.data());
        
        console.log(posts); 
      });

    dispatch({ type: "GET_POSTS",payload : posts });
  };
};
