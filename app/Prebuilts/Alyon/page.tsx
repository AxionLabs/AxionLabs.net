"use client";
import React from "react";
import Purchase from "@/components/Purchase";
const Alyon = () => {
const priceId = "1RJHf4EjpNI7k7KCzkw990Zj"; // Set the price ID here

return (
  <div>
    <h1>Welcome to the Home Page</h1>
    <Purchase priceId={priceId} />
  </div>
);
};

export default Alyon;
