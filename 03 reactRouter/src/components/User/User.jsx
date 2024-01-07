import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return <div className="bg-slate-600 p-4 text-white text-center text-2xl">Userid : {userid}</div>;
}

export default User;
