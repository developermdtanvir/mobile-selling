import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Route/Route";

function App() {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  return (
    <div className="container">
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
        <Toaster />
      </Elements>
    </div>
  );
}

export default App;
