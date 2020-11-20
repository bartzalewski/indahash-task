import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import person1 from '../../images/person-1.png'

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card img={person1} name="Basia Sołtysińska" position="Founder" location="Warsaw" email="contact@team.com" setShowSlider={null} setInitialNumber={null} initialNumber={0} />, div);
});
