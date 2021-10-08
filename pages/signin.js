// import Sawo from "sawo";
import SawoLogin from "sawo-react";
import { useState } from "react";
import styles from "../styles/SignIn.module.css";
import Footer from "../components/Footer/Footer";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

const Signin = () => {
  const { isLoggedIn, signIn } = useAuth();
  const show = isLoggedIn;
  const sawoConfig = {
    onSuccess: sawoLoginCallback, //required
    identifierType: "phone_number_sms", //required, must be one of: 'email', 'phone_number_sms',
    apiKey: process.env.NEXT_PUBLIC_SAWO_API_KEY, // required, get it from sawo dev.sawolabs.com,
    containerHeight: "100%", // the login container height, default is 230px
  };
  async function sawoLoginCallback(payload) {
    //  payload.user_id
    signIn(payload);
  }
  return (
    <>
      <div className={styles.page}>
        {!show && <div className={styles.formContainer}>
          <SawoLogin config={sawoConfig} />
        </div>}
        {isLoggedIn && (
          <>
            <h2 className={styles.loggedIn}>You are now Signed In</h2>
            <Link href="/demo">
              <button className={`buttonMain center ${styles.continue}`}>
                Continue to Demo
              </button>
            </Link>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Signin;
