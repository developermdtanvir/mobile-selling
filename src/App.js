import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Route/Route";

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
