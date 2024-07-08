import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Notice from "./components/Notice";
import HeaderBanner from "./components/HeaderBanner";
import TurtleCard from "./components/TurtleCard";
import TurtleInfo from "./components/TurtleInfo";

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
  name: "Navbar",
});

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    { name: "text", type: "text", defaultValue: "Button" },
    {
      name: "type",
      type: "text",
      enum: ["primary", "secondary"],
      defaultValue: "primary",
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(Card, {
  name: "Card",
  inputs: [
    { name: "header", type: "text", defaultValue: "Header" },
    { name: "description", type: "text", defaultValue: "Content Here" },
  ],
});

Builder.registerComponent(Notice, {
  name: "Notice",
  inputs: [
    { name: "title", type: "text", defaultValue: "Title" },
    {
      name: "date",
      type: "date",
      // defaultValue: "Today",
    },
    { name: "content", type: "text", defaultValue: "Content" },
  ],
});

Builder.registerComponent(HeaderBanner, {
  name: "Header Banner",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Title",
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
    },
  ],
});

Builder.registerComponent(TurtleCard, {
  name: "Turtle Card",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Title",
    },
    {
      name: "subtitle",
      type: "text",
      defaultValue: "Subtitle",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
    },
  ],
});

Builder.registerComponent(TurtleInfo, {
  name: "Turtle Info",
});
