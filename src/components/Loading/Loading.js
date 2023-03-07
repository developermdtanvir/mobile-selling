import React from "react";
import Element from "./Element";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Element />
      <Element />
      <Element />
    </div>
  );
}
