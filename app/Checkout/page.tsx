"use client";
import * as React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCallback } from "react";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Qi5QpEjpNI7k7KCjOZHEslpEG5lzUNfpt9A2clplEgxzNaz1NxJl75XoVELANhtOo2IQRna3x19Z1206Q2jOehU00zaWVFsCt');

const App = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/api/create_checkout_session", {
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (
          !data.clientSecret ||
          typeof data.clientSecret !== "string" ||
          !data.clientSecret.startsWith("cs_")
        ) {
          throw new Error("Invalid clientSecret received from API");
        }
        return data.clientSecret;
      })
      .catch((error) => {
        console.error("fetchClientSecret failed:", error);
        throw error;
      });
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default App;
