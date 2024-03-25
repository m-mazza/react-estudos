import React from "react";
import Hero from "../components/Hero";

export default {
  title: "Hero",
  component: Hero,
};

export const Usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir">
    <p>A auto-escola líder em aprovação</p>
  </Hero>
);

export const WithList = () => (
  <Hero title="Ganhe sua liberdade para ir e vir">
    <ul>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
    </ul>
  </Hero>
);
