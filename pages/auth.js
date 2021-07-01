import FirebaseAuth from "firebaseComponents/cloudFirestore/auth/FirebaseAuth";

const Auth = () => {
  return (
    <div className="m-32 h-banner">
      <p className=" text-8xl text-red-400 items-center flex justify-center m-36">
        Hi !
      </p>
      <FirebaseAuth />
    </div>
  );
};

export default Auth;
