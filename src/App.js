import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { robots } from "./robots";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  function onSearchChange(e) {
    setSearchField(e.target.value);
  }
  // function handleChange(event) {
  //   let value = event.target.value;
  //   console.log(value);
  //   setRobots(value);
  // }
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div>
      <h1>Robo Friends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}
