import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import store from "./store/store";
import Home from "./screens/Home";
import { fetchProfiles } from "./store/actions/profiles";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

const App = () => {
  useEffect(() => {
    store.dispatch(fetchProfiles())
  }, [])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App;
