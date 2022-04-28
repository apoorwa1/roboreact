import React from "react";
import "tachyons";

export default function Card({ name, email, id }) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="pic" src={`https://robohash.org/${id}?200x200`} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
