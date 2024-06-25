import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/Navbar";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Navbar, {
  name: 'Navbar',
});