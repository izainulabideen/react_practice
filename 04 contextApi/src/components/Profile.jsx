import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4">please login</div>;
  } else {
    return (
      <div className="absolute mt-12 top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4 bg-slate-300  p-2 rounded-md text-white">
        <h2>Username: {user.username}</h2>
        <p>Password:  {user.password}</p>
      </div>
    );
  }
}

export default Profile;
