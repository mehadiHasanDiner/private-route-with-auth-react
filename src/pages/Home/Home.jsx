import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Home = () => {
  const authInfo = use(AuthContext);
  console.log(authInfo);
  return (
    <div>
      <p>This is home</p>
    </div>
  );
};

export default Home;
