import "./App.css";

// Import Create Browser Router
import { RouterProvider } from "react-router-dom";

// Import Router from router.tsx
import Router from "../router/Router";

function App() {
  return (
    <>
      {/* Provide routing capabilities using `RouterProvider` */}
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
