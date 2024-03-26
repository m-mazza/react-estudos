import React from "react";
import Hero from "../components/Hero";
import BgHighwayImage from "./assets/bg-Highway.jpg";
import BgCarImage from "./assets/bg-Car.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const Usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={BgHighwayImage}>
    <p>A auto-escola líder em aprovação</p>
  </Hero>
);

export const WithList = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={BgCarImage}>
    <ul>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
    </ul>
  </Hero>
);
