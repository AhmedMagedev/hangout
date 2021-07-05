import firebase from "firebase/app";
import "firebase/firestore";

const readData = () => {
  firebase
    .firestore()
    .collection("locations")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data().name);
      });
    });
};

export { readData };
