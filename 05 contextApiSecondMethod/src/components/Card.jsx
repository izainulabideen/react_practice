import React from "react";

function Card() {
  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/u/99726406?v=4"
        alt="Github"
        className="w-full dark:bg-slate-700 bg-slate-200 rounded-full"
      />
      <div className="text-slate-800 dark:text-slate-200 border-t-4 dark:border-slate-800 border-slate-300 mt-4 pt-4 ps-4">
        <p>
          <b>Name:</b> Zain Ul Abideen
        </p>
        <p>
          <b>Bio:</b> Full Stack Web Developer
        </p>
        <p>
          <b>Profile:</b>{" "}
          <a href="http://zainulabideen.42web.io/">
            http://zainulabideen.42web.io/
          </a>
        </p>
      </div>
    </>
  );
}

export default Card;
