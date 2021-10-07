// import Sawo from "sawo";
import { useState } from "react";
const signin = () => {
  const [userPayload, setUserPayload] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <div
          id="sawo-container"
          style={{ height: "300px", width: "300px" }}
        ></div>
      ) : (
        "Logged In!"
      )}
    </div>
  );
};

export default signin;
