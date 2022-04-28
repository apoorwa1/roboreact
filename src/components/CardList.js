import React from "react";
import robots from "../robots";
import Card from "./Card";

export default function cardList({ robots }) {
  // const cards = robots.map((item, index) => {
  //   return (
  //     <Card
  //       key={index}
  //       id={robots[index].id}
  //       name={robots[index].name}
  //       email={robots[index].email}
  //     />
  //   );
  // });
  // return <div>{cards}</div>;

  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
}
