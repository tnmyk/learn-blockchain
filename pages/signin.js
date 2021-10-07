// import Sawo from "sawo";
import SawoLogin from "sawo-react";
import { useState } from "react";
import styles from "../styles/SignIn.module.css";
import Footer from "../components/Footer/Footer";
const signin = () => {
  const [userPayload, setUserPayload] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const sawoConfig = {
    onSuccess: sawoLoginCallback, //required
    identifierType: "phone_number_sms", //required, must be one of: 'email', 'phone_number_sms',
    apiKey: process.env.NEXT_PUBLIC_SAWO_API_KEY, // required, get it from sawo dev.sawolabs.com,
    containerHeight: "100%", // the login container height, default is 230px
  };
  function sawoLoginCallback(payload) {
    console.log(payload);
  }
  return (
    <>
      <div className={styles.formContainer}>
        <SawoLogin config={sawoConfig} />
      </div>
      <Footer/>
    </>
  );
};

export default signin;
