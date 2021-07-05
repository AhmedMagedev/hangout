import firebase from "firebase/app";
import initFirebase from "firebase/initFirebase";

initFirebase();

export default (req, res) => {
  firebase
    .firestore()
    .collection("locations")
    .doc(req.query.id)
    .get()
    .then((doc) => {
      res.json(doc.data());
    })
    .catch((error) => {
      res.json({ error });
    });
};
