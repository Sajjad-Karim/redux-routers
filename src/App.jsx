import "./App.css";
import { routes } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import ReduxProvider from "./redux/Provider";
function App() {
  return (
    <>
      <ReduxProvider>
        <RouterProvider router={routes} />
      </ReduxProvider>
    </>
  );
}

export default App;
