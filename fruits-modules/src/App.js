import React from "react";
import fruits from "./foods";
import { choice, remove } from "./helpers";

const someTry = () => {
  const item = choice(fruits);
  console.log(`I’d like one ${item}, please.`);
  console.log(`Here you go: ${item}`);
  console.log(`Delicious! May I have another?`);
  remove(fruits, item);
  const fruitsLeft = fruits.length;
  console.log(`I'm sorry, we're all out. We have ${fruitsLeft} left.`);
};
const App = () => {
  someTry();
  return <div>Hello there</div>;
};

export default App;
