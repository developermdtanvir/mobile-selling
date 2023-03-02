import React from "react";
import Carousal from "../Carousal/Carousal";
import Review from "../Review/Review";
import Service from "../Service/Service";

export default function Home() {
  return (
    <div>
      <Carousal />
      <Service />
      <Review />
    </div>
  );
}
