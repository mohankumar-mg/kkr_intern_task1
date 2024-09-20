import React from "react";

function Card(props) {
  return (
    <div className="shadow-lg shadow-cyan-500/50 w-[260px] h-[350px] rounded-xl">
        <h1 className="font-bold font-mono text-xl text-center pt-[10px] text-indigo-500">{props.service}</h1>
        <p className="p-6 text-center text-lg font-serif">&nbsp;&nbsp;{props.description}</p>
    </div>
  );
}

export default Card;
