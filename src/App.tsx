import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "@/pages/Home";
import ComponentPage from "@/pages/ComponentPage";
import { useDarkMode } from "usehooks-ts";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:componentHashName",
    element: <ComponentPage />,
  },
]);

function App() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
